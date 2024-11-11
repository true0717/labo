import { headers } from "next/headers";
import { routes, Route } from "./routes";

type RouteInfo = {
  title: string;
  description?: string;
};

export const getRouteInfo = (path: string): RouteInfo => {
  const findRouteInfo = (routes: Route[]): RouteInfo | undefined => {
    for (const route of routes) {
      // Correspondance exacte
      if (route.path === path) {
        return {
          title: route.title,
          description: route.description,
        };
      }

      // Si on a des sous-routes et que le chemin commence par la route parent
      if (route.subRoutes && path.startsWith(route.path + "/")) {
        const subRouteInfo = findRouteInfo(route.subRoutes);
        if (subRouteInfo) {
          return subRouteInfo;
        }
      }
    }
    return undefined;
  };

  const routeInfo = findRouteInfo(routes);
  return routeInfo || { title: "Page non trouvée" };
};

export const getPathname = async () => {
  const headersList = await headers();
  const referer = headersList.get("referer") || "";
  const url = new URL(referer);
  const pathname = url.pathname;
  return pathname;
};
