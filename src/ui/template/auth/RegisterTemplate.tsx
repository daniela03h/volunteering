import { RegisterForm } from "@/ui/organisms/auth/RegisterForm"
import Link from "next/link"

export const RegisterTemplate = () => {
    return (
        <div className="min-h-screen flex  items-center justify-center bg-miColorGradient">
            <Link href="/" className="text-l text-center text-blue-500 absolute top-4 left-6">Volver al inicio</Link>
            <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md">
                <RegisterForm />
            </div>
        </div>
    )
}