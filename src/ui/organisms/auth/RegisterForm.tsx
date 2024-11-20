"use client";

import { ChangeEvent } from "react";
import { IRegisterRequest } from "@/app/core/application/dto";
import { RegisterService } from "@/app/infrastructure/services/register.service";
import { Button } from "@/ui/atoms/Button";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const registerService = new RegisterService('/api');

const registerSchema = yup.object().shape({
  email: yup
    .string()
    .email("El correo es inválido")
    .required("El correo el obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener  al menos 8  caracteres")
    .required("La contraseña es obligatoria"),
  name: yup.string().required("El nombre del usuario es obligatoria"),
  role: yup.string().required("El rol es obligatorio"),
  photo: yup.mixed<File>(),
});

export const RegisterForm = () => {
  const {
    control,
    handleSubmit,
    // setError,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<IRegisterRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  const router = useRouter()

  const handleRegister = async (data: IRegisterRequest) => {
    const formData = new FormData();
    console.log(data);

    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("name", data.name);
    formData.append("role", data.role);

    const image = getValues("photo")
    if (image) {
      formData.append("photo", image!);
    }

    const response = await registerService.register(formData)
    router.push("/login")
    console.log(response);
  };

  const onChange = (e:ChangeEvent<HTMLInputElement> ) => {
    if (e.target.files?.[0]) {
      setValue("photo", e.target.files[0]);
    }
  };

  return (
    <form
      className="w-full max-w-sm mx-auto p-4 space-y-4"
      onSubmit={handleSubmit(handleRegister)}
    >
      <h2 className="text-2xl font-semibold  text-center">Crea tu cuenta</h2>
      <p className="text-xs text-center">
        Ingresa tus datos para registrarte a tu cuenta
      </p>
      <FormField<IRegisterRequest>
        control={control}
        type="email"
        label="Correo Electrónico"
        name="email"
        error={errors.email}
        placeholder="Ingresa tu correo"
      />
      <FormField<IRegisterRequest>
        control={control}
        type="password"
        label="Contraseña"
        name="password"
        error={errors.password}
        placeholder="Ingresa tu contraseña"
      />
      <FormField<IRegisterRequest>
        control={control}
        type="name"
        label="Nombre"
        name="name"
        error={errors.name}
        placeholder="Ingresa tu nombre"
      />
      <FormField<IRegisterRequest>
        control={control}
        type="role"
        label="Rol"
        name="role"
        error={errors.role}
        placeholder="Ingresa tu Rol"
      />
      <input type="file" onChange={onChange} />
      <Button type="submit" text="Registrarse"/>
      <p className="text-xs text-center">
        ¿Tienes una cuenta?{" "}
        <Link href="/login">
          {" "}
          <span className="text-xs text-center text-blue-500">
            Ingresa aquí
          </span>
        </Link>
      </p>
    </form>
  );
};
