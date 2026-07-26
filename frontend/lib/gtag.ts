const ALLOWED_HOSTS = ["pdforca.com", "www.pdforca.com", "localhost"];

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (
    typeof window !== "undefined" &&
    ALLOWED_HOSTS.includes(window.location.hostname) &&
    typeof (window as any).gtag === "function"
  ) {
    (window as any).gtag("event", name, params);
  }
}
