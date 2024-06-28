import type { ComponentDataType } from "@/types/component";
import HeartbeatButton from "@/app/ui/components/(components)/buttons/HeartbeatButton";
import GreenBlueCyanInCircles from "@/app/ui/components/(components)/loaders/GreenBlueCyanInCircles";
import DisableOfflineAvatar from "@/app/ui/components/(components)/avatars/DisableOfflineAvatar";
import RotateBorder from "@/app/ui/components/(components)/badges/RotateBorder";
import AnimatedCheckUncheck from "@/app/ui/components/(components)/toggleswitches/AnimatedCheckUncheck";
import MobileNavMenu from "@/app/ui/components/(components)/checkboxes/MobileNavMenu";
import SmallUserCard from "@/app/ui/components/(components)/skeletons/SmallUserCard";
import ComponentGrid from "./ComponentGrid";

const data: ComponentDataType[] = [
  {
    title: 'Avatars',
    component: <DisableOfflineAvatar />,
    link: '/ui/components/avatar',
  },
  {
    title: 'Badges',
    component: <RotateBorder />,
    link: '/ui/components/badge',
  },
  {
    title: 'Buttons',
    component: <HeartbeatButton />,
    link: '/ui/components/button',
  },
  {
    title: 'Checkboxes',
    component: <MobileNavMenu />,
    link: '/ui/components/checkbox',
  },
  {
    title: 'Loaders',
    component: <GreenBlueCyanInCircles />,
    link: '/ui/components/loader',
  },
  {
    title: 'Skeletons',
    component: <SmallUserCard />,
    link: '/ui/components/skeleton',
  },
  {
    title: 'Toggle Switches',
    component: <AnimatedCheckUncheck />,
    link: '/ui/components/toggleswitch',
  },
];

const ComponentCards = () => {
  return (
    <ComponentGrid components={data} />
  )
}

export default ComponentCards
