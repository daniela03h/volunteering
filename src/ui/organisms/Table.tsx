import { IProjectsData } from "@/app/core/application/dto/projects/projects-get-response";
import { ContainerActions } from "../molecules/ContainerActions";

interface IProps {
  projects: IProjectsData[];
}

export const Table: React.FC<IProps> = ({ projects }) => {
  return (
    <section className="m-10">
      <table className="min-w-full">
        <thead className="border-b-2">
          <tr>
            <th className="px-6 py-3">Título</th>
            <th className="px-6 py-3">Descripción</th>
            <th className="px-6 py-3">Fecha de inicio</th>
            <th className="px-6 py-3">Fecha de finalización</th>
            <th className="px-6 py-3">Estado</th>
            <th className="px-6 py-3">Organizador</th>
            <th className="px-6 py-3">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {projects?.map((project: IProjectsData) => (
            <tr key={project.id} className="border-b">
              <td className="px-6 py-4">{project.title}</td>
              <td className="px-6 py-4">{project.description}</td>
              <td className="px-6 py-4">{String(project.startDate)}</td>
              <td className="px-6 py-4">{String(project.endDate)}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-block px-2 py-1 rounded-full ${
                    project.isActive
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {project.isActive ? "Activo" : "Inactivo"}
                </span>
              </td>
              <td className="px-6 py-4">{project.organizer.name}</td>
              <td className="px-6 py-4">
                <ContainerActions data={project} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};
