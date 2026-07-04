import type { Metadata } from "next";
import dynamic from "next/dynamic";

const LoginClient = dynamic(() => import("./login-client"));

export const metadata: Metadata = {
  title: "Login - PDFOrca",
  description: "Sign in to your PDFOrca account to access Pro features, processing history, and saved preferences.",
  openGraph: {
    title: "Login - PDFOrca",
    description: "Sign in to your PDFOrca account.",
    type: "website",
  },
};

export default function LoginPage() {
  return <LoginClient />;
}
