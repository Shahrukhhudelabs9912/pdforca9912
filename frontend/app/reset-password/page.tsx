import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ResetPasswordClient = dynamic(() => import("./reset-password-client"));

export const metadata: Metadata = {
  title: "Reset Password - PDFOrca",
  description: "Reset your PDFOrca account password. Enter your email to receive a password reset link.",
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "Reset Password - PDFOrca",
    description: "Reset your PDFOrca account password.",
    type: "website",
  },
};

export default function ResetPasswordPage() {
  return <ResetPasswordClient />;
}
