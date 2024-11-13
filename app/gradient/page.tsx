import { BlankLinks } from "@/components/custom-ui/BlankLinks";
import ExperimentWrapper from "@/components/ExperimentLayout";
import LinksLayout from "@/components/LinksLayout";
import { Palette } from "lucide-react";

export default function GradientPage() {
  return (
    <ExperimentWrapper
      title="Gradients"
      description="Explorez différents types de gradients et leurs applications."
      className="shadow-none border-none p-0"
    >
      <div className="w-full flex items-center justify-center">
        <div className="text-center space-y-8 max-w-3xl mx-auto px-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Gradients
            </span>
          </h1>
          <div className="flex justify-center">
            <div className="inline-flex items-center justify-center p-5 bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-lg shadow-lg">
              <Palette className="h-12 w-12 text-white animate-bounce" />
            </div>
          </div>
          <p className="text-xl text-gray-800 dark:text-gray-200 font-medium max-w-2xl mx-auto">
            {
              "Plongez dans l'univers fascinant des dégradés CSS et découvrez comment ils peuvent transformer vos designs web."
            }
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900 dark:to-purple-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Types de Gradients
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Explorez les gradients linéaires, radiaux et coniques pour créer
                des effets visuels uniques.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                Applications Créatives
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Utilisez les gradients pour des arrière-plans dynamiques, des
                boutons stylisés et des effets de texte saisissants.
              </p>
            </div>
          </div>
          <div className="pt-8 flex justify-center">
            <LinksLayout>
              <BlankLinks
                url="https://developer.mozilla.org/en-US/docs/Web/CSS/gradient"
                title="Documentation MDN"
              />
              <BlankLinks
                url="https://cssgradient.io/"
                title="Générateur de Gradients"
              />
              <BlankLinks url="https://uigradients.com/" title="UI Gradients" />
            </LinksLayout>
          </div>
        </div>
      </div>
    </ExperimentWrapper>
  );
}
