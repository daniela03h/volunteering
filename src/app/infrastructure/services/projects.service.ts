import { IProjectsGetResponse } from "@/app/core/application/dto/projects/projects-get-response";
import { errorAlert, HttpClient, successAlert } from "../utils";

export class ProjectsService{
    private httpClient: HttpClient;

    constructor(){
        this.httpClient = new HttpClient(`${process.env.NEXT_PUBLIC_HOST}/api`);
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

    async postProjects(url:string, body){
        try{
            const newProject = await this.httpClient.post(url,body);
            successAlert('Se creo exitosamente');
            return newProject;
        }catch(error){
            console.log(error);
            errorAlert("No se pudo crear el proyecto")
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

    async editProject (url:string, id:number, body){
        try{
            const projectEdited =  await this.httpClient.patch(`${url}/${id}`, body);
            successAlert('Editado exitosamente');
            return projectEdited;

        } catch(error){
            console.log(error);
            throw error;

        }
    }
}