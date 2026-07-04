import type { Metadata } from "next";
import dynamic from "next/dynamic";

const HistoryClient = dynamic(() => import("./history-client"));

export const metadata: Metadata = {
  title: "Processing History - PDFOrca Dashboard",
  description: "View your PDF processing history and re-download previously processed files.",
  robots: { index: false, follow: false },
};

export default function HistoryPage() {
  return <HistoryClient />;
}
