import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// font inter 
import { Inter } from 'next/font/google';
import ResponsiveNav from '@/components/NavBar/ResponsiveNav';
import Footer from "@/components/Home/Footer/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "App Landing",
  description: "A modern and responsive app landing page designed by Abdullah.",
  keywords: ["App Landing", "Web Development", "Next.js", "Abdullah"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link rel="shortcut icon" href="/Logo.png" type="image/x-icon" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ResponsiveNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
