/* eslint-disable @next/next/no-css-tags */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/navbar";
import Providers from "./providers";
import Home from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JGOtto",
  description: "Welcome!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="text-red-700 h-content scroll-smooth"
    >
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Home />
        </Providers>
      </body>
    </html>
  );
}
