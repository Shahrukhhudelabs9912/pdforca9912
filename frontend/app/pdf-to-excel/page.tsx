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

const PDFToExcelClient = dynamic(
  () => import("./pdf-to-excel-client").then((mod) => ({ default: mod.PDFToExcelClient })),
  { loading: () => <ToolPageSkeleton />, ssr: false },
);

export const metadata: Metadata = {
  title: "Convert PDF to Excel Online Free | PDFOrca",
  description: "Convert PDF documents to editable Excel (.xlsx) spreadsheets online for free. Extract tables and data from PDFs.",
  keywords: "pdf to excel, convert pdf to excel, pdf to xlsx, pdf to spreadsheet, extract tables from pdf, pdf to excel converter",
  openGraph: {
    title: "Convert PDF to Excel Online Free | PDFOrca",
    description: "Convert PDF documents to editable Excel (.xlsx) spreadsheets online for free. Extract tables and data from PDFs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PDF to Excel Online Free | PDFOrca",
    description: "Convert PDF documents to editable Excel (.xlsx) spreadsheets online for free. Extract tables and data from PDFs.",
  },
  alternates: {
    canonical: `${SITE_URL}/pdf-to-excel`,
    languages: {
      en: `${SITE_URL}/pdf-to-excel`,
      hi: `${SITE_URL}/hi/pdf-to-excel`,
    },
  },
};

const HOW_TO_STEPS = [
  { name: "Upload your PDF", text: "Drop the PDF you want to convert into the tool." },
  { name: "Convert", text: "Click Convert — tables are detected and reconstructed as Excel sheets." },
  { name: "Download", text: "Save the .xlsx file and edit it in Excel, Google Sheets, or LibreOffice." },
];

const FAQ_ITEMS = [
  { question: "What kinds of PDFs work best?", answer: "PDFs with clearly delimited tables. Scanned PDFs need OCR first — try our OCR PDF tool." },
  { question: "Will the formulas be preserved?", answer: "PDFs only store rendered values, not formulas. The Excel output contains the values shown in the PDF." },
  { question: "Will merged cells be preserved?", answer: "Merged cells, borders, and basic formatting are preserved as closely as possible. Complex conditional formatting may need manual cleanup." },
  { question: "What's the maximum file size?", answer: "You can upload PDFs up to 100 MB each." },
];

export default function PDFToExcelPage() {
  const pageUrl = `${SITE_URL}/pdf-to-excel`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "PDF to Excel", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="PDF to Excel Converter"
        description="Free online tool to extract tables and data from PDFs into editable Excel .xlsx spreadsheets."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Convert PDF to Excel"
        description="Extract tabular data from a PDF into Excel in 3 steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      <ToolLayout
        title="PDF to Excel"
        description="Extract tables from your PDF files and convert them into editable Excel spreadsheets."
        toolName="PDF to Excel"
        toolDescription="Extract tables and data from PDFs into editable Excel .xlsx spreadsheets."
        toolKey="pdf_to_excel"
        relatedTools={[
          { name: "Excel to PDF", href: "/excel-to-pdf" },
          { name: "PDF to Word", href: "/pdf-to-word" },
          { name: "PDF to PowerPoint", href: "/pdf-to-powerpoint" },
        ]}
        seoContent={{
          h1: "Convert PDF to Excel Online Free",
          h2: "How to Convert PDF to Excel",
          content: `
            <p>Our free PDF to Excel converter allows you to extract tables from any PDF document and convert them into editable Microsoft Excel spreadsheets (.xlsx) while preserving the original table structure, rows, and columns.</p>
            <p><strong>Key features:</strong></p>
            <ul>
              <li>Extract tables from PDF to Excel with high accuracy</li>
              <li>Preserve table structure, rows, and columns</li>
              <li>Support for multi-page PDFs with multiple tables</li>
              <li>Each table extracted to a separate Excel sheet</li>
              <li>Professional formatting with headers and borders</li>
              <li>Secure processing with automatic file deletion</li>
              <li>No registration or watermarks</li>
            </ul>
            <p>Perfect for extracting financial data, reports, invoices, or any tabular data from PDF documents into Excel for analysis and editing.</p>
          `,
          faq: FAQ_ITEMS,
        }}
      >
        <PDFToExcelClient />
      </ToolLayout>
    </>
  );
}
