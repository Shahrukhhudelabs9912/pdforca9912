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
    images: [{ url: "/api/og?title=Features&description=20%2B%20PDF%20Tools%20Including%20AI-Powered%20Features", width: 1200, height: 630, alt: "PDFOrca Features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Features - PDFOrca PDF Tools & Capabilities",
    description: "Explore PDFOrca's 20+ PDF tools including AI-powered features.",
    images: ["/api/og?title=Features&description=20%2B%20PDF%20Tools%20Including%20AI-Powered%20Features"],
  },
};

export default function FeaturesPage() {
  return <FeaturesClient />;
}
