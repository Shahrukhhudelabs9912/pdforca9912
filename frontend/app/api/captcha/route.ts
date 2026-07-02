import { NextResponse } from "next/server";

const PYTHON_API_BASE =
  process.env.PYTHON_API_BASE || "http://localhost:8000/api";

export async function GET() {
  try {
    const res = await fetch(`${PYTHON_API_BASE}/captcha`, { cache: "no-store" });
    const data = await res.json().catch(() => ({ error: "Invalid backend response" }));
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the server." },
      { status: 503 },
    );
  }
}
