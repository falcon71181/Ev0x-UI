'use client'
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggler"
import { Search } from "./search-bar"
import { Button } from "../ui/button"
import { Github } from "lucide-react"

export const NavBar = () => {
  return (
    <nav className="px-52 bg-background w-full h-14 p-3 sticky z-50 backdrop-blur-xl flex justify-between items-center border-b border-border">
      <Link href="/" className="font-extrabold text-2xl tracking-wider bg-gradient-to-tl from-[#ff4c88] to-[#ff8a63] bg-clip-text text-transparent select-none">Ev0x-UI</Link>
      <section className="flex items-center gap-0">
        <Search />
        <ThemeToggle />
        <GithubLink />
      </section>
    </nav>
  )
}

const GithubLink = () => {
  return (
    <Link href="https://github.com/falcon71181/Ev0x-UI" target="_blank">
      <Button variant="ghost" size="icon">
        <Github className="size-[1.2rem]" />
      </Button>
    </Link>
  )
}
