import type { Metadata } from "next";
import dynamic from "next/dynamic";

const FeaturesClient = dynamic(() => import("./features-client"));

export const metadata: Metadata = {
  title: "Features - PDFOrca PDF Tools & Capabilities",
  description: "Explore PDFOrca's full feature set: merge, split, compress, convert, protect, OCR, AI summarization, and 20+ more PDF tools. All free, no signup required.",
  openGraph: {
    title: "Features - PDFOrca PDF Tools & Capabilities",
    description: "Explore PDFOrca's 20+ PDF tools including AI-powered features.",
    type: "website",
  },
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
