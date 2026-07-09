"use client";

import Link from "next/link";
import {
  FileSearch, Home, Combine, Scissors, Shrink, FileText,
  ImageIcon, BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const popularTools = [
  { name: "Merge PDF", href: "/merge-pdf", icon: Combine },
  { name: "Split PDF", href: "/split-pdf", icon: Scissors },
  { name: "Compress PDF", href: "/compress-pdf", icon: Shrink },
  { name: "PDF to Word", href: "/pdf-to-word", icon: FileText },
  { name: "Word to PDF", href: "/word-to-pdf", icon: FileText },
  { name: "JPG to PDF", href: "/jpg-to-pdf", icon: ImageIcon },
];

export default function NotFound() {
  const t = useTranslations("errors");

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="text-center max-w-2xl">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
          <FileSearch className="h-10 w-10 text-gray-400 dark:text-gray-500" />
        </div>
        <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-700">
          404
        </h1>
        <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white">
          {t("not_found")}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {t("not_found_desc")}
        </p>
        <div className="mt-6">
          <Button asChild className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" />
              {t("go_home")}
            </Link>
          </Button>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {t("popular_tools")}
          </h3>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {popularTools.map((tool) => {
              const ToolIcon = tool.icon;
              return (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:text-gray-300 dark:hover:border-blue-800 dark:hover:bg-blue-950 dark:hover:text-blue-300"
                >
                  <ToolIcon className="h-4 w-4 shrink-0" />
                  {tool.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <BookOpen className="h-4 w-4" />
            {t("explore_blog")}
          </Link>
        </div>
      </div>
    </div>
  );
}