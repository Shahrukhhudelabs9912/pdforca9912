import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ReportsClient = dynamic(() => import("./reports-client"));

export const metadata: Metadata = {
  title: "AI Reports - PDFOrca Dashboard",
  description: "View and manage your AI-generated PDF analysis reports.",
  robots: { index: false, follow: false },
};

export default function ReportsPage() {
  return <ReportsClient />;
}
