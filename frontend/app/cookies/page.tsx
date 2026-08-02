import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { localeAlternates } from "@/lib/seo";

const CookiesClient = dynamic(() => import("./cookies-client"));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Cookie Policy - PDFOrca",
    description: "PDFOrca's cookie policy. Learn about the cookies we use and how to manage your cookie preferences.",
    keywords: "cookie policy, cookies, pdforca cookies, cookie preferences, cookie settings",
    alternates: await localeAlternates("/cookies"),
    openGraph: {
      title: "Cookie Policy - PDFOrca",
      description: "Learn about PDFOrca's use of cookies and your preferences.",
      type: "website",
      images: [{ url: "/api/og?title=Cookie%20Policy&description=PDFOrca%27s%20Use%20of%20Cookies%20%26%20Your%20Preferences", width: 1200, height: 630, alt: "PDFOrca Cookie Policy" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Cookie Policy - PDFOrca",
      description: "Learn about PDFOrca's use of cookies and your preferences.",
      images: ["/api/og?title=Cookie%20Policy&description=PDFOrca%27s%20Use%20of%20Cookies%20%26%20Your%20Preferences"],
    },
  };
}

export default function CookiesPage() {
  return <CookiesClient />;
}
