import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "StyleApp",
  description:
    "Application de test différents styles, gradients, animations, background, ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        // className={`antialiased bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900`}
        className={`antialiased bg-white dark:bg-black`}
      >
        <div className="min-h-screen">
          <Navbar />
          <main className="w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
