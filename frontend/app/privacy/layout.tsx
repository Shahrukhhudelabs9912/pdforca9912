import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Privacy Policy | PDFOrca",
    description:
      "Learn how PDFOrca protects your privacy. Files are processed securely and deleted automatically. No tracking, no data selling.",
    // openGraph lives in page.tsx (page metadata replaces layout's for this object).
    alternates: await localeAlternates("/privacy"),
  };
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
