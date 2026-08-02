import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export const metadata: Metadata = {
  title: "Features - Fast, Secure PDF Tools | PDFOrca",
  description: "Discover PDFOrca features: lightning-fast PDF processing, end-to-end privacy, 20+ tools, AI-powered summarization, and multi-language support.",
  keywords: "pdforca features, pdf tools features, fast pdf, secure pdf tools, ai pdf tools",
  // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
  alternates: {
    canonical: `${SITE_URL}/features`,
    languages: {
      en: `${SITE_URL}/features`,
      hi: `${SITE_URL}/hi/features`,
    },
  },
};

export default function FeaturesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
