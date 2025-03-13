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
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Erickson Da Veiga | Personal Website</title>
      </head>
      {/* Altere dinamicamente caso necessário */}
      <body className="">
        <Header />
        {children}
      </body>
    </html>
  );
}
