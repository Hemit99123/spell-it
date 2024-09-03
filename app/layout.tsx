import NavBar from "@/components/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Spell It!",
  description: "The best study tool for your spelling test!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
        <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body className={inter.className}>
          <NavBar />
            {children}
          <Analytics />
        </body>
    </html>
  );
}
