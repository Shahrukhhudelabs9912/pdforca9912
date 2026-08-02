import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { localeAlternates } from "@/lib/seo";

const DisclaimerClient = dynamic(() => import("./disclaimer-client"));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Disclaimer - PDFOrca",
    description:
      "Important disclaimer about PDFOrca's PDF tools, file processing accuracy, AI-generated content, and service limitations.",
    keywords: "disclaimer, pdforca disclaimer, service limitations, liability, accuracy disclaimer",
    alternates: await localeAlternates("/disclaimer"),
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
}

export default function DisclaimerPage() {
  return <DisclaimerClient />;
}
