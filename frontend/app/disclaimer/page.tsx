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
      "x-default": `${SITE_URL}/disclaimer`,
    },
  },
  openGraph: {
    title: "Disclaimer - PDFOrca",
    description:
      "Important disclaimer about PDFOrca's PDF tools and service limitations.",
    type: "website",
    images: [{ url: "/api/og?title=Disclaimer&description=About%20PDFOrca%27s%20Tools%20%26%20Service%20Limitations", width: 1200, height: 630, alt: "PDFOrca Disclaimer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer - PDFOrca",
    description: "Important disclaimer about PDFOrca's PDF tools and service limitations.",
    images: ["/api/og?title=Disclaimer&description=About%20PDFOrca%27s%20Tools%20%26%20Service%20Limitations"],
  },
};

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
