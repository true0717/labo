export type Route = {
  path: string;
  title: string;
  description?: string;
  subRoutes?: Route[];
};

export const gradientRoutes: Route[] = [
  {
    path: "/gradient/css-animation",
    title: "Dégradé animé en CSS sans JavaScript",
    description:
      "Fond dégradé animé avec des transitions fluides en CSS pur, créant un effet visuel dynamique et moderne",
  },
  {
    path: "/gradient/html-blops",
    title: "Dégradé avec blops organiques animés",
    description:
      "Animation de fond dégradé combinée avec trois formes organiques (blops) qui se déplacent et changent de forme de manière fluide",
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
