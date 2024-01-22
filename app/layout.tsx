import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ghost Heardle",
  description: "Ghost Heardle",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-neutral-950 text-neutral-100">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
