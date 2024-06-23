import { KBar } from "./kbar";
import { ReactNode } from "react";
import { KBarProvider, Action } from "kbar";
import { useTheme } from "next-themes";
import { Monitor, Palette, Sun, Moon } from "lucide-react";

export const CustomKbarProvider = ({ children }: { children: ReactNode }) => {
  const { setTheme } = useTheme();
  const iconSize = "1rem";

  const themeActions: Action[] = [
    {
      id: "set-theme",
      name: "Change Theme",
      icon: <Palette size={iconSize} />,
      shortcut: ['c', 't'],
      keywords: "theme system dark light",
      section: "Configurations"
    },
    {
      id: "system-theme",
      name: "System theme",
      icon: <Monitor size={iconSize} />,
      parent: "set-theme",
      keywords: 'theme system',
      perform: () => setTheme("system")
    },
    {
      id: "dark-theme",
      name: "Dark theme",
      icon: <Moon size={iconSize} />,
      parent: "set-theme",
      keywords: 'theme dark',
      perform: () => setTheme("dark")
    },
    {
      id: "light-theme",
      name: "Light theme",
      icon: <Sun size={iconSize} />,
      parent: "set-theme",
      keywords: 'theme light',
      perform: () => setTheme("light")
    },
  ]

  const actions: Action[] = [
    ...themeActions,
  ]

  return (
    <KBarProvider actions={actions} >
      <KBar />
      {children}
    </KBarProvider>
  )
}
