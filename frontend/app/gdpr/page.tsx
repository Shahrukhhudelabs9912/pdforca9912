import type { Metadata } from "next";
import dynamic from "next/dynamic";

const GdprClient = dynamic(() => import("./gdpr-client"));

export const metadata: Metadata = {
  title: "GDPR Compliance - PDFOrca",
  description: "PDFOrca's GDPR compliance information. Learn about your data rights, how we process your data, and how to exercise your rights under GDPR.",
  openGraph: {
    title: "GDPR Compliance - PDFOrca",
    description: "PDFOrca's GDPR compliance and your data rights.",
    type: "website",
  },
};

export default function GdprPage() {
  return <GdprClient />;
}
