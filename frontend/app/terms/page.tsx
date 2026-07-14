import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const TermsClient = dynamic(() => import("./terms-client"));

export const metadata: Metadata = {
  title: "Terms of Service - PDFOrca",
  description: "PDFOrca terms of service. Read our terms and conditions for using our PDF tools and services.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: "Terms of Service - PDFOrca",
    description: "PDFOrca terms and conditions for using our PDF tools.",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
