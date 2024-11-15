import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { ProjectsTemplate } from "@/ui/template";
import React from "react";
interface IProps {
  searchParams: {
    page: string;
    size: string;
    name: string;
  };
}
const projectsservice = new ProjectsService();
export default async function ServicesPage({ searchParams }: IProps) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const size = searchParams.size ? parseInt(searchParams.size) : 5;
  const response = await projectsservice.findAllProjects(page, size);
  return <ProjectsTemplate projects={response} />;
}
