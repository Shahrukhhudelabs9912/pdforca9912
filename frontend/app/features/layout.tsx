import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Features - Fast, Secure PDF Tools | PDFOrca",
    description: "Discover PDFOrca features: lightning-fast PDF processing, end-to-end privacy, 20+ tools, AI-powered summarization, and multi-language support.",
    keywords: "pdforca features, pdf tools features, fast pdf, secure pdf tools, ai pdf tools",
    // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
    alternates: await localeAlternates("/features"),
  };
}

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
