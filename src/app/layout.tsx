import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import LanguageProvider from "@/providers/LanguageProvider";
import type { Metadata } from "next";
import NavBar from "@/components/common/navbar";
import NextThemeProvider from "@/providers/NextThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mostafa Taman",
  description: "The one and only official online portfolio of Mostafa Taman",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          <NextThemeProvider>
            <main className="w-full">
              <NavBar />
              {children}
            </main>
          </NextThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
};

export default RootLayout;
