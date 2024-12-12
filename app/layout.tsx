import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] }); // Configuración de la fuente
//sirve para todas las paginas que esten dentro del proyecto si es que esta externo

//Definicion de los metadatos.
export const metadata: Metadata = {
  title: "Nicole Aburto - Front end developer",
  description: "Portfolio",
};


//Los layouts en Next.js envuelven todas las páginas del proyecto y definen la estructura base común, como el HTML, <head>, <body>, etc.
export default function RootLayout({
  //RootLayout asegura que todas las páginas del proyecto compartan una estructura común.
  children,
  //Garantiza que children es inmutable y puede contener cualquier elemento renderizable en React.
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
