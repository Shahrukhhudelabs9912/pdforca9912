import type { Metadata } from "next";
import dynamic from "next/dynamic";

const PrivacyClient = dynamic(() => import("./privacy-client"));

export const metadata: Metadata = {
  title: "Privacy Policy - PDFOrca",
  description: "PDFOrca's privacy policy. Learn how we handle your data, file processing, and personal information with our privacy-first approach.",
  openGraph: {
    title: "Privacy Policy - PDFOrca",
    description: "Learn how PDFOrca handles your data and protects your privacy.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
