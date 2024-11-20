import { IProjectsGetResponse, IProjectGetResponse } from "@/app/core/application/dto/projects/projects-get-response";
import { HttpClient} from "../utils";
import { IProjectsRequest } from "@/app/core/application/dto/projects/projects-request";

export class ProjectsService{
    private httpClient: HttpClient;

    constructor(baseUrl?: string){
        this.httpClient = new HttpClient(baseUrl);
    }

    async getById(id: number){
        try{
            const response = this.httpClient.get<IProjectGetResponse>(`projects/${id}`);
            return response
        } catch(error){
            console.log(error);
            throw error;
        }
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

    async createProjects(body:IProjectsRequest){
        try{
            const newProject = await this.httpClient.post('projects',body);
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

    async editProject (id:number, body:IProjectsRequest){
        try{
            const projectEdited =  await this.httpClient.patch(`projects/${id}`, body);
            alert('Editado exitosamente');
            return projectEdited;

        } catch(error){
            console.log(error);
            throw error;
        }
    }
}