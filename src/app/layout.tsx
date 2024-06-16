import { ReactNode } from "react";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Providers } from "@/components";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Musics App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
