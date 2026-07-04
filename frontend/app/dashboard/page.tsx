import type { Metadata } from "next";
import dynamic from "next/dynamic";

const DashboardClient = dynamic(() => import("./dashboard-client"));

export const metadata: Metadata = {
  title: "Dashboard - PDFOrca",
  description: "Your PDFOrca dashboard. View processing history, manage files, and access your account settings.",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <DashboardClient />;
}
