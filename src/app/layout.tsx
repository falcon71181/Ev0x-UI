import type { Metadata } from "next";
import { ThemeProvider } from "@/components/misc/(theme)/theme-provider";
import { NavBar } from "@/components/nav/NavBar";
import { Caveat } from 'next/font/google'
import { Inter as FontSans } from "next/font/google"
import "@/styles/globals.css";
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-caveat',
  display: 'swap'
})

export const metadata: Metadata = {
  title: "EvoX UI",
  description: "React ui component library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "font-sans antialiased scroll-smooth flex flex-col items-center bg-background",
        fontSans.variable, caveat.variable)}>
        <div className="relative h-full w-10/12">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            <div className="flex-grow">{children}</div>
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
