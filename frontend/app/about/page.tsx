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
    images: [{ url: "/api/og?title=About%20PDFOrca&description=Fast%2C%20Secure%20%26%20AI-Powered%20PDF%20Tools", width: 1200, height: 630, alt: "About PDFOrca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About PDFOrca - Free Online PDF Tools Platform",
    description: "Learn about PDFOrca's mission to provide fast, secure, AI-powered PDF tools.",
    images: ["/api/og?title=About%20PDFOrca&description=Fast%2C%20Secure%20%26%20AI-Powered%20PDF%20Tools"],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
