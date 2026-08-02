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
    images: [{ url: "/api/og?title=Pricing&description=All%20PDF%20Tools%20Are%20Currently%20Free", width: 1200, height: 630, alt: "PDFOrca Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - PDFOrca",
    description: "PDFOrca pricing plans. All PDF tools are currently free.",
    images: ["/api/og?title=Pricing&description=All%20PDF%20Tools%20Are%20Currently%20Free"],
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
