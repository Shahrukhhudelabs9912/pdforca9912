import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ToolPageSkeleton } from "@/components/skeleton-loader";
import {
  SoftwareApplicationJsonLd,
  HowToJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/json-ld";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export const metadata: Metadata = {
  title: "Convert PowerPoint to PDF Online Free | PDFOrca",
  description: "Convert PowerPoint (.ppt, .pptx) presentations to PDF online for free. Layout, fonts, and images preserved. No registration required.",
  keywords: "powerpoint to pdf, ppt to pdf, pptx to pdf, convert powerpoint to pdf, ppt to pdf converter, ppt to pdf online",
  openGraph: {
    title: "Convert PowerPoint to PDF Online Free | PDFOrca",
    description: "Convert PowerPoint (.ppt, .pptx) presentations to PDF online for free.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Convert PowerPoint to PDF Online Free | PDFOrca",
    description: "Convert PowerPoint (.ppt, .pptx) presentations to PDF online for free.",
  },
  alternates: {
    canonical: `${SITE_URL}/powerpoint-to-pdf`,
    languages: {
      en: `${SITE_URL}/powerpoint-to-pdf`,
      hi: `${SITE_URL}/hi/powerpoint-to-pdf`,
    },
  },
};

const HOW_TO_STEPS = [
  { name: "Upload your slide deck", text: "Drop a .ppt or .pptx file into the tool." },
  { name: "Convert", text: "Click Convert — our headless engine flattens the deck into a PDF." },
  { name: "Download", text: "Save the resulting PDF, layout and fonts intact." },
];

const FAQ_ITEMS = [
          { question: "Are slide animations preserved?", answer: "PDF is a static format, so animations and transitions are flattened to the final slide content." },
          { question: "What's the file size limit?", answer: "You can upload files up to 100 MB each." },
        ];

import { ToolLayout } from "@/components/tools/tool-layout";

const PowerPointToPDFClient = dynamic(
  () => import("./powerpoint-to-pdf-client").then((mod) => ({ default: mod.PowerPointToPDFClient })),
  { loading: () => <ToolPageSkeleton />, ssr: false }
);

export default function PowerPointToPDFPage() {
  const pageUrl = `${SITE_URL}/powerpoint-to-pdf`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "PowerPoint to PDF", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="PowerPoint to PDF Converter"
        description="Free online tool to convert .ppt and .pptx presentations into PDF documents."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Convert PowerPoint to PDF"
        description="Turn a slide deck into a shareable PDF in 3 steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
    <ToolLayout
      title="PowerPoint to PDF"
      description="Convert PowerPoint presentations to PDF documents while preserving layout, fonts, and images."
      toolName="PowerPoint to PDF"
      toolDescription="Turn .ppt and .pptx slide decks into shareable PDF files."
      toolKey="powerpoint_to_pdf"
      relatedTools={[
        { name: "PDF to PowerPoint", href: "/pdf-to-powerpoint" },
        { name: "Word to PDF", href: "/word-to-pdf" },
        { name: "Excel to PDF", href: "/excel-to-pdf" },
      ]}
    >
      <PowerPointToPDFClient />
    </ToolLayout>
    </>
  );
}
