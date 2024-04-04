import type { Metadata } from "next";
import { ThemeProvider } from "@/components/misc/(theme)/theme-provider";
import { NavBar } from "@/components/nav/NavBar";
import { Inter as FontSans } from "next/font/google"
import "@/styles/globals.css";
import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
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
        "min-h-screen font-sans antialiased flex flex-col items-center",
        fontSans.variable)}>
        <div className="relative h-full w-10/12">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
