import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Lista de idiomas suportados
const locales = ["en", "pt"];

export default getRequestConfig(async ({ requestLocale }) => {
  // Valida se a localidade recebida é suportada
  if (!locales.includes(requestLocale as any)) notFound();

  return {
    messages: (await import(`./languages/${requestLocale}.json`)).default,
  };
});
