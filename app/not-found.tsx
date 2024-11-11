import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        <h1 className="text-7xl font-extrabold tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            404
          </span>
        </h1>
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center p-6 bg-purple-500/20 dark:bg-purple-500/30 rounded-full shadow-lg">
            <FileQuestion className="h-16 w-16 text-purple-600 dark:text-purple-400" />
          </div>
        </div>
        <p className="text-3xl font-bold text-gray-800 dark:text-gray-200">
          {"Page non trouvée"}
        </p>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          {
            "Désolé, la page que vous recherchez n'existe pas ou a été déplacée."
          }
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link href="/" className="text-lg">
              {"Retour à l'accueil"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
