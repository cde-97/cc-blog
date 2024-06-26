'use client'
import { ThemeProvider } from "next-themes";

export default function ThemeProviders({ children }) {
  return <ThemeProvider attribute="class" defaultTheme="dark">{children}</ThemeProvider>;
}
