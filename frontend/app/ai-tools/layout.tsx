import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "AI PDF Tools - Summarize & Analyze PDFs with AI | PDFOrca",
    description:
      "Use AI to summarize, analyze, and extract insights from PDF documents. Powered by advanced language models. Free, fast, and private.",
    keywords:
      "ai pdf, pdf summarizer, ai pdf analysis, summarize pdf, pdf ai tools, extract text from pdf",
    // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
    // alternates live in page.tsx too — layout's would be overridden by the page anyway.
  };
}

export default function AIToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
