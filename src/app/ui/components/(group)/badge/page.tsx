import BadgeCards from "@/components/ui-group/BadgeCards";

const Badges = () => {
  return (
    <div className="p-5 flex flex-col gap-3 w-full h-full border border-red-300">
      <h1 className="font-extrabold text-2xl">Badges</h1>
      <BadgeCards />
    </div>
  )
}

export default Badges;
