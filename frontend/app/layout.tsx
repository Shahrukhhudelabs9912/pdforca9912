import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getLocale } from 'next-intl/server';
import { cookies } from 'next/headers';
import { routing } from '@/routing';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SentryInit } from "@/components/sentry-init";
import { AnalyticsInitializer } from "@/components/analytics-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { FileProvider } from "@/lib/file-context";
import { AuthProvider } from "@/lib/auth-context";
import { ErrorBoundary } from "@/components/error-boundary";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/json-ld";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "PDFOrca - Fast, Secure & AI-Powered PDF Tools",
  description: "Merge, split, compress, convert PDF files online for free. Fast, secure, and AI-powered PDF tools with privacy-first approach.",
  keywords: "PDF tools, merge PDF, split PDF, compress PDF, PDF to Word, Word to PDF, PDF converter, AI PDF summarization",
  authors: [{ name: "PDFOrca" }],
  robots: "index, follow",
  verification: {
    google: "UaaT6fk7tLaOZEiuTXwrJqYuVDwV-Ce-mG1DDbk4mjE",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en": "/en",
      "hi": "/hi",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pdforca.com",
    title: "PDFOrca - Fast, Secure & AI-Powered PDF Tools",
    description: "Merge, split, compress, convert PDF files online for free. Fast, secure, and AI-powered PDF tools.",
    siteName: "PDFOrca",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDFOrca - Fast, Secure & AI-Powered PDF Tools",
    description: "Merge, split, compress, convert PDF files online for free.",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/icon-pdforca.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icon-192.png",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  const locale = await getLocale();

  // Read theme cookie to SSR the correct class on <html>,
  // eliminating the hydration mismatch caused by next-themes' inline script.
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('theme')?.value;
  // Only pre-set the class when the user has explicitly chosen dark.
  // For 'system' or 'light', the server renders without a dark class;
  // next-themes' blocking script adds it before hydration if needed.
  const ssrThemeClass = themeCookie === 'dark' ? 'dark' : '';
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return (
    <html lang={locale} className={ssrThemeClass} suppressHydrationWarning>
      <body className={`min-h-screen flex flex-col ${inter.className}`} suppressHydrationWarning>
        {adsenseId && (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        )}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <ErrorBoundary>
              <SentryInit />
              <AuthProvider>
                <AnalyticsInitializer />
                <Header />
                <FileProvider>
                  <main className="flex-1">{children}</main>
                </FileProvider>
                <Footer />
                <Toaster />
              </AuthProvider>
            </ErrorBoundary>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
