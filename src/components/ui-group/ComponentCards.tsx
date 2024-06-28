import React from "react";
import Link from "next/link";
import Card from "./Card";
import HeartbeatButton from "@/app/ui/components/(components)/buttons/HeartbeatButton";
import GreenBlueCyanInCircles from "@/app/ui/components/(components)/loaders/GreenBlueCyanInCircles";
import DisableOfflineAvatar from "@/app/ui/components/(components)/avatars/DisableOfflineAvatar";

type ComponentDataType = {
  title: string;
  component: React.JSX.Element;
  link: string;
}

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
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((item: ComponentDataType, index) => (
          <Link href={item.link} key={index} className="no-underline">
            <Card title={item.title}>
              {item.component ? (
                item.component
              ) : null}
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ComponentCards
