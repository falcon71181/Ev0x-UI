import Link from "next/link"
import { ThemeToggle } from "./ThemeToggler"
import { Button } from "../ui/button"
import { Github } from "lucide-react"

export const NavBar = () => {
  return (
    <nav className="w-full h-14 p-3 sticky top-3 z-50 backdrop-blur-xl flex justify-between items-center rounded-lg border border-border">
      <Link href="/" className="font-extrabold font-handwrite text-2xl tracking-wider bg-gradient-to-tl from-[#ff4c88] to-[#ff8a63] bg-clip-text text-transparent">Ev0x-UI</Link>
      <section className="flex items-center gap-0">
        <GithubLink />
        <ThemeToggle />
      </section>
    </nav>
  )
}

const GithubLink = () => {
  return (
    <Link href="https://github.com/falcon71181/Ev0x-UI" target="_blank">
      <Button variant="nav" size="icon">
        <Github className="size-[1.2rem]" />
      </Button>
    </Link>
  )
}
