import { IRegisterResponse } from "@/app/core/application/dto";
import { HttpClient } from "@/app/infrastructure/utils";

export class RegisterService {
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }
    async registerService(url:string, body:FormData){
        try{
            const newClient = await this.httpClient.postBinary<IRegisterResponse>(url,body);
            return newClient;
        }catch(error){
            console.log(error);
            throw error
        }
    }
}