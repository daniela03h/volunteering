import { IProjectsGetResponse } from "@/app/core/application/dto/projects/projects-get-response";
import { HttpClient} from "../utils";
import { IProjectsRequest } from "@/app/core/application/dto/projects/projects-request";

export class ProjectsService{
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient();
    }

    async findAllProjects(page: number, size: number){
        try{
            const response = this.httpClient.get<IProjectsGetResponse>(`projects?page=${page}&size=${size}`);
            return response
        } catch(error){
            console.log(error);
            throw error;
        }
    }

    async createProjects(url:string, body:IProjectsRequest){
        try{
            const newProject = await this.httpClient.post(url,body);
            alert('Se creo exitosamente');
            return newProject;
        }catch(error){
            console.log(error);
            alert("No se pudo crear el proyecto")
            throw error
        }
    }

    async deleteProject(id:number){
        try{
            const projectToDelete = await this.httpClient.delete(`projects/${String(id)}`);
            return projectToDelete;
        } catch(error){
            console.log(error);
            throw error;
        }
    }

    async editProject (url:string, id:number, body:IProjectsRequest){
        try{
            const projectEdited =  await this.httpClient.put(`${url}/${id}`, body);
            alert('Editado exitosamente');
            return projectEdited;

        } catch(error){
            console.log(error);
            throw error;
        }
    }
}