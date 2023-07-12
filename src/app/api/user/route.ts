import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  console.log("GET REQUEST");

  return new Response(JSON.stringify({ name: "John" }), {
    status: 401,
  });
}

export async function POST(req: NextRequest) {
  console.log("POST REQUEST");
}
