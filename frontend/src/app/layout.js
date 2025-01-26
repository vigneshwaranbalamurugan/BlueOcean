import { Geist, Geist_Mono } from "next/font/google";
import HeaderComponent from "../components/Header.jsx";
import FooterComponent from "../components/Footer";
import "../lib/fontawesome.js";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blue Ocean",
  description: "Blue Ocean for Youtubers...!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderComponent/>
        {children}
        <FooterComponent/>
      </body>
    </html>
  );
}

