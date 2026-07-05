"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/routing";
import {
  FileText,
  Scissors,
  Minimize,
  FileText as FileWord,
  Image as ImageIcon,
  RotateCw,
  Lock,
  Unlock,
  Copy,
  Shield,
  Droplets,
  Hash,
  Grid,
  Merge,
  Brain,
  Sheet,
  FileSpreadsheet,
  Presentation,
  ScanLine,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  {
    key: "merge_pdf",
    icon: Merge,
    href: "/merge-pdf",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-t-blue-500",
    popular: true,
  },
  {
    key: "split_pdf",
    icon: Scissors,
    href: "/split-pdf",
    color: "from-green-500 to-emerald-500",
    borderColor: "border-t-green-500",
    popular: true,
  },
  {
    key: "compress_pdf",
    icon: Minimize,
    href: "/compress-pdf",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-t-purple-500",
    popular: true,
  },
  {
    key: "pdf_to_word",
    icon: FileWord,
    href: "/pdf-to-word",
    color: "from-orange-500 to-red-500",
    borderColor: "border-t-orange-500",
  },
  {
    key: "word_to_pdf",
    icon: FileText,
    href: "/word-to-pdf",
    color: "from-blue-500 to-indigo-500",
    borderColor: "border-t-blue-500",
  },
  {
    key: "pdf_to_jpg",
    icon: ImageIcon,
    href: "/pdf-to-jpg",
    color: "from-yellow-500 to-amber-500",
    borderColor: "border-t-yellow-500",
  },
  {
    key: "jpg_to_pdf",
    icon: FileText,
    href: "/jpg-to-pdf",
    color: "from-teal-500 to-green-500",
    borderColor: "border-t-teal-500",
  },
  {
    key: "protect_pdf",
    icon: Lock,
    href: "/protect-pdf",
    color: "from-red-500 to-orange-500",
    borderColor: "border-t-red-500",
  },
  {
    key: "add_watermark",
    icon: Droplets,
    href: "/add-watermark",
    color: "from-cyan-500 to-blue-500",
    borderColor: "border-t-cyan-500",
  },
  {
    key: "page_numbering",
    icon: Hash,
    href: "/page-numbering",
    color: "from-violet-500 to-purple-500",
    borderColor: "border-t-violet-500",
  },
  {
    key: "organize_pdf",
    icon: Grid,
    href: "/organize-pdf",
    color: "from-amber-500 to-yellow-500",
    borderColor: "border-t-amber-500",
  },
  {
    key: "pdf_to_excel",
    icon: Sheet,
    href: "/pdf-to-excel",
    color: "from-green-500 to-teal-500",
    borderColor: "border-t-green-500",
    popular: true,
  },
  {
    key: "excel_to_pdf",
    icon: FileSpreadsheet,
    href: "/excel-to-pdf",
    color: "from-teal-500 to-cyan-500",
    borderColor: "border-t-teal-500",
    popular: true,
  },
  {
    key: "ai_summarization",
    icon: Brain,
    href: "/ai-tools",
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-t-purple-500",
    featured: true,
  },
  {
    key: "unlock_pdf",
    icon: Unlock,
    href: "/unlock-pdf",
    color: "from-rose-500 to-pink-500",
    borderColor: "border-t-rose-500",
  },
  {
    key: "rotate_pdf",
    icon: RotateCw,
    href: "/rotate-pdf",
    color: "from-indigo-500 to-blue-500",
    borderColor: "border-t-indigo-500",
  },
  {
    key: "extract_pages",
    icon: Copy,
    href: "/extract-pages",
    color: "from-fuchsia-500 to-purple-500",
    borderColor: "border-t-fuchsia-500",
  },
  {
    key: "powerpoint_to_pdf",
    icon: Presentation,
    href: "/powerpoint-to-pdf",
    color: "from-orange-500 to-red-500",
    borderColor: "border-t-orange-500",
  },
  {
    key: "pdf_to_powerpoint",
    icon: Presentation,
    href: "/pdf-to-powerpoint",
    color: "from-red-500 to-pink-500",
    borderColor: "border-t-red-500",
  },
  {
    key: "ocr_pdf",
    icon: ScanLine,
    href: "/ocr-pdf",
    color: "from-emerald-500 to-teal-500",
    borderColor: "border-t-emerald-500",
  },
  {
    key: "sign_pdf",
    icon: PenTool,
    href: "/sign-pdf",
    color: "from-sky-500 to-blue-500",
    borderColor: "border-t-sky-500",
  },
];

export function ToolsGrid() {
  const t = useTranslations();

  return (
    <section id="tools" className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/60 to-blue-100/30 dark:from-transparent dark:to-transparent">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {t("tools.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            {t("tools.subtitle")}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link href={tool.href}>
                <div className={`group relative h-full cursor-pointer overflow-hidden rounded-2xl border border-t-[3px] ${tool.borderColor} border-gray-200 bg-white p-6 shadow-md transition-all hover:border-primary hover:shadow-xl hover:-translate-y-0.5 dark:border-gray-800 dark:bg-gray-900`}>
                  {tool.popular && (
                    <div className="absolute right-4 top-4 rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                      {t("tools.popular")}
                    </div>
                  )}
                  {tool.featured && (
                    <div className="absolute right-4 top-4 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/30 dark:text-purple-300">
                      {t("tools.ai_featured")}
                    </div>
                  )}
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color}`}
                    >
                      <tool.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold">{t(`tools.${tool.key}.title`)}</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {t(`tools.${tool.key}.description`)}
                  </p>
                  <div className="mt-4 flex items-center text-sm font-medium text-primary">
                    {t("tools.use_tool")}
                    <svg
                      className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}