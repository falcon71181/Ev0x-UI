import ComponentGrid from "./ComponentGrid";
import type { ComponentDataType } from "@/types/component";
import DisableOfflineAvatar from "@/app/ui/components/(components)/avatars/DisableOfflineAvatar";

const avatars: ComponentDataType[] = [
  {
    title: "Disable Offline",
    link: '/ui/components/avatar/disable-offline-avatar',
    component: <DisableOfflineAvatar />
  },
]

const AvatarCards = () => {
  return (
    <ComponentGrid components={avatars} />
  )
}

export default AvatarCards;
