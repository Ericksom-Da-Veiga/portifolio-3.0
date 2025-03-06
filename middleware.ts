import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: "pt",
  localePrefix,
  // A list of all locales that are supported
  locales,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pt|en)/:path*"],
};
