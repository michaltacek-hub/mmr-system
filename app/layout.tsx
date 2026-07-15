import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Masáže Michelle | Lanškroun",

  description:
    "Relaxační, lymfatické, těhotenské masáže a maderoterapie. Rezervujte si svůj termín jednoduše online.",
  
openGraph: {
  title: "Masáže Michelle | Lanškroun",

  description:
    "Relaxační, lymfatické, těhotenské masáže a maderoterapie. Rezervujte si svůj termín jednoduše online.",

  url: "https://www.masazemichelle.cz",

  siteName: "Masáže Michelle",

  locale: "cs_CZ",

  type: "website",

  images: [
    {
      url: "https://www.masazemichelle.cz/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "Masáže Michelle",
      type: "image/jpeg",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title: "Masáže Michelle | Lanškroun",
  description:
    "Relaxační, lymfatické, těhotenské masáže a maderoterapie. Rezervujte si svůj termín jednoduše online.",
  images: ["https://www.masazemichelle.cz/og-image.jpg"],
},
  };


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
