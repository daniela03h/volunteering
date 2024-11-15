import { NextResponse, NextRequest } from "next/server";

const url = `https://communnityvolunteering-production.up.railway.app/api/v1/projects`;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const size = parseInt(searchParams.get("size") || "5");
  const response = await fetch(`${url}?page=${page}&size=${size}`, {
    method: "GET",
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
