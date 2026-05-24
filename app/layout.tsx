import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import MuiThemeProvider from "@/components/common/mui-theme-provider";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "CareerArch",
  description:
    "Eleva tu carrera profesional con inteligencia predictiva y gestión de oportunidades de alto impacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`dark ${geist.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface-container-lowest text-on-surface font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container">
        <MuiThemeProvider>{children}</MuiThemeProvider>
      </body>
    </html>
  );
}
