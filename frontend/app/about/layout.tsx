import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export const metadata: Metadata = {
  title: "About PDFOrca - Our Mission & Story | PDFOrca",
  description: "Learn about PDFOrca — a privacy-first, free online PDF toolkit built to make document workflows fast and accessible for everyone.",
  keywords: "about pdforca, free pdf tools, pdf tools mission, founder story, privacy-first pdf",
  // openGraph/twitter live in page.tsx (page metadata replaces layout's for these objects).
  alternates: {
    canonical: `${SITE_URL}/about`,
    languages: {
      en: `${SITE_URL}/about`,
      hi: `${SITE_URL}/hi/about`,
    },
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
