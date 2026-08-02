import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const DmcaClient = dynamic(() => import("./dmca-client"));

export const metadata: Metadata = {
  title: "DMCA Policy - PDFOrca",
  description: "PDFOrca's DMCA copyright policy. Learn how to report copyright infringement and our process for handling DMCA takedown requests.",
  keywords: "dmca policy, copyright policy, dmca takedown, copyright infringement, pdforca dmca",
  alternates: {
    canonical: `${SITE_URL}/dmca`,
    languages: {
      en: `${SITE_URL}/dmca`,
      hi: `${SITE_URL}/hi/dmca`,
      "x-default": `${SITE_URL}/dmca`,
    },
  },
  openGraph: {
    title: "DMCA Policy - PDFOrca",
    description: "PDFOrca's DMCA copyright policy and takedown request process.",
    type: "website",
    images: [{ url: "/api/og?title=DMCA%20Policy&description=Copyright%20Policy%20%26%20Takedown%20Request%20Process", width: 1200, height: 630, alt: "PDFOrca DMCA Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "DMCA Policy - PDFOrca",
    description: "PDFOrca's DMCA copyright policy and takedown request process.",
    images: ["/api/og?title=DMCA%20Policy&description=Copyright%20Policy%20%26%20Takedown%20Request%20Process"],
  },
};

export default function DmcaPage() {
  return <DmcaClient />;
}
