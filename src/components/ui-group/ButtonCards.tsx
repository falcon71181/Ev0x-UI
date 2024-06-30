import ComponentGrid from "./ComponentGrid";
import type { ComponentDataType } from "@/types/component";
import HeartbeatButton from "@/app/ui/components/(components)/buttons/HeartbeatButton";
import TranslateLogOutButton from "@/app/ui/components/(components)/buttons/TranslateLogOutButton";

const buttons: ComponentDataType[] = [
  {
    title: "Heart Beat",
    link: '/ui/components/button/heartbeat-button',
    component: <HeartbeatButton />
  },
  {
    title: "Translate Log Out",
    link: '/ui/components/button/translate-log-out-button',
    component: <TranslateLogOutButton />
  },
]

const ButtonCards = () => {
  return (
    <ComponentGrid components={buttons} />
  )
}

export default ButtonCards;
