import { ThemeToggle } from "./ThemeToggler"
import { Button } from "../ui/button"
import { Github } from "lucide-react"

export const NavBar = () => {
  return (
    <nav className="w-full h-16 p-5 sticky top-3 z-50 backdrop-blur-xl flex justify-between items-center rounded-lg border border-neutral-200/10">
      <section>Ev0x-UI</section>
      <section className="flex items-center gap-1">
        <GithubLink />
        <ThemeToggle />
      </section>
    </nav>
  )
}

const GithubLink = () => {
  return (
    <Button variant="nav" size="icon">
      <Github className="h-[1.2rem] w-[1.2rem]" />
    </Button>
  )
}
