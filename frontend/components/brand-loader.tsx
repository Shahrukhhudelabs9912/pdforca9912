"use client";

import { cn } from "@/lib/utils";

// ─────────────────────────────────────────────────────────────────────────
// BrandLoader — the single source of truth for PDFOrca's branded loading
// animation. It renders the brand mark (the orca O on a blue→indigo→purple
// gradient, matching public/icon-pdforca.svg) with staggered opacity
// animation to read as "working".
//
// Motion is driven by Tailwind keyframes added in tailwind.config.ts
// (`brand-float`, `brand-line-1/2/3`). When the user prefers reduced motion,
// all of that collapses to a gentle opacity pulse via the `motion-reduce`
// variants.
// ─────────────────────────────────────────────────────────────────────────

type BrandLoaderSize = "sm" | "md" | "lg" | "xl";

interface BrandLoaderProps {
  size?: BrandLoaderSize;
  label?: string;
  className?: string;
}

const markSizeMap: Record<BrandLoaderSize, string> = {
  sm: "h-5 w-5",
  md: "h-8 w-8",
  lg: "h-12 w-12",
  xl: "h-16 w-16",
};

const labelSizeMap: Record<BrandLoaderSize, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
  xl: "text-lg",
};

/**
 * The animated PDFOrca mark on its own (no label). Use this when you only
 * need the glyph (e.g. inside a button). For a labelled, centered block use
 * `BrandLoader`.
 */
export function BrandMark({
  size = "md",
  className,
}: {
  size?: BrandLoaderSize;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block motion-safe:animate-brand-float motion-reduce:animate-pulse",
        markSizeMap[size],
        className,
      )}
      role="status"
      aria-label="Loading"
    >
      <svg
        viewBox="0 0 512 512"
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wlp-loader-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="0.5" stopColor="#6366f1" />
            <stop offset="1" stopColor="#9333ea" />
          </linearGradient>
        </defs>
        <rect width="512" height="512" rx="108" fill="url(#wlp-loader-grad)" />
        <circle
          cx="256"
          cy="256"
          r="135"
          stroke="#fff"
          strokeWidth="50"
          fill="none"
          className="motion-safe:animate-brand-line-1"
        />
        <path
          d="M 238 120 Q 250 25, 290 60 Q 302 82, 290 120"
          fill="#fff"
          className="motion-safe:animate-brand-line-2"
        />
        <path
          d="M 142 320 Q 102 342, 90 325 Q 96 302, 120 302 Z"
          fill="#fff"
          className="motion-safe:animate-brand-line-3"
        />
      </svg>
    </span>
  );
}

/**
 * Spinning circular loader in the brand gradient. This is the primary
 * "something is processing" indicator — it visibly rotates (via Tailwind's
 * `animate-spin`) so users can tell work is in progress, unlike the static
 * `BrandMark` glyph. Collapses to a gentle pulse for reduced-motion users.
 */
export function Spinner({
  size = "md",
  className,
}: {
  size?: BrandLoaderSize;
  className?: string;
}) {
  return (
    <span
      className={cn("inline-block", markSizeMap[size], className)}
      role="status"
      aria-label="Loading"
    >
      <svg
        viewBox="0 0 50 50"
        className="h-full w-full motion-safe:animate-spin motion-reduce:animate-pulse"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wlp-spinner-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#2563eb" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* Faint full-circle track */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          stroke="currentColor"
          className="text-gray-200 dark:text-gray-700"
        />
        {/* Gradient arc that spins */}
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          strokeLinecap="round"
          stroke="url(#wlp-spinner-grad)"
          strokeDasharray="80 200"
        />
      </svg>
    </span>
  );
}

/**
 * Labelled, centered branded loader. Default building block for the wrappers
 * below.
 */
export function BrandLoader({ size = "lg", label, className }: BrandLoaderProps) {
  return (
    <div
      className={cn("flex flex-col items-center justify-center gap-3", className)}
      role="status"
      aria-live="polite"
      aria-label={label || "Loading"}
    >
      <Spinner size={size} />
      {label && (
        <p className={cn("text-gray-500 dark:text-gray-400", labelSizeMap[size])}>
          {label}
        </p>
      )}
    </div>
  );
}

// ── Context-specific wrappers ────────────────────────────────────────────

/** Full-page / full-section centered loader (route transitions, suspense). */
export function FullPageLoader({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex min-h-[60vh] w-full items-center justify-center">
      <BrandLoader size="xl" label={label} />
    </div>
  );
}

/**
 * Fixed full-screen overlay loader. Used for hard navigations that would
 * otherwise leave the screen frozen (e.g. language switch).
 */
export function OverlayLoader({ label = "Loading…" }: { label?: string }) {
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-gray-950/80"
      role="status"
      aria-live="assertive"
    >
      <BrandLoader size="xl" label={label} />
    </div>
  );
}

/** Inline loader for a tool's processing card (mark + stage message). */
export function ToolProcessingLoader({
  label,
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Spinner size="md" />
      {label && (
        <span className="font-medium text-gray-700 dark:text-gray-300">{label}</span>
      )}
    </div>
  );
}

/** Compact loader for file-upload-in-progress states. */
export function FileUploadLoader({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <Spinner size="sm" />
      {label && (
        <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
      )}
    </div>
  );
}

/** Loader tuned for the AI analysis panel's empty/working state. */
export function AIProcessingLoader({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <Spinner size="lg" />
      {label && (
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">{label}</p>
      )}
    </div>
  );
}

/**
 * Small inline loader for buttons. Renders a spinning ring sized to sit beside
 * button text — a branded replacement for ad-hoc `<ButtonLoader />`.
 */
export function ButtonLoader({ className }: { className?: string }) {
  return <Spinner size="sm" className={cn("shrink-0", className)} />;
}
