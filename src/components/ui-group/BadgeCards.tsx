import ComponentGrid from "./ComponentGrid";
import type { ComponentDataType } from "@/types/component";
import RotateBorder from "@/app/ui/components/(components)/badges/RotateBorder";

const badges: ComponentDataType[] = [
  {
    title: 'Badges',
    component: <RotateBorder />,
    link: '/ui/components/badge/rotate-border',
  },
]

const BadgeCards = () => {
  return (
    <ComponentGrid components={badges} />
  )
}

export default BadgeCards;
