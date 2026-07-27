import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const DisclaimerClient = dynamic(() => import("./disclaimer-client"));

export const metadata: Metadata = {
  title: "Disclaimer - PDFOrca",
  description:
    "Important disclaimer about PDFOrca's PDF tools, file processing accuracy, AI-generated content, and service limitations.",
  keywords: "disclaimer, pdforca disclaimer, service limitations, liability, accuracy disclaimer",
  alternates: {
    canonical: `${SITE_URL}/disclaimer`,
    languages: {
      en: `${SITE_URL}/disclaimer`,
      hi: `${SITE_URL}/hi/disclaimer`,
    },
  },
  openGraph: {
    title: "Disclaimer - PDFOrca",
    description:
      "Important disclaimer about PDFOrca's PDF tools and service limitations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer - PDFOrca",
    description: "Important disclaimer about PDFOrca's PDF tools and service limitations.",
  },
};

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
