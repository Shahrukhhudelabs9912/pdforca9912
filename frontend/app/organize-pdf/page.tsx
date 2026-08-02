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

const OrganizePDFClient = dynamic(
  () => import("./organize-pdf-client").then((mod) => ({ default: mod.OrganizePDFClient })),
  { loading: () => <ToolPageSkeleton />, ssr: false },
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Organize PDF Pages Online Free - Reorder, Rotate, Delete | PDFOrca",
    description: "Reorder, rotate, and delete pages in a PDF online for free. Drag-and-drop interface, no registration required.",
    keywords: "organize pdf, reorder pdf pages, rearrange pdf, delete pdf pages, rotate pdf pages, pdf organizer",
    openGraph: {
      title: "Organize PDF Pages Online Free - Reorder, Rotate, Delete | PDFOrca",
      description: "Reorder, rotate, and delete pages in a PDF online for free. Drag-and-drop interface, no registration required.",
      type: "website",
      images: [{ url: "/api/og?title=Organize%20PDF&description=Reorder%2C%20Rotate%20%26%20Delete%20PDF%20Pages", width: 1200, height: 630, alt: "Organize PDF Online Free" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Organize PDF Pages Online Free - Reorder, Rotate, Delete | PDFOrca",
      description: "Reorder, rotate, and delete pages in a PDF online for free. Drag-and-drop interface, no registration required.",
      images: ["/api/og?title=Organize%20PDF&description=Reorder%2C%20Rotate%20%26%20Delete%20PDF%20Pages"],
    },
    alternates: await localeAlternates("/organize-pdf"),
  };
}

const HOW_TO_STEPS = [
  { name: "Upload your PDF", text: "Drop your PDF into the tool to see thumbnails of every page." },
  { name: "Reorder pages", text: "Drag thumbnails to rearrange the page order." },
  { name: "Rotate or delete", text: "Use the per-page controls to rotate or remove pages you don't need." },
  { name: "Download", text: "Click Apply and save the reorganized PDF." },
];

const FAQ_ITEMS = [
  { question: "Can I reorder, rotate, and delete in one pass?", answer: "Yes. Apply any combination of changes and they're written into the output PDF in a single step." },
  { question: "Will the PDF lose quality?", answer: "No. Pages are copied as-is — text, images, and links remain unchanged." },
  { question: "Can I delete specific pages while organizing?", answer: "Yes. You can remove any pages you don't need while rearranging the rest. The remaining pages are saved as a new PDF." },
  { question: "What's the maximum file size?", answer: "You can upload PDFs up to 100 MB each." },
];

export default function OrganizePDFPage() {
  const pageUrl = `${SITE_URL}/organize-pdf`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Organize PDF", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="PDF Organizer"
        description="Free online tool to reorder, rotate, and delete pages within a PDF using a drag-and-drop interface."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Organize a PDF"
        description="Reorder, rotate, and delete pages in a PDF in 4 steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      <ToolLayout
        title="Organize PDF"
        description="Reorder, rotate, and delete pages in a PDF online — free, no registration required"
        toolName="Organize PDF"
        toolDescription="Reorder, rotate, and delete pages within a PDF using a simple drag-and-drop interface."
        toolKey="organize_pdf"
        seoSection={<ToolSeoSection toolKey="organize_pdf" />}
        relatedTools={[
          { name: "Merge PDF", href: "/merge-pdf" },
          { name: "Split PDF", href: "/split-pdf" },
          { name: "Rotate PDF", href: "/rotate-pdf" },
        ]}
      >
        <OrganizePDFClient />
      </ToolLayout>
    </>
  );
}
