import ComponentGrid from "./ComponentGrid";
import type { ComponentDataType } from "@/types/component";
import GreenBlueCyanInCircles from "@/app/ui/components/(components)/loaders/GreenBlueCyanInCircles";

const loaders: ComponentDataType[] = [
  {
    title: 'Green Blue Cyan',
    link: '/ui/components/loader/green-blue-cyan-in-circles',
    component: <GreenBlueCyanInCircles />
  },
]

const LoaderCards = () => {
  return (
    <ComponentGrid components={loaders} />
  )
}

export default LoaderCards;
