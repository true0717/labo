export type Route = {
  path: string;
  title: string;
  subRoutes?: Route[];
};

export const routes: Route[] = [
  { path: "/", title: "Accueil" },
  {
    path: "/gradient",
    title: "Gradients",
    subRoutes: [
      { path: "/gradient/gradient1", title: "Gradient 1" },
      { path: "/gradient/gradient2", title: "Gradient 2" },
    ],
  },
  // Ajoutez d'autres routes ici au fur et à mesure de vos expérimentations
];
