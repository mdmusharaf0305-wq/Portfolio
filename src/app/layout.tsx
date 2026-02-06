import React from "react";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Mohammed | Product Engineer",
  description: "Backend-focused Full-Stack Product Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
