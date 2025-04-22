import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CarContentProvider } from "@/components/car-content-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CarShare - Rent or Share Your Car",
  description:
    "Find the perfect car to rent or share your own car and earn money",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CarContentProvider>{children}</CarContentProvider>
      </body>
    </html>
  );
}
