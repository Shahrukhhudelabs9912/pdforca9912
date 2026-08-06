import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { localeAlternates } from "@/lib/seo";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "All PDF Tools - Merge, Split, Compress, Convert & More | PDFOrca",
    description: "Browse all 21 free PDF tools on PDFOrca — merge, split, compress, convert PDF to Word, Excel, JPG, OCR, AI summarization, and more. No signup required.",
    keywords: "all pdf tools, pdf tools list, merge pdf, split pdf, compress pdf, pdf converter, free online pdf tools",
    openGraph: {
      title: "All PDF Tools - PDFOrca",
      description: "Browse all 21 free PDF tools — merge, split, compress, convert, OCR, and AI-powered features.",
      url: `${SITE_URL}/tools`,
      type: "website",
      siteName: "PDFOrca",
      images: [{ url: "/api/og?title=All%20PDF%20Tools&description=21%20Free%20PDF%20Tools%20in%20One%20Place", width: 1200, height: 630, alt: "All PDFOrca PDF Tools" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "All PDF Tools - PDFOrca",
      description: "Browse all 21 free PDF tools — merge, split, compress, convert, OCR, and AI-powered features.",
      images: ["/api/og?title=All%20PDF%20Tools&description=21%20Free%20PDF%20Tools%20in%20One%20Place"],
    },
    alternates: await localeAlternates("/tools"),
  };
}

const ToolsGrid = dynamic(
  () => import("@/components/home/tools-grid").then((mod) => ({ default: mod.ToolsGrid })),
  { ssr: true },
);

export default function ToolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ToolsGrid />
    </div>
  );
}
