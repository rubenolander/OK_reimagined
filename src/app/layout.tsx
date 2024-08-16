import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const font = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OlanderKalender",
  description: "A pet project made for printing family calendar pages.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased flex flex-col h-screen`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
