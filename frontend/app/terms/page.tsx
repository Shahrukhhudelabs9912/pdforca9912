import type { Metadata } from "next";
import dynamic from "next/dynamic";

const TermsClient = dynamic(() => import("./terms-client"));

export const metadata: Metadata = {
  title: "Terms of Service - PDFOrca",
  description: "PDFOrca terms of service. Read our terms and conditions for using our PDF tools and services.",
  openGraph: {
    title: "Terms of Service - PDFOrca",
    description: "PDFOrca terms and conditions for using our PDF tools.",
    type: "website",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
