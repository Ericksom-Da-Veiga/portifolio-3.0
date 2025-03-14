import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { getMessages } from "next-intl/server";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const header = headers();
  // const localheader = header.get("x-next-intl-locale");
  // if (localheader === null) {
  //   console.log("erro");
  //   notFound();
  // }
  // const messages = await getMessages();
  return (
    <html>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Erickson Da Veiga | Personal Website</title>
      </head>
      {/* Altere dinamicamente caso necessário */}
      <body className="">
        {/* <Providers attribute="class" enableSystem={false} defaultTheme="light"> */}
        {/* <NextIntlClientProvider messages={messages}> */}
        <Header />
        {children}
        {/* </NextIntlClientProvider> */}
        {/* </Providers> */}
      </body>
    </html>
  );
}
