import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Betterfit — Better talent. Better value.",
  description:
    "Betterfit is a managed execution partner for tech delivery. We own the operational layer between business decisions and what gets built — backed by a delivery guarantee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[#0d1117] text-[#f0f6fc] antialiased">{children}</body>
    </html>
  );
}
