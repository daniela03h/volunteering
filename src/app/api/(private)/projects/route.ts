import { HttpClient } from "@/app/infrastructure/utils/client-http";
import { NextResponse } from "next/server";

const url = 'https://communnityvolunteering-production.up.railway.app/api/v1/projects'
const httpClient = new HttpClient();

export async function POST (request: Request){
    const bodyData = await request.json()
    const headers = await httpClient.getHeader();
    const response = await fetch(url,{
        method : 'POST',
        headers: headers,
        body: JSON.stringify(bodyData)
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}

