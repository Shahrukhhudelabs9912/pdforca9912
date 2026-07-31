import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PrivacyClient = dynamic(() => import("./privacy-client"));

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export const metadata: Metadata = {
  title: "Privacy Policy - PDFOrca",
  description: "PDFOrca's privacy policy. Learn how we handle your data, file processing, and personal information with our privacy-first approach.",
  openGraph: {
    title: "Privacy Policy - PDFOrca",
    description: "Learn how PDFOrca handles your data and protects your privacy.",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
    languages: {
      en: `${SITE_URL}/privacy`,
      hi: `${SITE_URL}/hi/privacy`,
      "x-default": `${SITE_URL}/privacy`,
    },
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
