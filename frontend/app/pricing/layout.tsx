import type { Metadata } from "next";
import { localeAlternates } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Pricing - Free PDF Tools | PDFOrca",
    description: "All PDFOrca tools are free. A Pro plan with larger files, batch processing, and priority support is coming soon.",
    keywords: "pdforca pricing, free pdf tools, pdf pro plan, pdf tools cost",
    // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
    alternates: await localeAlternates("/pricing"),
  };
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
