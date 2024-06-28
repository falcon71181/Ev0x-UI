import ComponentGrid from "./ComponentGrid";
import type { ComponentDataType } from "@/types/component";
import SmallUserCard from "@/app/ui/components/(components)/skeletons/SmallUserCard";

const skeletons: ComponentDataType[] = [
  {
    title: 'Skeletons',
    component: <SmallUserCard />,
    link: '/ui/components/skeleton/small-user-card',
  },
]

const SkeletonCards = () => {
  return (
    <ComponentGrid components={skeletons} />
  )
}

export default SkeletonCards;
