export type Route = {
  path: string;
  title: string;
  description?: string;
  subRoutes?: Route[];
};

export const gradientRoutes: Route[] = [
  {
    path: "/gradient/css-animation",
    title: "Gradient css avec animation",
    description: "background animation css",
  },
  {
    path: "/gradient/html-blops",
    title: "Gradient HTML Blops",
    description: "background animation css + 3 blops animés",
  },
];

export const routes: Route[] = [
  { path: "/", title: "Accueil" },
  {
    path: "/gradient",
    title: "Gradients",
    subRoutes: gradientRoutes,
  },
  // Ajoutez d'autres routes ici au fur et à mesure de vos expérimentations
];
