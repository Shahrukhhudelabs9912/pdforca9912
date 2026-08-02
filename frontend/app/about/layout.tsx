import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About PDFOrca - Our Mission & Story | PDFOrca",
    description: "Learn about PDFOrca — a privacy-first, free online PDF toolkit built to make document workflows fast and accessible for everyone.",
    keywords: "about pdforca, free pdf tools, pdf tools mission, founder story, privacy-first pdf",
    // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
    alternates: await localeAlternates("/about"),
  };
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
