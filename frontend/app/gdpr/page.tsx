import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const GdprClient = dynamic(() => import("./gdpr-client"));

export const metadata: Metadata = {
  title: "GDPR Compliance - PDFOrca",
  description: "PDFOrca's GDPR compliance information. Learn about your data rights, how we process your data, and how to exercise your rights under GDPR.",
  keywords: "gdpr compliance, data protection, data privacy, gdpr rights, pdforca gdpr, data processing",
  alternates: {
    canonical: `${SITE_URL}/gdpr`,
    languages: {
      en: `${SITE_URL}/gdpr`,
      hi: `${SITE_URL}/hi/gdpr`,
      "x-default": `${SITE_URL}/gdpr`,
    },
  },
  openGraph: {
    title: "GDPR Compliance - PDFOrca",
    description: "PDFOrca's GDPR compliance and your data rights.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Compliance - PDFOrca",
    description: "PDFOrca's GDPR compliance and your data rights.",
  },
};

export default function GdprPage() {
  return <GdprClient />;
}
