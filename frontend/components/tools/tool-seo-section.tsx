import { getTranslations } from "next-intl/server";

interface ToolSeoSectionProps {
  /** Translation namespace key, e.g. "protect_pdf", "organize_pdf". */
  toolKey: string;
}

/**
 * Server-rendered SEO content block for tool pages that don't use ToolLayout.
 * Renders the visible long-form body (seo_content) and FAQ (seo_faq) from the
 * tool's translation namespace, mirroring the block inside ToolLayout so these
 * pages carry the same substantive, indexable content.
 */
export async function ToolSeoSection({ toolKey }: ToolSeoSectionProps) {
  const t = await getTranslations(toolKey as any);
  const tp = await getTranslations("tool_pages");

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
    <div className="container mx-auto px-5 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-4 sm:p-8 overflow-hidden dark:border-gray-800 dark:bg-gray-900">
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
      </div>
    </div>
  );
}
