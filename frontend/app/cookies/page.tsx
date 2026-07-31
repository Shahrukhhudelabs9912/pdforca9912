import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const CookiesClient = dynamic(() => import("./cookies-client"));

export const metadata: Metadata = {
  title: "Cookie Policy - PDFOrca",
  description: "PDFOrca's cookie policy. Learn about the cookies we use and how to manage your cookie preferences.",
  keywords: "cookie policy, cookies, pdforca cookies, cookie preferences, cookie settings",
  alternates: {
    canonical: `${SITE_URL}/cookies`,
    languages: {
      en: `${SITE_URL}/cookies`,
      hi: `${SITE_URL}/hi/cookies`,
      "x-default": `${SITE_URL}/cookies`,
    },
  },
  openGraph: {
    title: "Cookie Policy - PDFOrca",
    description: "Learn about PDFOrca's use of cookies and your preferences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - PDFOrca",
    description: "Learn about PDFOrca's use of cookies and your preferences.",
  },
};

export default function CookiesPage() {
  return <CookiesClient />;
}
