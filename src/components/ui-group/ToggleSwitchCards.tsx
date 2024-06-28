import ComponentGrid from "./ComponentGrid";
import type { ComponentDataType } from "@/types/component";
import AnimatedCheckUncheck from "@/app/ui/components/(components)/toggleswitches/AnimatedCheckUncheck";

const toggleSwitches: ComponentDataType[] = [
  {
    title: 'Toggle Switches',
    component: <AnimatedCheckUncheck />,
    link: '/ui/components/toggleswitche/animated-check-uncheck',
  },
]

const ToggleSwitchCards = () => {
  return (
    <ComponentGrid components={toggleSwitches} />
  )
}

export default ToggleSwitchCards;
