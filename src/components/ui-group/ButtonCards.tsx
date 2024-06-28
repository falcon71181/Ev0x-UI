import ComponentGrid from "./ComponentGrid";
import type { ComponentDataType } from "@/types/component";
import HeartbeatButton from "@/app/ui/components/(components)/buttons/HeartbeatButton";

const buttons: ComponentDataType[] = [
  {
    title: "Heart Beat",
    link: '/ui/components/button/heartbeat-button',
    component: <HeartbeatButton />
  },
]

const ButtonCards = () => {
  return (
    <ComponentGrid components={buttons} />
  )
}

export default ButtonCards;
