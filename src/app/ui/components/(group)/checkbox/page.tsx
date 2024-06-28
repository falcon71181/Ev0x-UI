import CheckboxCards from "@/components/ui-group/CheckboxCards";

const Checkboxes = () => {
  return (
    <div className="p-5 flex flex-col gap-3 w-full h-full border border-red-300">
      <h1 className="font-extrabold text-2xl">Checkboxes</h1>
      <CheckboxCards />
    </div>
  )
}

export default Checkboxes;
