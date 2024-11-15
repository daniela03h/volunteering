import { IProjectsData } from "@/app/core/application/dto/projects/projects-get-response";
import { ContainerActions } from "../molecules/ContainerActions";

interface IProps {
  projects: IProjectsData[];
}

export const Table: React.FC<IProps> = ({ projects }) => {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha de inicio</th>
            <th>Fecha de finalización</th>
            <th>Estado</th>
            <th>Organizador</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project: IProjectsData) => (
            <tr key={project.id}>
              <td>{project.title}</td>
              <td>{project.description}</td>
              <td>{String(project.startDate)}</td>
              <td>{String(project.endDate)}</td>
              <td>{project.isActive ? "Activo" : "Inactivo"}</td>
              <td>{project.organizer.name}</td>
              <td>
                <ContainerActions data={project} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
