import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Suppression de compte",
  description: "Demandez la suppression de votre compte et de vos données.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
