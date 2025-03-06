"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      {/* Altere dinamicamente caso necessário */}
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
