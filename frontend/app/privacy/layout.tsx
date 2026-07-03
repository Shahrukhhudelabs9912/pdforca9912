import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

export const metadata: Metadata = {
  title: "Privacy Policy | PDFOrca",
  description:
    "Learn how PDFOrca protects your privacy. Files are processed securely and deleted automatically. No tracking, no data selling.",
  openGraph: {
    title: "Privacy Policy | PDFOrca",
    description:
      "Learn how PDFOrca protects your privacy. Files are processed securely and deleted automatically.",
    type: "website",
  },
  alternates: {
    canonical: `${SITE_URL}/privacy`,
    languages: {
      en: `${SITE_URL}/privacy`,
      hi: `${SITE_URL}/hi/privacy`,
    },
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
