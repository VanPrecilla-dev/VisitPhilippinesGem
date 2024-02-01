import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


import ScrollTopButton from "./clientComponents/ScrollTopButton";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VisitPhilippinesGem",
  description: "Website of VisitPhilippinesGem ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ScrollTopButton />
        {children}  

  
      </body>
      
    </html>
  );
}
