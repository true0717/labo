"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routes, Route } from "../config/routes";

export default function Navbar() {
  const pathname = usePathname();

  const renderNavItem = (route: Route) => {
    if (route.subRoutes) {
      return (
        <DropdownMenu key={route.path}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out ${
                pathname.startsWith(route.path)
                  ? "bg-white/20 dark:bg-black/20 text-gray-900 dark:text-white"
                  : "hover:bg-white/10 dark:hover:bg-black/10"
              }`}
            >
              {route.title} <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link
                href={route.path}
                className="w-full text-gray-800 dark:text-gray-200"
              >
                Tous les {route.title.toLowerCase()}
              </Link>
            </DropdownMenuItem>
            {route.subRoutes.map((subRoute) => (
              <DropdownMenuItem key={subRoute.path} asChild>
                <Link
                  href={subRoute.path}
                  className="w-full text-gray-800 dark:text-gray-200"
                >
                  {subRoute.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <Link
        key={route.path}
        href={route.path}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out text-gray-800 dark:text-gray-200 ${
          pathname === route.path
            ? "bg-white/20 dark:bg-black/20 text-gray-900 dark:text-white"
            : "hover:bg-white/10 dark:hover:bg-black/10"
        }`}
      >
        {route.title}
      </Link>
    );
  };

  return (
    <nav className="bg-transparent z-10" aria-label="Navigation principale">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-center">{routes.map(renderNavItem)}</div>
      </div>
    </nav>
  );
}
