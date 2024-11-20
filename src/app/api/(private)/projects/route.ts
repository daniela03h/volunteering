import { HttpClient } from "@/app/infrastructure/utils/client-http";
import { NextResponse } from "next/server";

const url = `${process.env.NEXT_PUBLIC_API_HOST}/projects`
const httpClient = new HttpClient();

export async function POST (request: Request){
    const bodyData = await request.json()
    const headers = await httpClient.getHeader();

    console.log('headers', headers)

    const response = await fetch(url,{
        method : 'POST',
        headers: headers,
        body: JSON.stringify(bodyData)
    });
    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}

