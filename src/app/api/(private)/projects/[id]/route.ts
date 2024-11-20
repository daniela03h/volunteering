import { NextRequest, NextResponse } from "next/server";
import { HttpClient } from "@/app/infrastructure/utils";

interface IParams {
  id: string;
}

const url = `https://communnityvolunteering-production.up.railway.app/api/v1/projects`;
const client = new HttpClient();
export async function DELETE(
  _request: NextRequest,
  { params }: { params: IParams }
) {
  const headers = await client.getHeader();
  const response = await fetch(`${url}/${params.id}`, {
    headers: headers,
    method: "DELETE",
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

export async function GET(
  _request: NextRequest,
  { params }: { params: IParams }
) {
  const headers = await client.getHeader();
  const response = await fetch(`${url}/${params.id}`, {
    headers: headers,
    method: "GET",
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: IParams }
) {
  const bodyData = await request.json();
  const headers = await client.getHeader();
  const response = await fetch(`${url}/${params.id}`, {
    method: "PATCH",
    headers: headers,
    body: JSON.stringify(bodyData),
  });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
