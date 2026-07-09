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

const ExcelToPDFClient = dynamic(
  () => import("./excel-to-pdf-client").then((mod) => ({ default: mod.ExcelToPDFClient })),
  { loading: () => <ToolPageSkeleton />, ssr: false },
);

export const metadata: Metadata = {
  title: "Convert Excel to PDF Online Free | PDFOrca",
  description: "Convert Excel spreadsheets (.xls, .xlsx) to PDF online for free. Preserve formatting, formulas, and charts. No registration required.",
  keywords: "excel to pdf, convert excel to pdf, xls to pdf, xlsx to pdf, excel to pdf converter, free excel to pdf",
  openGraph: {
    title: "Convert Excel to PDF Online Free | PDFOrca",
    description: "Convert Excel spreadsheets (.xls, .xlsx) to PDF online for free. Preserve formatting, formulas, and charts. No registration required.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert Excel to PDF Online Free | PDFOrca",
    description: "Convert Excel spreadsheets (.xls, .xlsx) to PDF online for free. Preserve formatting, formulas, and charts. No registration required.",
  },
  alternates: {
    canonical: `${SITE_URL}/excel-to-pdf`,
    languages: {
      en: `${SITE_URL}/excel-to-pdf`,
      hi: `${SITE_URL}/hi/excel-to-pdf`,
    },
  },
};

const HOW_TO_STEPS = [
  { name: "Upload your spreadsheet", text: "Drop a .xls or .xlsx file into the tool." },
  { name: "Convert", text: "Click Convert — sheets, charts, and formatting are flattened to PDF." },
  { name: "Download", text: "Save the PDF, ready to share or print." },
];

const FAQ_ITEMS = [
  { question: "Will my charts and formatting be preserved?", answer: "Yes. Charts, conditional formatting, and cell styles are rendered into the PDF." },
  { question: "Does each sheet become a separate page?", answer: "Sheets are paginated according to their print area, so a multi-sheet workbook produces multiple pages." },
  { question: "Is my spreadsheet safe?", answer: "Yes. Files are processed over HTTPS and deleted automatically after processing." },
  { question: "What's the maximum file size?", answer: "100 MB per file for free users." },
];

export default function ExcelToPDFPage() {
  const pageUrl = `${SITE_URL}/excel-to-pdf`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Excel to PDF", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="Excel to PDF Converter"
        description="Free online tool to convert Excel .xls and .xlsx spreadsheets into PDF documents."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Convert Excel to PDF"
        description="Turn a spreadsheet into a PDF in 3 steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      <ToolLayout
        title="Excel to PDF"
        description="Transform your Excel spreadsheets into professional PDF documents."
        toolName="Excel to PDF"
        toolDescription="Convert Excel .xls and .xlsx spreadsheets into PDF documents."
        toolKey="excel_to_pdf"
        relatedTools={[
          { name: "PDF to Excel", href: "/pdf-to-excel" },
          { name: "Word to PDF", href: "/word-to-pdf" },
          { name: "PowerPoint to PDF", href: "/powerpoint-to-pdf" },
        ]}
        seoContent={{
          h1: "Convert Excel to PDF Online Free",
          h2: "How to Convert Excel to PDF",
          content: `
            <p>Our free Excel to PDF converter allows you to transform any Microsoft Excel spreadsheet (.xlsx, .xls) into a professional PDF file while preserving tables, formatting, and sheet structure.</p>
            <p><strong>Key features:</strong></p>
            <ul>
              <li>Convert Excel to PDF with perfect table rendering</li>
              <li>Preserve table structure, formatting, and data</li>
              <li>Support for multi-sheet Excel workbooks</li>
              <li>Professional PDF layout with headers and styling</li>
              <li>Automatic page orientation (portrait/landscape)</li>
              <li>Secure processing with automatic file deletion</li>
              <li>No registration or watermarks</li>
            </ul>
            <p>Perfect for sharing reports, financial statements, invoices, or any spreadsheet data in a universal, print-ready PDF format.</p>
          `,
          faq: FAQ_ITEMS,
        }}
      >
        <ExcelToPDFClient />
      </ToolLayout>
    </>
  );
}
