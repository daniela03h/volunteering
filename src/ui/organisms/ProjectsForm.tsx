"use client";

import {
  IProjectsRequest,
  IProjectEditRequest,
} from "@/app/core/application/dto/projects/projects-request";
import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { Button } from "@/ui/atoms/Button";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IProps {
  action: string;
  onClose: () => void;
  initialData?: IProjectEditRequest;
}

const projectsService = new ProjectsService(`/api`);

const projectsSchema = yup.object().shape({
  title: yup.string().required("El titulo es requerido"),
  description: yup.string().required("Descripcion del proyecto"),
  startDate: yup
    .date()
    .required("La fecha de inicio del proyecto es requerida")
    .min(new Date(), "La fecha no puede ser anterior a hoy"),
  endDate: yup
    .date()
    .required("La fecha de finalización del proyecto es requerida")
    .min(
      yup.ref("startDate"),
      "La fecha de fin no puede ser anterior a la fecha de inicio"
    ),
});

export const ProjectsForm: React.FC<IProps> = ({
  action,
  onClose,
  initialData,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IProjectsRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(projectsSchema),
    defaultValues: {
      title: initialData?.title ?? "",
      description: initialData?.description ?? "",
      startDate: initialData?.startDate ?? new Date(),
      endDate: initialData?.endDate ?? new Date(),
    },
  });

  const router = useRouter();

  const handlePost = async (data: IProjectsRequest) => {
    await projectsService.createProjects(data);
    onClose();
    router.refresh();
  };

  const handleEdit = async (data: IProjectsRequest) => {
    if (!initialData?.id) return;
    await projectsService.editProject(initialData.id, data);
    onClose();
    router.refresh();
  };

  const onSubmit = action === "add" ? handlePost : handleEdit;

  return (
    <form
      className="w-full max-w-sm mx-auto p-4 space-y-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl font-semibold  text-center">
        {action === "add" ? "Publicar" : "Editar"} proyecto
      </h2>
      <FormField<IProjectsRequest>
        control={control}
        type="text"
        label="Titulo del proyecto"
        name="title"
        error={errors.title}
        placeholder="Titulo proyecto"
      />
      <FormField<IProjectsRequest>
        control={control}
        type="text"
        label="Descripcion del proyecto"
        name="description"
        error={errors.description}
        placeholder="lorem..."
      />
      <FormField<IProjectsRequest>
        control={control}
        type="date"
        label="Fecha de inicio"
        name="startDate"
        error={errors.startDate}
      />
      <FormField<IProjectsRequest>
        control={control}
        type="date"
        label="Fecha de finalizacion"
        name="endDate"
        error={errors.endDate}
      />
      <Button
        text={action === "add" ? "Publicar" : "Editar"}
        className="w-full"
      />
    </form>
  );
};
