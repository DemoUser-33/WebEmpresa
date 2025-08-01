import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-[80vh] p-6">
      <div className="text-center space-y-6">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Página no encontrada</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Lo sentimos, la página que está buscando no existe o ha sido movida.
        </p>
        <Button asChild className="mt-6">
          <Link to="/" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}