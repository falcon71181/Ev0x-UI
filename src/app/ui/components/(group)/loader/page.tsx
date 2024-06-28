import LoaderCards from "@/components/ui-group/LoaderCards";

const Loaders = () => {
  return (
    <div className="p-5 flex flex-col gap-3 w-full h-full border border-red-300">
      <h1 className="font-extrabold text-2xl">Loaders</h1>
      <LoaderCards />
    </div>
  )
}

export default Loaders;
