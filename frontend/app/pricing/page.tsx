import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PricingClient = dynamic(() => import("./pricing-client"));

export const metadata: Metadata = {
  title: "Pricing - PDFOrca Free & Pro Plans",
  description: "Compare PDFOrca's free and Pro plans. Get unlimited PDF processing, larger file sizes, priority support, and AI-powered features with Pro.",
  openGraph: {
    title: "Pricing - PDFOrca Free & Pro Plans",
    description: "Compare PDFOrca's free and Pro plans for PDF processing.",
    type: "website",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
