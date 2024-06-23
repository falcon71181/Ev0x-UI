"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { CustomKbarProvider } from "../(kbar)/kbr-provider"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <CustomKbarProvider>
        {children}
      </CustomKbarProvider>
    </NextThemesProvider>
  )
}
