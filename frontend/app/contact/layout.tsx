import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export const metadata: Metadata = {
  title: "Contact PDFOrca - Support & Feedback | PDFOrca",
  description: "Get in touch with the PDFOrca team. Email support for bug reports, feature requests, privacy inquiries, and general feedback.",
  keywords: "contact pdforca, pdf support, customer support, feedback, help",
  // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
  alternates: {
    canonical: `${SITE_URL}/contact`,
    languages: {
      en: `${SITE_URL}/contact`,
      hi: `${SITE_URL}/hi/contact`,
    },
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
