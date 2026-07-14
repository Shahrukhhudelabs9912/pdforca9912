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
  },
};

export default function SignupPage() {
  return <SignupClient />;
}
