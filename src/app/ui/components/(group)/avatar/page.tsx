import AvatarCards from "@/components/ui-group/AvatarCards";

const Avatars = () => {
  return (
    <div className="p-5 flex flex-col gap-3 w-full h-full border border-red-300">
      <h1 className="font-extrabold text-2xl">Avatars</h1>
      <AvatarCards />
    </div>
  )
}

export default Avatars;
