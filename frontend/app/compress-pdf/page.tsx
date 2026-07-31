import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ToolLayout } from "@/components/tools/tool-layout";
import { ToolSeoSection } from "@/components/tools/tool-seo-section";
import { ToolContentSkeleton } from "@/components/skeleton-loader";

import {
  SoftwareApplicationJsonLd,
  HowToJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/json-ld";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const HOW_TO_STEPS = [
  { name: "Upload your PDF", text: "Click upload or drop your PDF into the tool area." },
  { name: "Choose compression level", text: "Pick Low, Medium, or High depending on quality vs. size trade-off." },
  { name: "Compress the file", text: "Press Compress and let our engine optimize images and remove unused data while preserving text quality." },
  { name: "Download", text: "Save the smaller PDF to your device — up to 90% smaller for image-heavy files." },
];

const FAQ_ITEMS = [
  {
    question: "Can I compress a PDF without losing quality?",
    answer: "Yes. PDFOrca's intelligent compression removes hidden metadata, optimizes embedded images, and strips unused objects — text always stays sharp. Choose 'Low' compression to reduce file size without losing quality on image-heavy PDFs."
  },
  {
    question: "How do I reduce PDF file size without losing quality?",
    answer: "Upload your PDF, select the Low or Medium compression level, and click Compress. Our engine reduces PDF file size without losing quality by optimizing images and removing unnecessary data while keeping text crisp."
  },
  {
    question: "How much can I reduce PDF file size?",
    answer: "Image-heavy PDFs can be reduced by up to 90%. Text-only documents typically see a 20–50% reduction. Results vary based on content type and the compression level you choose."
  },
  {
    question: "What is the maximum file size for PDF compression?",
    answer: "You can compress PDF files up to 200MB. For larger files, consider splitting them first using our Split PDF tool."
  },
  {
    question: "Is PDF compression safe?",
    answer: "Yes. Files are processed securely on our servers and automatically deleted after 1 hour. No one else can access your documents."
  }
];

const CompressPDFTool = dynamic(
  () => import("@/components/tools/compress-pdf-tool").then((mod) => ({ default: mod.CompressPDFTool })),
  { loading: () => <ToolContentSkeleton />, ssr: false }
);

export const metadata: Metadata = {
  title: "Compress PDF Without Losing Quality - Reduce PDF File Size Free | PDFOrca",
  description: "Compress PDF without losing quality. Reduce PDF file size online free — no registration needed. Shrink image-heavy PDFs by up to 90% while keeping text sharp.",
  keywords: "compress pdf without losing quality, reduce pdf size without losing quality, compress pdf high quality, pdf compression without losing quality, reduce size of pdf without losing quality, how to reduce pdf file size without losing quality, compress pdf, reduce pdf size, pdf compressor online free",
  openGraph: {
    title: "Compress PDF Without Losing Quality - Free Online PDF Compressor | PDFOrca",
    description: "Reduce PDF file size without losing quality. Free online tool — compress PDFs by up to 90% with no registration required.",
    type: "website",
    images: [{ url: "/api/og?title=Compress%20PDF&description=Reduce%20PDF%20File%20Size%20Without%20Losing%20Quality", width: 1200, height: 630, alt: "Compress PDF Without Losing Quality" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Compress PDF Without Losing Quality - Free Online PDF Compressor | PDFOrca",
    description: "Reduce PDF file size without losing quality. Free online tool — compress PDFs by up to 90%.",
    images: ["/api/og?title=Compress%20PDF&description=Reduce%20PDF%20File%20Size%20Without%20Losing%20Quality"],
  },
  alternates: {
    canonical: `${SITE_URL}/compress-pdf`,
    languages: {
      en: `${SITE_URL}/compress-pdf`,
      hi: `${SITE_URL}/hi/compress-pdf`,
      "x-default": `${SITE_URL}/compress-pdf`,
    },
  },
};

export default function CompressPDFPage() {
  const pageUrl = `${SITE_URL}/compress-pdf`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Compress PDF", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="PDF Compressor"
        description="Free online tool to compress PDF without losing quality. Reduce PDF file size by up to 90% while keeping text sharp."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Compress PDF Without Losing Quality"
        description="Reduce PDF file size without losing quality in 4 simple steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
    <ToolLayout
      title="Compress PDF Without Losing Quality"
      description="Reduce PDF file size without losing quality — free online tool, no registration required"
      toolName="PDF Compressor"
      toolDescription="Compress PDF files to reduce size without losing quality. Our intelligent engine optimizes images and removes unused data — shrink image-heavy PDFs by up to 90% while keeping text sharp."
      toolKey="compress_pdf"
      seoSection={<ToolSeoSection toolKey="compress_pdf" />}
      relatedTools={[
        { name: "Merge PDF", href: "/merge-pdf" },
        { name: "PDF to Word", href: "/pdf-to-word" },
        { name: "PDF to JPG", href: "/pdf-to-jpg" },
      ]}
      >
      <CompressPDFTool />
    </ToolLayout>
    </>
  );
}
