import SkeletonCards from "@/components/ui-group/SkeletonCards";

const Skeletons = () => {
  return (
    <div className="p-5 flex flex-col gap-3 w-full h-full border border-red-300">
      <h1 className="font-extrabold text-2xl">Skeletons</h1>
      <SkeletonCards />
    </div>
  )
}

export default Skeletons;
