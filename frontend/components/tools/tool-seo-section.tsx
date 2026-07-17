"use client";

import { useTranslations } from "next-intl";

interface ToolSeoSectionProps {
  /** Translation namespace key, e.g. "protect_pdf", "organize_pdf". */
  toolKey: string;
}

export function ToolSeoSection({ toolKey }: ToolSeoSectionProps) {
  const t = useTranslations(toolKey as any);
  const tp = useTranslations("tool_pages");

  let body: string | undefined;
  try {
    body = t.raw("seo_content" as any) as string;
  } catch {
    body = undefined;
  }

  let faq: Array<{ question: string; answer: string }> = [];
  try {
    const raw = t.raw("seo_faq" as any);
    if (Array.isArray(raw)) faq = raw;
  } catch {
    faq = [];
  }

  const h2 = (() => {
    try {
      return t("seo_h2" as any) as string;
    } catch {
      return undefined;
    }
  })();

  if (!body && faq.length === 0) return null;

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      {h2 && <h2>{h2}</h2>}
      {body && <div dangerouslySetInnerHTML={{ __html: body }} />}

      {faq.length > 0 && (
        <div className="mt-8">
          <h3>{tp("faq_title")}</h3>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
              >
                <h4 className="font-semibold">{item.question}</h4>
                <p className="mt-2 text-gray-600 dark:text-gray-300">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
