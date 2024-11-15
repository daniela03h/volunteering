"use client"

import { ILoginRequest } from "@/app/core/application/dto";
import { Button } from "@/ui/atoms/Button";
import { FormField } from "@/ui/molecules";
import { yupResolver } from "@hookform/resolvers/yup";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("El correo es inválido")
    .required("El correo el obligatorio"),
  password: yup
    .string()
    .min(8, "La contraseña debe tener  al menos 8  caracteres")
    .required("La contraseña es obligatoria"),
});

export const LoginForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginRequest>({
    mode: "onChange",
    reValidateMode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const router = useRouter()
  
  const handleLogin = async (data: ILoginRequest) => {
    console.log(data);
    try {
      const result = await signIn("credentials", {
        redirect: false,
        email: data.email,
        password: data.password,
      });

      console.log(`result`, result);

      if (result?.error) {
        console.log("Ocurrio un error", JSON.parse(result.error));
        JSON.parse(result.error)
        // handleError(JSON.parse(result.error))
        return;
      }
      router.push("/dashboard/services")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-full max-w-sm mx-auto p-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
      <h2 className="text-2xl font-semibold  text-center">Iniciar Sesión</h2>
      <p className="text-xs text-center">Ingresa tus credenciales para acceder a tu cuenta</p>
      <FormField<ILoginRequest>
        control={control}
        type="email"
        label="Correo Electrónico"
        name="email"
        error={errors.email}
        placeholder="Ingresa tu correo"
      />
      <FormField<ILoginRequest>
        control={control}
        type="password"
        label="Contraseña"
        name="password"
        error={errors.password}
        placeholder="Ingresa tu contraseña"
      />
      <Button text="Iniciar Sesión"/>
      <p className="text-xs text-center text-blue-500">¿Olvidaste tu contraseña?</p>
      <p className="text-xs text-center">¿No tienes una cuenta? <Link href="/register"> <span className="text-xs text-center text-blue-500">Registrate aquí</span></Link></p>
    </form>
  );
};