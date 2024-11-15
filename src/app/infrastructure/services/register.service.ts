import { IRegisterResponse } from "@/app/core/application/dto";
import { HttpClient } from "@/app/infrastructure/utils";
export class RegisterService {
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }
    async register(body:FormData): Promise<IRegisterResponse>{
        try {
            const newClient = await this.httpClient.postBinary<IRegisterResponse>('register',body);
            return newClient;
        } catch(error){
            console.log(error);
            throw error
        }
    }
}