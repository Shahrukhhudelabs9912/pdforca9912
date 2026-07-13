import { getTranslations } from "next-intl/server";

interface ToolSeoHeaderProps {
  /** Translation namespace key, e.g. "protect_pdf", "organize_pdf". */
  toolKey: string;
}

/**
 * Server-rendered page header (visible H1 + subtitle) for tool pages that don't
 * use ToolLayout. Pulls seo_h1 and description from the tool's translation
 * namespace so the heading is localized (English on /, Hindi on /hi) instead of
 * being hard-coded in one language.
 */
export async function ToolSeoHeader({ toolKey }: ToolSeoHeaderProps) {
  const t = await getTranslations(toolKey as any);

  const h1 = (() => {
    try {
      return (t("seo_h1" as any) as string) || undefined;
    } catch {
      return undefined;
    }
  })();

  const subtitle = (() => {
    try {
      return (t("description" as any) as string) || undefined;
    } catch {
      return undefined;
    }
  })();

  if (!h1) return null;

  return (
    <div className="container mx-auto px-5 pt-12 text-center sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        {h1}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
