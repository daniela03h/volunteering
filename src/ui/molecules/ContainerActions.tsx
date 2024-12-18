"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../atoms/Button";
import { IProjectsData } from "@/app/core/application/dto/projects/projects-get-response";
import { Modal } from "../atoms/Modal";
import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { ProjectsForm } from "../organisms/ProjectsForm";

interface ITdActions {
  data: IProjectsData;
}

const projectService = new ProjectsService('/api');

export const ContainerActions: React.FC<ITdActions> = ({ data }) => {
  const [initialData, setInitialData] = useState<IProjectsData>();
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => setModal(false);
  const router = useRouter();

  const handleEdit = async (id: number) => {
    const projectToEdit = await projectService.getById(id);
    setInitialData(projectToEdit.data)
    setModal(true);
  }

  const handleDelete = async (id: number) => {
    const projectToDelete = await projectService.deleteProject(id);
    router.refresh();
    return projectToDelete;
  };

  return (
    <div className="flex gap-2">
      <Button text="Editar" color="secondary" onClick={() => handleEdit(data.id)} />
      <Button
        text="Eliminar"
        color="danger"
        onClick={() => handleDelete(data.id)}
      />

      {modal && (
        <Modal onClose={handleCloseModal}>
          <ProjectsForm action="edit" onClose={handleCloseModal} initialData={initialData} />
        </Modal>
      )}
    </div>
  );
};
