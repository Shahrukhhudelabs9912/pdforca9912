"use client";

import { createContext, useContext, useState, ReactNode, useEffect, useCallback, useMemo } from "react";
import { usePathname } from "next/navigation";

const TOOL_PATHS = [
  '/pdf-to-word', '/pdf-to-jpg', '/pdf-to-excel', '/excel-to-pdf',
  '/word-to-pdf', '/merge-pdf', '/split-pdf', '/jpg-to-pdf',
  '/compress-pdf', '/protect-pdf', '/page-numbering', '/organize-pdf',
  '/add-watermark', '/rotate-pdf', '/unlock-pdf', '/extract-pages',
  '/ocr-pdf', '/sign-pdf', '/pdf-to-powerpoint', '/powerpoint-to-pdf',
];

interface FileContextType {
  files: File[];
  setFiles: (files: File[]) => void;
  addFiles: (newFiles: File[]) => void;
  removeFile: (index: number) => void;
  clearFiles: () => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  processingProgress: number;
  setProcessingProgress: (progress: number) => void;
  selectedTool: string | null;
  setSelectedTool: (tool: string | null) => void;
  processingState: 'idle' | 'processing' | 'success' | 'error';
  setProcessingState: (state: 'idle' | 'processing' | 'success' | 'error') => void;
  processedResult: { url: string; filename: string } | null;
  setProcessedResult: (result: { url: string; filename: string } | null) => void;
  resetProcessing: () => void;
  lastToolPath: string | null;
  shouldClearFiles: boolean;
  markForCleanup: () => void;
}

const FileContext = createContext<FileContextType | undefined>(undefined);

export function FileProvider({ children }: { children: ReactNode }) {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [processingState, setProcessingState] = useState<'idle' | 'processing' | 'success' | 'error'>('idle');
  const [processedResult, setProcessedResult] = useState<{ url: string; filename: string } | null>(null);
  const [lastToolPath, setLastToolPath] = useState<string | null>(null);
  const [shouldClearFiles, setShouldClearFiles] = useState(false);
  
  const pathname = usePathname();
  const isToolRoute = useMemo(
    () => TOOL_PATHS.some(p => pathname.includes(p)),
    [pathname],
  );

  // Track navigation and clear files when navigating away from tools
  useEffect(() => {
    if (!isToolRoute) {
      if (lastToolPath) {
        clearFiles();
        setLastToolPath(null);
        setSelectedTool(null);
      }
      return;
    }

    if (lastToolPath && pathname !== lastToolPath) {
      clearFiles();
      setLastToolPath(null);
      setSelectedTool(null);
    }

    setLastToolPath(pathname);
  }, [pathname, lastToolPath, isToolRoute]);

  // Clear files when component unmounts (tool page navigation)
  useEffect(() => {
    return () => {
      if (shouldClearFiles) {
        clearFiles();
        setShouldClearFiles(false);
      }
    };
  }, [shouldClearFiles]);

  const addFiles = (newFiles: File[]) => {
    setFiles(prev => {
      const unique = newFiles.filter(
        f => !prev.some(p => p.name === f.name && p.size === f.size)
      );
      return [...prev, ...unique];
    });
  };

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const resetProcessing = useCallback(() => {
    setProcessingState('idle');
    setProcessedResult(null);
    setProcessingProgress(0);
    setIsLoading(false);
  }, []);

  const clearFiles = useCallback(() => {
    setFiles([]);
    // Also reset processing state when clearing files
    resetProcessing();
  }, [resetProcessing]);

  const markForCleanup = useCallback(() => {
    setShouldClearFiles(true);
  }, []);

  // Auto-clear files after successful processing
  useEffect(() => {
    if (processingState === 'success' && files.length > 0) {
      const timer = setTimeout(() => {
        clearFiles();
      }, 2000); // 2 second delay to ensure download has started
      
      return () => clearTimeout(timer);
    }
  }, [processingState, files.length, clearFiles]);

  // Clear files when page is about to be unloaded (only on tool pages)
  useEffect(() => {
    if (!isToolRoute) return;

    const handleBeforeUnload = () => {
      clearFiles();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [clearFiles, isToolRoute]);

  return (
    <FileContext.Provider
      value={{
        files,
        setFiles,
        addFiles,
        removeFile,
        clearFiles,
        isLoading,
        setIsLoading,
        processingProgress,
        setProcessingProgress,
        selectedTool,
        setSelectedTool,
        processingState,
        setProcessingState,
        processedResult,
        setProcessedResult,
        resetProcessing,
        lastToolPath,
        shouldClearFiles,
        markForCleanup,
      }}
    >
      {children}
    </FileContext.Provider>
  );
}

export function useFileContext() {
  const context = useContext(FileContext);
  if (context === undefined) {
    throw new Error("useFileContext must be used within a FileProvider");
  }
  return context;
}