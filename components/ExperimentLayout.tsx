import React from "react";
import { twMerge } from "tailwind-merge";

interface ExperimentWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

export default function ExperimentWrapper({
  children,
  title,
  description,
  className = "",
}: ExperimentWrapperProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        {title}
      </h1>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      <div
        className={twMerge(
          "bg-white/80 dark:bg-gray-800/90 backdrop-blur-xl rounded-lg shadow-lg p-6",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
