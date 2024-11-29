import { NextResponse } from "next/server";

export function cors(req) {
  const origin = "https://red-cross-admin-web-en41.vercel.app"; // Allowed frontend
  const headers = {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
  };

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return NextResponse.json({}, { headers });
  }

  return headers;
}
