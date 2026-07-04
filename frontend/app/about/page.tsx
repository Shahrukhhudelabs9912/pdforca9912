import type { Metadata } from "next";
import dynamic from "next/dynamic";

const AboutClient = dynamic(() => import("./about-client"));

export const metadata: Metadata = {
  title: "About PDFOrca - Free Online PDF Tools Platform",
  description: "Learn about PDFOrca, our mission to provide fast, secure, and AI-powered PDF tools for everyone. Privacy-first approach with no registration required.",
  openGraph: {
    title: "About PDFOrca - Free Online PDF Tools Platform",
    description: "Learn about PDFOrca, our mission to provide fast, secure, and AI-powered PDF tools for everyone.",
    type: "website",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
