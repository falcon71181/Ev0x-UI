import ComponentCards from "@/components/ui-group/ComponentCards";

export default function Components() {
  return (
    <div className="p-5 flex flex-col gap-3 w-full h-full border border-red-300">
      <h1 className="font-extrabold text-2xl">Components</h1>
      <ComponentCards />
    </div>
  );
}
