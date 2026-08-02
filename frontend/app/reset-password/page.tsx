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
    images: [{ url: "/api/og?title=Reset%20Password&description=Reset%20your%20PDFOrca%20account%20password", width: 1200, height: 630, alt: "Reset PDFOrca password" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reset Password - PDFOrca",
    description: "Reset your PDFOrca account password.",
    images: ["/api/og?title=Reset%20Password&description=Reset%20your%20PDFOrca%20account%20password"],
  },
};

export default function ResetPasswordPage() {
  return <ResetPasswordClient />;
}
