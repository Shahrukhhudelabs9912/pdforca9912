import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export const metadata: Metadata = {
  title: "Pricing - Free PDF Tools | PDFOrca",
  description: "All PDFOrca tools are free. A Pro plan with larger files, batch processing, and priority support is coming soon.",
  keywords: "pdforca pricing, free pdf tools, pdf pro plan, pdf tools cost",
  // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
  alternates: {
    canonical: `${SITE_URL}/pricing`,
    languages: {
      en: `${SITE_URL}/pricing`,
      hi: `${SITE_URL}/hi/pricing`,
    },
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
