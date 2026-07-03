import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export const metadata: Metadata = {
  title: "AI PDF Tools - Summarize & Analyze PDFs with AI | PDFOrca",
  description:
    "Use AI to summarize, analyze, and extract insights from PDF documents. Powered by advanced language models. Free, fast, and private.",
  keywords:
    "ai pdf, pdf summarizer, ai pdf analysis, summarize pdf, pdf ai tools, extract text from pdf",
  openGraph: {
    title: "AI PDF Tools - Summarize & Analyze PDFs with AI | PDFOrca",
    description:
      "Use AI to summarize, analyze, and extract insights from PDF documents.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI PDF Tools - Summarize & Analyze PDFs with AI | PDFOrca",
    description:
      "Use AI to summarize, analyze, and extract insights from PDF documents.",
  },
  alternates: {
    canonical: `${SITE_URL}/ai-tools`,
    languages: {
      en: `${SITE_URL}/ai-tools`,
      hi: `${SITE_URL}/hi/ai-tools`,
    },
  },
};

export default function AIToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
