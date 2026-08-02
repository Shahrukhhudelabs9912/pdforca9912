import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact PDFOrca - Support & Feedback | PDFOrca",
    description: "Get in touch with the PDFOrca team. Email support for bug reports, feature requests, privacy inquiries, and general feedback.",
    keywords: "contact pdforca, pdf support, customer support, feedback, help",
    // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
    alternates: await localeAlternates("/contact"),
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
