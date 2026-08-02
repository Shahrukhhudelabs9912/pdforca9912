import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { localeAlternates } from "@/lib/seo";

const GdprClient = dynamic(() => import("./gdpr-client"));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "GDPR Compliance - PDFOrca",
    description: "PDFOrca's GDPR compliance information. Learn about your data rights, how we process your data, and how to exercise your rights under GDPR.",
    keywords: "gdpr compliance, data protection, data privacy, gdpr rights, pdforca gdpr, data processing",
    alternates: await localeAlternates("/gdpr"),
    openGraph: {
      title: "GDPR Compliance - PDFOrca",
      description: "PDFOrca's GDPR compliance and your data rights.",
      type: "website",
      images: [{ url: "/api/og?title=GDPR%20Compliance&description=PDFOrca%27s%20Compliance%20%26%20Your%20Data%20Rights", width: 1200, height: 630, alt: "PDFOrca GDPR Compliance" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "GDPR Compliance - PDFOrca",
      description: "PDFOrca's GDPR compliance and your data rights.",
      images: ["/api/og?title=GDPR%20Compliance&description=PDFOrca%27s%20Compliance%20%26%20Your%20Data%20Rights"],
    },
  };
}

export default function GdprPage() {
  return <GdprClient />;
}
