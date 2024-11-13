import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center space-y-8 max-w-2xl mx-auto px-4">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            {" Labo d'Expérimentations"}
          </span>
        </h1>
        <div className="flex justify-center">
          <div className="inline-flex items-center justify-center p-6 bg-white/20 dark:bg-black/20 rounded-full shadow-lg">
            <Sparkles className="h-16 w-16 text-purple-500 animate-pulse" />
          </div>
        </div>
        <p className="text-xl text-gray-700 dark:text-gray-300 font-medium max-w-lg mx-auto">
          {
            "Explorez une galerie d'effets visuels captivants : des gradients animés aux jeux de lumière innovants."
          }
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Chaque démo est accompagnée de son code source, vous permettant de
          comprendre et reproduire ces effets.
        </p>
      </div>
    </div>
  );
}
