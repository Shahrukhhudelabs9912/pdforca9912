import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const DmcaClient = dynamic(() => import("./dmca-client"));

export const metadata: Metadata = {
  title: "DMCA Policy - PDFOrca",
  description: "PDFOrca's DMCA copyright policy. Learn how to report copyright infringement and our process for handling DMCA takedown requests.",
  alternates: {
    canonical: `${SITE_URL}/dmca`,
  },
  openGraph: {
    title: "DMCA Policy - PDFOrca",
    description: "PDFOrca's DMCA copyright policy and takedown request process.",
    type: "website",
  },
};

export default function DmcaPage() {
  return <DmcaClient />;
}
