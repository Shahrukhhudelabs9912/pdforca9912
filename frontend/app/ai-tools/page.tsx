import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AiToolsClient = dynamic(() => import("./ai-tools-client"));

export const metadata: Metadata = {
  title: "AI PDF Tools - Summarize, Analyze & Extract with AI - PDFOrca",
  description: "Use AI to summarize PDFs, extract key points, analyze sentiment, and generate reports. Free AI-powered PDF analysis tools by PDFOrca.",
  openGraph: {
    title: "AI PDF Tools - Summarize, Analyze & Extract with AI",
    description: "Use AI to summarize PDFs, extract key points, and generate analysis reports.",
    type: "website",
  },
};

export default function AiToolsPage() {
  return <AiToolsClient />;
}
