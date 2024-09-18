import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/navbar";
import { ModeToggle } from "@/components/theme/mode-toggle";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JGOtto",
  description: "Welcome!",
};

export default function RootLayout() {
  return (
    <html lang="en" suppressHydrationWarning className="text-red-700 h-content">
      <body className={inter.className}>
        <Providers>
          <ModeToggle />
          <Navbar />
        </Providers>
      </body>
    </html>
  );
}
