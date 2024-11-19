import { Input } from "../atoms";
import { IProjectsGetResponse } from "@/app/core/application/dto/projects/projects-get-response";
import Pagination from "../molecules/Pagination";
import { Header } from "../organisms/Header";
import { Table } from "../organisms/Table";
import { Aside } from "../atoms/Aside";
import { Cards } from "../molecules/cards";

interface IProps {
  projects: IProjectsGetResponse;
}

export const ProjectsTemplate: React.FC<IProps> = ({ projects }) => {
  return (
    <div className="w-full h-screen flex">
      <Aside />
      <main  className="w-full bg-gray-100">
        <Header />
        <Cards />
        <div className="px-6 py-6 m-11 shadow-md bg-white rounded-lg">
            <h3 className="text-lg pb-4">Listas de proyectos</h3>
            <div className="w-1/3">
              <Input placeholder="Buscar proyectos" />
            </div>
            <Table projects={projects.data}/>
            <Pagination data={projects} />
        </div>
      </main>
    </div>
  );
};
