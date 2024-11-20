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

const useProjectsService = new ProjectsService('/api');

export const ContainerActions: React.FC<ITdActions> = ({ data }) => {
  const [modal, setModal] = useState(false);
  const handleCloseModal = () => setModal(false);
  const router = useRouter();

  const handleDelete = async (id: number) => {
    const projectToDelete = await useProjectsService.deleteProject(id);
    router.refresh();
    return projectToDelete;
  };

  return (
    <div className="flex gap-2">
      <Button text="Editar" color="secondary" onClick={() => setModal(true)} />
      <Button
        text="Eliminar"
        color="danger"
        onClick={() => handleDelete(data.id)}
      />

      {modal && (
        <Modal propFunction={handleCloseModal}>
          <ProjectsForm action="edit" propFunction={handleCloseModal} />
        </Modal>
      )}
    </div>
  );
};
