import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ToolSeoSection } from "@/components/tools/tool-seo-section";
import {
  SoftwareApplicationJsonLd,
  HowToJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/json-ld";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const AiToolsClient = dynamic(() => import("./ai-tools-client"));

export const metadata: Metadata = {
  title: "AI PDF Tools - Summarize, Analyze & Extract with AI - PDFOrca",
  description: "Use AI to summarize PDFs, extract key points, analyze sentiment, and generate reports. Free AI-powered PDF analysis tools by PDFOrca.",
  openGraph: {
    title: "AI PDF Tools - Summarize, Analyze & Extract with AI",
    description: "Use AI to summarize PDFs, extract key points, and generate analysis reports.",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    question: "Is AI PDF analysis free on PDFOrca?",
    answer: "Yes, our AI PDF analysis tools are completely free. You can summarize, extract key points, and generate titles from any PDF without registration, payment, or hidden limits.",
  },
  {
    question: "What types of PDFs work with the AI tools?",
    answer: "Our AI works best with text-based PDFs such as reports, research papers, contracts, articles, and ebooks. Scanned PDFs (image-only) should be processed through our OCR tool first to convert them to selectable text before analysis.",
  },
  {
    question: "How accurate is the AI summarization?",
    answer: "The summarization uses a modern large language model that reads the full document context. Accuracy is high for well-structured documents with clear language. Results may vary for heavily technical jargon, tables-only content, or documents with unusual formatting.",
  },
  {
    question: "How long can the PDF be for AI analysis?",
    answer: "The AI can process documents up to 100 MB. Very long documents (500+ pages) are analyzed in sections to maintain accuracy. Summaries and key points cover the full document.",
  },
  {
    question: "What languages does the AI support?",
    answer: "Our AI model supports multiple languages including English, Hindi, Spanish, French, German, and many more. It can summarize and extract key points from documents written in any of these languages.",
  },
  {
    question: "Can I download the AI analysis as a report?",
    answer: "Yes. After analysis is complete, you can download a professionally formatted DOCX report containing the summary, key points, suggested title, and document metadata. The report is ready to share or archive.",
  },
];

const HOW_TO_STEPS = [
  {
    name: "Upload your PDF",
    text: "Click the upload button or drag and drop a PDF file into the AI tools area.",
  },
  {
    name: "Start AI analysis",
    text: "Click the Start AI Analysis button to begin processing your document.",
  },
  {
    name: "Review results",
    text: "View the AI-generated summary, key points, and suggested title in the results panel.",
  },
  {
    name: "Download the report",
    text: "Download a formatted DOCX report with the complete analysis, or copy individual sections.",
  },
];

export default function AiToolsPage() {
  const pageUrl = `${SITE_URL}/ai-tools`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "AI PDF Tools", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="AI PDF Tools"
        description="Free online AI tools to summarize PDFs, extract key points, analyze sentiment, and generate professional reports."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Use AI PDF Tools"
        description="Summarize and analyze any PDF document using AI in 4 easy steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      <AiToolsClient />
      <ToolSeoSection toolKey="ai_tools" />
    </>
  );
}
