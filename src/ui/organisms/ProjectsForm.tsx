"use client"

import { IProjectsRequest } from "@/app/core/application/dto/projects/projects-request";
import { ProjectsService } from "@/app/infrastructure/services/projects.service";
import { Button } from "@/ui/atoms/Button";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
// import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

interface IProps{
  action:string;
  idProject?: number
  propFunction: ()=>void
}

const projectsService = new ProjectsService()

const projectsSchema = yup.object().shape({
  title: yup
    .string()
    .required("El titulo es requerido"),
  description: yup
    .string()
    .required("Descripcion del proyecto"),
  startDate: yup
    .string()
    .required("El nombre del usuario es obligatoria"),
  endDate: yup
    .string()
    .required("El rol es obligatorio"),
});

export const ProjectsForm:React.FC<IProps> = ({action, idProject, propFunction}) => {
  const {
    control,
    handleSubmit,
    // setError,
    formState: { errors },
  } = useForm<IProjectsRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(projectsSchema),
  });

  const handlePost = async (data :IProjectsRequest)=>{    
  
  } 

  const handleEdit = async (data:IProjectsRequest) =>{
  
  }
  
const onSubmit = action === 'add' ? handlePost : handleEdit;

  return (
    <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-2xl font-semibold  text-center">Crea tu cuenta</h2>
      <p className="text-xs text-center">Ingresa tus datos para registrarte a tu cuenta</p>
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
      <Button text={action === 'add' ? 'Publicar' : 'Editar'} className="w-full"/>
    </form>
  );
};