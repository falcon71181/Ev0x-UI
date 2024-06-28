'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./ThemeToggler"
import { Search } from "./search-bar"
import { Button } from "../ui/button"
import { Github } from "lucide-react"

type Nav = {
  label: string;
  target: "_blank" | "_self";
  href: string;
}
type NavMenu = Nav[];
const nav: NavMenu = [
  {
    label: "Docs",
    target: "_self",
    href: "/docs",
  },
  {
    label: "Components",
    target: "_self",
    href: "/ui/components",
  },
  {
    label: "Templates",
    target: "_self",
    href: "/templates",
  }
]

export const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-14 w-full border-b border-border">
      <nav className="mx-auto w-[100rem] bg-background p-3 sticky z-50 backdrop-blur-xl flex justify-between items-center">
        <section className="flex items-center">
          <Link href="/" className="font-extrabold text-2xl tracking-wider bg-gradient-to-tl from-[#ff4c88] to-[#ff8a63] bg-clip-text text-transparent select-none">Ev0x-UI</Link>
          <div className="ml-9 flex gap-4 text-sm">
            {nav.map((link) => (
              <Link href={link.href} key={link.href} target={link.target} className={`${pathname.includes(link.href) ? "text-foreground font-semibold" : "text-foreground/60 hover:text-foreground/80"} transition-colors`}>{link.label}</Link>
            ))}
          </div>
        </section>
        <section className="flex items-center gap-0">
          <Search />
          <ThemeToggle />
          <GithubLink />
        </section>
      </nav>
    </div>
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
