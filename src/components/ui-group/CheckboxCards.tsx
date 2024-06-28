import ComponentGrid from "./ComponentGrid";
import type { ComponentDataType } from "@/types/component";
import MobileNavMenu from "@/app/ui/components/(components)/checkboxes/MobileNavMenu";

const checkboxes: ComponentDataType[] = [
  {
    title: 'Checkbox',
    component: <MobileNavMenu />,
    link: '/ui/components/checkbox/mobile-nav-menu',
  },
]

const CheckboxCards = () => {
  return (
    <ComponentGrid components={checkboxes} />
  )
}

export default CheckboxCards;
