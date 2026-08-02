import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { localeAlternates } from "@/lib/seo";

const DmcaClient = dynamic(() => import("./dmca-client"));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "DMCA Policy - PDFOrca",
    description: "PDFOrca's DMCA copyright policy. Learn how to report copyright infringement and our process for handling DMCA takedown requests.",
    keywords: "dmca policy, copyright policy, dmca takedown, copyright infringement, pdforca dmca",
    alternates: await localeAlternates("/dmca"),
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
}

export default function DmcaPage() {
  return <DmcaClient />;
}
