import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

const CookiesClient = dynamic(() => import("./cookies-client"));

export const metadata: Metadata = {
  title: "Cookie Policy - PDFOrca",
  description: "PDFOrca's cookie policy. Learn about the cookies we use and how to manage your cookie preferences.",
  alternates: {
    canonical: `${SITE_URL}/cookies`,
  },
  openGraph: {
    title: "Cookie Policy - PDFOrca",
    description: "Learn about PDFOrca's use of cookies and your preferences.",
    type: "website",
  },
};

export default function CookiesPage() {
  return <CookiesClient />;
}
