import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { localeAlternates } from "@/lib/seo";

const TermsClient = dynamic(() => import("./terms-client"));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Terms of Service - PDFOrca",
    description: "PDFOrca terms of service. Read our terms and conditions for using our PDF tools and services.",
    keywords: "terms of service, terms and conditions, pdforca terms, user agreement, service terms",
    alternates: await localeAlternates("/terms"),
    openGraph: {
      title: "Terms of Service - PDFOrca",
      description: "PDFOrca terms and conditions for using our PDF tools.",
      type: "website",
      images: [{ url: "/api/og?title=Terms%20of%20Service&description=Terms%20%26%20Conditions%20for%20Using%20PDFOrca", width: 1200, height: 630, alt: "PDFOrca Terms of Service" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Terms of Service - PDFOrca",
      description: "PDFOrca terms and conditions for using our PDF tools.",
      images: ["/api/og?title=Terms%20of%20Service&description=Terms%20%26%20Conditions%20for%20Using%20PDFOrca"],
    },
  };
}

export default function TermsPage() {
  return <TermsClient />;
}
