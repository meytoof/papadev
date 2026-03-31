import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "PapaDev — Le blog des papas épicurieux",
  description: "Éducation, jeux éducatifs gratuits et épicurisme parental. Un blog fait par un papa-développeur pour les papas qui aiment trop les bonnes choses.",
  openGraph: {
    title: "PapaDev",
    description: "Le blog des papas épicurieux",
    url: "https://papadev.fr",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
