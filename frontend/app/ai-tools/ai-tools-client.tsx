"use client";

import { useTranslations } from "next-intl";
import { AIToolsSection } from "@/components/ai/ai-tools-section";
import { ToolLayout } from "@/components/tools/tool-layout";

export default function AIToolsPage() {
  const t = useTranslations("ai_tools");

  return (
    <ToolLayout
      title={t("title")}
      description={t("description")}
      toolName={t("title")}
      toolDescription={t("description")}
      toolKey="ai_tools"
      hideSidebar
      relatedTools={[
        { name: "OCR PDF", href: "/ocr-pdf" },
        { name: "Compress PDF", href: "/compress-pdf" },
        { name: "PDF to Word", href: "/pdf-to-word" },
      ]}
      footer={
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 text-white">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold">{t("how_it_works_title")}</h2>
              <p className="mt-4 text-blue-100">{t("how_it_works_text")}</p>
              <div className="mt-6 space-y-4">
                {[
                  t("feature_accuracy"),
                  t("feature_context"),
                  t("feature_languages"),
                  t("feature_structure"),
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                      <svg
                        className="h-3 w-3 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold">{t("use_cases_title")}</h3>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {[
                  t("use_case_research"),
                  t("use_case_legal"),
                  t("use_case_business"),
                  t("use_case_academic"),
                  t("use_case_technical"),
                  t("use_case_books"),
                ].map((useCase, index) => (
                  <div
                    key={index}
                    className="rounded-lg bg-white/10 p-4 text-center hover:bg-white/20 transition-colors"
                  >
                    {useCase}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      }
    >
      <AIToolsSection />
    </ToolLayout>
  );
}
