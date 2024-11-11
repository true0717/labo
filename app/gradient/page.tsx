import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { routes } from "../../config/routes";

export default function GradientPage() {
  const gradientRoute = routes.find((route) => route.path === "/gradient");
  const gradientSubRoutes = gradientRoute?.subRoutes || [];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Gradients</h1>
      <p className="text-gray-600">
        Explorez différents types de gradients et leurs applications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gradientSubRoutes.map((subRoute) => (
          <Card key={subRoute.path}>
            <CardHeader>
              <CardTitle>{subRoute.title}</CardTitle>
              <CardDescription>
                Exemple de {subRoute.title.toLowerCase()}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="h-32 rounded-md mb-4"
                style={{
                  background: `linear-gradient(to right, #f6d365 0%, #fda085 100%)`,
                }}
              />
              <Link
                href={subRoute.path}
                className="text-blue-500 hover:underline"
              >
                Voir les détails
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
