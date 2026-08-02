import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { localeAlternates } from "@/lib/seo";
import { ToolPageSkeleton } from "@/components/skeleton-loader";
import {
  SoftwareApplicationJsonLd,
  HowToJsonLd,
  FAQPageJsonLd,
  BreadcrumbJsonLd,
} from "@/components/seo/json-ld";
import { ToolLayout } from "@/components/tools/tool-layout";
import { ToolSeoSection } from "@/components/tools/tool-seo-section";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const PageNumberingClient = dynamic(
  () => import("./page-numbering-client").then((mod) => ({ default: mod.PageNumberingClient })),
  { loading: () => <ToolPageSkeleton />, ssr: false },
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Add Page Numbers to PDF Online Free | PDFOrca",
    description: "Add page numbers to a PDF document online for free. Customize position, format, and starting number. No registration required.",
    keywords: "add page numbers to pdf, pdf page numbering, number pdf pages, pdf page numbers, paginate pdf",
    openGraph: {
      title: "Add Page Numbers to PDF Online Free | PDFOrca",
      description: "Add page numbers to a PDF document online for free. Customize position, format, and starting number. No registration required.",
      type: "website",
      images: [{ url: "/api/og?title=Page%20Numbering&description=Add%20Page%20Numbers%20to%20PDF", width: 1200, height: 630, alt: "Add Page Numbers to PDF Online Free" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Add Page Numbers to PDF Online Free | PDFOrca",
      description: "Add page numbers to a PDF document online for free. Customize position, format, and starting number. No registration required.",
      images: ["/api/og?title=Page%20Numbering&description=Add%20Page%20Numbers%20to%20PDF"],
    },
    alternates: await localeAlternates("/page-numbering"),
  };
}

const HOW_TO_STEPS = [
  { name: "Upload your PDF", text: "Drop the PDF you want to number into the tool." },
  { name: "Choose position", text: "Pick top or bottom, left/center/right, and the format (e.g. '1', 'Page 1', '1 of N')." },
  { name: "Set the starting number", text: "Choose where numbering starts — useful when chapter PDFs continue from a previous file." },
  { name: "Download", text: "Click Apply and save the numbered PDF." },
];

const FAQ_ITEMS = [
  { question: "Can I skip the title page?", answer: "Yes. Set the starting page so numbering begins from page 2 (or any other page)." },
  { question: "What number formats are supported?", answer: "Plain numbers ('1'), 'Page 1', '1 of 10', and Roman numerals." },
  { question: "Can I start numbering from a specific page?", answer: "Yes. You can choose which page to start numbering from and set a custom starting number, so cover pages or table of contents stay unnumbered." },
  { question: "What's the maximum file size?", answer: "You can upload PDFs up to 100 MB each." },
];

export default function PageNumberingPage() {
  const pageUrl = `${SITE_URL}/page-numbering`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Page Numbering", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="PDF Page Numbering Tool"
        description="Free online tool to add page numbers to a PDF with control over position, format, and starting number."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Add Page Numbers to a PDF"
        description="Number every page of a PDF in 4 steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      <ToolLayout
        title="Add Page Numbers to PDF"
        description="Add page numbers to a PDF online — customize position, format, and starting number, free"
        toolName="Page Numbering"
        toolDescription="Add page numbers to a PDF document with control over position, format, and starting number."
        toolKey="page_numbering"
        seoSection={<ToolSeoSection toolKey="page_numbering" />}
        relatedTools={[
          { name: "Organize PDF", href: "/organize-pdf" },
          { name: "Add Watermark", href: "/add-watermark" },
          { name: "Merge PDF", href: "/merge-pdf" },
        ]}
      >
        <PageNumberingClient />
      </ToolLayout>
    </>
  );
}
