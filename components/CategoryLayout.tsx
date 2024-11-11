import React from "react";

interface CategoryLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function CategoryLayout({
  children,
  title,
  description,
}: CategoryLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        {title}
      </h1>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        {children}
      </div>
    </div>
  );
}
