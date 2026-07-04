import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SignupClient = dynamic(() => import("./signup-client"));

export const metadata: Metadata = {
  title: "Sign Up - PDFOrca",
  description: "Create a free PDFOrca account to unlock Pro features, processing history, and personalized PDF tool experience.",
  openGraph: {
    title: "Sign Up - PDFOrca",
    description: "Create a free PDFOrca account for enhanced PDF tools.",
    type: "website",
  },
};

export default function SignupPage() {
  return <SignupClient />;
}
