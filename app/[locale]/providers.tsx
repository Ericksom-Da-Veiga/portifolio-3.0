"use client";

import {
  ThemeProvider as NexThemeProvider,
  ThemeProviderProps,
} from "next-themes";

export function Providers({ children, ...props }: ThemeProviderProps) {
  return <NexThemeProvider {...props}>{children}</NexThemeProvider>;
}
