"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { PopupWidget }  from "@/components/PopupWidget";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Header />
          <div>{children}</div>
          <Footer />
          <ScrollToTop />
          {/* <PopupWidget /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
