import { Button } from "@/ui/atoms/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-miColorGradient">
      <header className="flex items-center justify-between p-4">
        <p className="text-xl text-center font-bold text-blue-500">
          VolunterConnect
        </p>
        <div className="flex gap-8 items-center">
          <Link href="/login"><button className="text-center">Iniciar Sesión</button></Link>
          <Link href="/register"><Button text="Registrarse" /></Link>
        </div>
      </header>
      <main className="min-h-screen flex items-center flex-col gap-10 px-40 pt-60">
        <h1 className="text-5xl font-bold">
          Conecta, Colabora, Cambia el Mundo
        </h1>
        <p className="text-center">
          Únete a nuestra comunidad de voluntarios y organizadores. Encuentra
          proyectos que te apasionen o crea los tutos propios para hacer una
          diferencia en tu comunidad
        </p>
        <div className="flex gap-4">
          <Button text="Explorar proyectos" />
          <Button text="Comenzar como Organizador" color="secondary" />
        </div>
      </main>
    </div>
  );
}
