import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ContactsClient = dynamic(() => import("./contacts-client"));

export const metadata: Metadata = {
  title: "Contact Submissions - PDFOrca Admin",
  description: "Admin panel for managing contact form submissions.",
  robots: { index: false, follow: false },
};

export default function AdminContactsPage() {
  return <ContactsClient />;
}
