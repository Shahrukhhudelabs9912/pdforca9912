import type { Metadata } from "next";
import dynamic from "next/dynamic";

const LoginClient = dynamic(() => import("./login-client"));

export const metadata: Metadata = {
  title: "Login - PDFOrca",
  description: "Sign in to your PDFOrca account.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Login - PDFOrca",
    description: "Sign in to your PDFOrca account.",
    type: "website",
    images: [{ url: "/api/og?title=Login&description=Sign%20in%20to%20your%20PDFOrca%20account", width: 1200, height: 630, alt: "Login to PDFOrca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Login - PDFOrca",
    description: "Sign in to your PDFOrca account.",
    images: ["/api/og?title=Login&description=Sign%20in%20to%20your%20PDFOrca%20account"],
  },
};

export default function LoginPage() {
  return <LoginClient />;
}
