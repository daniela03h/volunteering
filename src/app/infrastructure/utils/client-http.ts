import { authOptions, CustomSession } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

const defaulUrl =
  "https://communnityvolunteering-production.up.railway.app/api/v1";

export class HttpClient {
  private baseUrl: string;
  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || defaulUrl;
  }

  async getHeader(formData: boolean = false) {
    const session = (await getServerSession(
      authOptions
    )) as CustomSession | null;

    const headers: HeadersInit = {};
    if (formData === false) {
      headers["Content-Type"] = "application/json";
    }

    if (session?.user?.token) {
      headers["Authorization"] = `Bearer ${session.user.token}`;
    }

    return headers;
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    if (response.status === 204) {
      return true;
    }
    return await response.json();
  }
  async get<T>(url: string): Promise<T> {
    let headers = {}
    if(typeof window === undefined) {
      headers = await this.getHeader();
    }
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers,
      method: "GET",
      cache: "no-cache",
    });
    return this.handleResponse(response);
  }

  async post<T, B>(url: string, body: B): Promise<T> {
    let headers = {}
    if(typeof window === undefined) { // Valida que el codigo este ejecutandose en el servidor
      headers = await this.getHeader();
    }
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    return this.handleResponse(response);
  }

  async postBinary<T>(url: string, body: FormData): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "POST",
      body: body,
    });
    return this.handleResponse(response);
  }

  async put<T, B>(url: string, body: B): Promise<T> {
    let headers = {}
    if(typeof window === undefined) { // Valida que el codigo este ejecutandose en el servidor
      headers = await this.getHeader();
    }
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "PUT",
      body: JSON.stringify(body),
    });
    return this.handleResponse(response);
  }

  async patch<T, B>(url: string, body: B): Promise<T> {
    let headers = {}
    if(typeof window === undefined) { // Valida que el codigo este ejecutandose en el servidor
      headers = await this.getHeader();
    }
    const response = await fetch(`${this.baseUrl}/${url}`, {
      headers: headers,
      method: "PATCH",
      body: JSON.stringify(body),
    });
    return this.handleResponse(response);
  }
  async delete<T>(url: string): Promise<T> {
    const response = await fetch(`${this.baseUrl}/${url}`, {
      method: "DELETE",
    });
    return this.handleResponse(response);
  }
}