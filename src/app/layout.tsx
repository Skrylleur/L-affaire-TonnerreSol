import type { Metadata } from "next";
import { Geist, Geist_Mono, Bangers, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bangers = Bangers({
  variable: "--font-bangers",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "L'Affaire Tonnerresol - Festival de Bande Dessinée",
  description: "Le rendez-vous incontournable des passionnés de bande dessinée. Festival annuel avec plus de 1200 participants.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bangers.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
