import type { Metadata } from "next";
import dynamic from "next/dynamic";

const SettingsClient = dynamic(() => import("./settings-client"));

export const metadata: Metadata = {
  title: "Settings - PDFOrca",
  description: "Manage your PDFOrca account settings, preferences, and subscription.",
  robots: { index: false, follow: false },
};

export default function SettingsPage() {
  return <SettingsClient />;
}
