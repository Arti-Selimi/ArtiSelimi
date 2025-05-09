import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientHydrationSuppressor from "./ClientHydrationSuppressor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arti Selimi",
  description: "Personal website of Arti Selimi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-brown md:bg-expresso">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClientHydrationSuppressor />
        {children}
      </body>
    </html>
  );
}
