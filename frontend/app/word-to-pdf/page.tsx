import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ToolPageSkeleton } from "@/components/skeleton-loader";
import {
  SoftwareApplicationJsonLd,
  HowToJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/json-ld";
import { ToolLayout } from "@/components/tools/tool-layout";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const WordToPDFClient = dynamic(
  () => import("./word-to-pdf-client").then((mod) => ({ default: mod.WordToPDFClient })),
  { loading: () => <ToolPageSkeleton />, ssr: false },
);

export const metadata: Metadata = {
  title: "Convert Word to PDF Online Free | PDFOrca",
  description: "Convert Word documents (.doc, .docx) to PDF online for free. Preserve formatting, fonts, and images. No registration required.",
  keywords: "word to pdf, convert word to pdf, doc to pdf, docx to pdf, word to pdf converter, free word to pdf",
  openGraph: {
    title: "Convert Word to PDF Online Free | PDFOrca",
    description: "Convert Word documents (.doc, .docx) to PDF online for free. Preserve formatting, fonts, and images. No registration required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Word to PDF Online Free | PDFOrca",
    description: "Convert Word documents (.doc, .docx) to PDF online for free. Preserve formatting, fonts, and images. No registration required.",
  },
  alternates: {
    canonical: `${SITE_URL}/word-to-pdf`,
    languages: {
      en: `${SITE_URL}/word-to-pdf`,
      hi: `${SITE_URL}/hi/word-to-pdf`,
    },
  },
};

const HOW_TO_STEPS = [
  { name: "Upload your Word file", text: "Drop a .doc or .docx file into the tool." },
  { name: "Convert", text: "Click Convert — our headless LibreOffice engine renders it to PDF." },
  { name: "Download", text: "Save the PDF — fonts and layout intact." },
];

const FAQ_ITEMS = [
  { question: "Will my fonts and formatting be preserved?", answer: "Yes. We use a headless office engine that preserves fonts, layout, and images faithfully." },
  { question: "Does the tool support .doc as well as .docx?", answer: "Yes. Both legacy .doc and modern .docx are supported." },
  { question: "Are embedded fonts preserved in the PDF?", answer: "Yes. Fonts used in your Word document are embedded in the PDF, so it looks the same on any device regardless of installed fonts." },
  { question: "What's the maximum file size?", answer: "You can upload files up to 100 MB each." },
];

export default function WordToPDFPage() {
  const pageUrl = `${SITE_URL}/word-to-pdf`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Word to PDF", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="Word to PDF Converter"
        description="Free online tool to convert Word .doc and .docx files into PDF documents."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Convert Word to PDF"
        description="Turn a Word document into a PDF in 3 steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      <ToolLayout
        title="Word to PDF"
        description="Convert Word documents (.doc, .docx) to PDF format."
        toolName="Word to PDF"
        toolDescription="Convert Word .doc and .docx files into PDF documents."
        toolKey="word_to_pdf"
        relatedTools={[
          { name: "PDF to Word", href: "/pdf-to-word" },
          { name: "Excel to PDF", href: "/excel-to-pdf" },
          { name: "Merge PDF", href: "/merge-pdf" },
        ]}
      >
        <WordToPDFClient />
      </ToolLayout>
    </>
  );
}
