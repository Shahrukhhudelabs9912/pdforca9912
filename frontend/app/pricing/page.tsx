import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PricingClient = dynamic(() => import("./pricing-client"));

export const metadata: Metadata = {
  title: "Pricing - PDFOrca",
  description: "PDFOrca pricing plans. All PDF tools are currently free to use with no registration required.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Pricing - PDFOrca",
    description: "PDFOrca pricing plans. All PDF tools are currently free.",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
