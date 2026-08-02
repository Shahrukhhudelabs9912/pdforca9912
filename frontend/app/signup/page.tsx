import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SignupClient = dynamic(() => import("./signup-client"));

export const metadata: Metadata = {
  title: "Sign Up - PDFOrca",
  description: "Create a free PDFOrca account.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Sign Up - PDFOrca",
    description: "Create a free PDFOrca account.",
    type: "website",
    images: [{ url: "/api/og?title=Sign%20Up&description=Create%20a%20free%20PDFOrca%20account", width: 1200, height: 630, alt: "Sign up for PDFOrca" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up - PDFOrca",
    description: "Create a free PDFOrca account.",
    images: ["/api/og?title=Sign%20Up&description=Create%20a%20free%20PDFOrca%20account"],
  },
};

export default function SignupPage() {
  return <SignupClient />;
}
