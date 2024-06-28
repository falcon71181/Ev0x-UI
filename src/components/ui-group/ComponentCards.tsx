import type { ComponentDataType } from "@/types/component";
import HeartbeatButton from "@/app/ui/components/(components)/buttons/HeartbeatButton";
import GreenBlueCyanInCircles from "@/app/ui/components/(components)/loaders/GreenBlueCyanInCircles";
import DisableOfflineAvatar from "@/app/ui/components/(components)/avatars/DisableOfflineAvatar";
import ComponentGrid from "./ComponentGrid";

const data: ComponentDataType[] = [
  {
    title: 'Buttons',
    component: <HeartbeatButton />,
    link: '/ui/components/button',
  },
  {
    title: 'Loaders',
    component: <GreenBlueCyanInCircles />,
    link: '/ui/components/loader',
  },
  {
    title: 'Avatars',
    component: <DisableOfflineAvatar />,
    link: '/ui/components/avatar',
  },
];

const ComponentCards = () => {
  return (
    <ComponentGrid components={data} />
  )
}

export default ComponentCards
