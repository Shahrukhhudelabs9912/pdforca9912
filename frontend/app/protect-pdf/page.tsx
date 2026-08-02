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

const ProtectPDFClient = dynamic(
  () => import("./protect-pdf-client").then((mod) => ({ default: mod.ProtectPDFClient })),
  { loading: () => <ToolPageSkeleton />, ssr: false },
);

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Password Protect PDF Online Free - Encrypt PDF Files | PDFOrca",
    description: "Add password protection to PDF files online for free. AES encryption, no registration required.",
    keywords: "protect pdf, password protect pdf, encrypt pdf, secure pdf, pdf password, lock pdf, add password to pdf",
    openGraph: {
      title: "Password Protect PDF Online Free - Encrypt PDF Files | PDFOrca",
      description: "Add password protection to PDF files online for free. AES encryption, no registration required.",
      type: "website",
      images: [{ url: "/api/og?title=Protect%20PDF&description=Add%20Password%20Protection%20to%20PDF", width: 1200, height: 630, alt: "Protect PDF Online Free" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Password Protect PDF Online Free - Encrypt PDF Files | PDFOrca",
      description: "Add password protection to PDF files online for free. AES encryption, no registration required.",
      images: ["/api/og?title=Protect%20PDF&description=Add%20Password%20Protection%20to%20PDF"],
    },
    alternates: await localeAlternates("/protect-pdf"),
  };
}

const HOW_TO_STEPS = [
  { name: "Upload your PDF", text: "Drop the PDF you want to protect into the tool." },
  { name: "Set a password", text: "Choose a strong password — this is the password readers will need to open the file." },
  { name: "Download", text: "Click Protect and save the encrypted PDF." },
];

const FAQ_ITEMS = [
  { question: "What encryption is used?", answer: "AES-128 or AES-256 depending on the option you select. Both are industry-standard PDF encryption schemes." },
  { question: "Can I recover a forgotten password?", answer: "No — that's the whole point of encryption. Keep your password somewhere safe." },
  { question: "Is my PDF safe during processing?", answer: "Yes. Files are processed over HTTPS and deleted automatically after processing." },
  { question: "What's the maximum file size?", answer: "You can upload PDFs up to 100 MB each." },
];

export default function ProtectPDFPage() {
  const pageUrl = `${SITE_URL}/protect-pdf`;
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: SITE_URL },
          { name: "Protect PDF", url: pageUrl },
        ]}
      />
      <SoftwareApplicationJsonLd
        name="PDF Password Protection Tool"
        description="Free online tool to add password protection and AES encryption to a PDF document."
        url={pageUrl}
      />
      <HowToJsonLd
        name="How to Password-Protect a PDF"
        description="Encrypt a PDF with a password in 3 steps."
        steps={HOW_TO_STEPS}
      />
      <FAQPageJsonLd items={FAQ_ITEMS} />
      <ToolLayout
        title="Protect PDF"
        description="Add password protection and AES encryption to your PDF — free, no registration required"
        toolName="Protect PDF"
        toolDescription="Secure your PDF files with password protection and 256-bit AES encryption. Control document permissions for printing, copying, and editing."
        toolKey="protect_pdf"
        seoSection={<ToolSeoSection toolKey="protect_pdf" />}
        relatedTools={[
          { name: "Unlock PDF", href: "/unlock-pdf" },
          { name: "Sign PDF", href: "/sign-pdf" },
          { name: "Compress PDF", href: "/compress-pdf" },
        ]}
      >
        <ProtectPDFClient />
      </ToolLayout>
    </>
  );
}
