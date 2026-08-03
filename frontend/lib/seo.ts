import { getLocale } from "next-intl/server";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://pdforca.com";

/**
 * Locale-aware alternates for a route.
 *
 * `path` is the unprefixed route path, e.g. "/merge-pdf" ("/" for home).
 *
 * Routes are flat (no [locale] segment); the custom middleware serves /hi/*
 * by rewriting to the unprefixed route + setting NEXT_LOCALE=hi. So the only
 * per-request locale signal inside metadata is getLocale() (the cookie).
 *
 * Canonical is made self-referencing (the URL actually being served) so the
 * canonical and hreflang agree — fixing Ahrefs "hreflang to non-canonical".
 * URL scheme mirrors app/sitemap.ts: en = unprefixed, hi = /hi + path,
 * x-default = en.
 */
export async function localeAlternates(path: string) {
  const locale = await getLocale();
  const enUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  const hiUrl = path === "/" ? `${SITE_URL}/hi` : `${SITE_URL}/hi${path}`;
  return {
    canonical: locale === "hi" ? hiUrl : enUrl,
    languages: {
      en: enUrl,
      hi: hiUrl,
      "x-default": enUrl,
    },
  };
}

/**
 * English-only alternates for the blog.
 *
 * Blog *content* is not translated per-locale — every post is a single
 * markdown file served identically at /blog/<slug> and /hi/blog/<slug>.
 * Emitting hi/en hreflang there told Google two language versions exist
 * when they don't, which reads as duplicate content.
 *
 * So the blog is treated as single-language: canonical always points to
 * the unprefixed English URL (consolidating the /hi/* duplicate onto it),
 * and no hreflang `languages` map is emitted at all. The tool/marketing
 * pages keep localeAlternates() because their UI genuinely localizes.
 */
export function blogAlternates(path: string) {
  const enUrl = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    canonical: enUrl,
  };
}
