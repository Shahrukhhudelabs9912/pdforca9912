import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactClient = dynamic(() => import("./contact-client"));

export const metadata: Metadata = {
  title: "Contact Us - PDFOrca Support",
  description: "Get in touch with the PDFOrca team. We're here to help with any questions about our PDF tools, account issues, or partnership inquiries.",
  openGraph: {
    title: "Contact Us - PDFOrca Support",
    description: "Get in touch with the PDFOrca team for support, questions, or partnerships.",
    type: "website",
    images: [{ url: "/api/og?title=Contact%20Us&description=Get%20in%20touch%20with%20the%20PDFOrca%20team", width: 1200, height: 630, alt: "Contact PDFOrca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - PDFOrca Support",
    description: "Get in touch with the PDFOrca team for support, questions, or partnerships.",
    images: ["/api/og?title=Contact%20Us&description=Get%20in%20touch%20with%20the%20PDFOrca%20team"],
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
