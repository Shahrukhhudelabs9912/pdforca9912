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
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
