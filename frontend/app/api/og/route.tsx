import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const TOOL_ICONS: Record<string, string> = {
  "Merge PDF": "📑",
  "Split PDF": "✂️",
  "Compress PDF": "📦",
  "PDF to Word": "📝",
  "Word to PDF": "📄",
  "PDF to JPG": "🖼️",
  "JPG to PDF": "🖼️",
  "PDF to Excel": "📊",
  "Excel to PDF": "📊",
  "PDF to PowerPoint": "📽️",
  "PowerPoint to PDF": "📽️",
  "Protect PDF": "🔒",
  "Unlock PDF": "🔓",
  "Organize PDF": "📋",
  "Extract Pages": "📑",
  "Rotate PDF": "🔄",
  "Add Watermark": "💧",
  "Page Numbering": "🔢",
  "Sign PDF": "✍️",
  "OCR PDF": "👁️",
  "AI Tools": "🤖",
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "PDFOrca";
  const description =
    searchParams.get("description") || "Fast, Secure & AI-Powered PDF Tools";
  const icon = TOOL_ICONS[title] || "📄";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #4338ca 100%)",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            opacity: 0.08,
            background:
              "radial-gradient(circle at 20% 80%, white 0%, transparent 50%), radial-gradient(circle at 80% 20%, white 0%, transparent 50%)",
          }}
        />

        {/* Top bar with brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                fontSize: "32px",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.5px",
              }}
            >
              PDFOrca
            </div>
          </div>
          <div
            style={{
              fontSize: "16px",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 500,
            }}
          >
            pdforca.com
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            marginBottom: "auto",
          }}
        >
          <div style={{ fontSize: "64px", display: "flex" }}>{icon}</div>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              letterSpacing: "-1px",
              maxWidth: "80%",
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: "24px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.4,
              maxWidth: "70%",
              fontWeight: 400,
            }}
          >
            {description}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: "20px",
              padding: "8px 20px",
              fontSize: "16px",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
            }}
          >
            Free Online Tool
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.15)",
              borderRadius: "20px",
              padding: "8px 20px",
              fontSize: "16px",
              color: "rgba(255,255,255,0.8)",
              fontWeight: 500,
            }}
          >
            No Registration Required
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
