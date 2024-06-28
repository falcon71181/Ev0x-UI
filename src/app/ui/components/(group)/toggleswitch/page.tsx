import ToggleSwitchCards from "@/components/ui-group/ToggleSwitchCards";

const ToggleSwitchs = () => {
  return (
    <div className="p-5 flex flex-col gap-3 w-full h-full border border-red-300">
      <h1 className="font-extrabold text-2xl">Toggle Switches</h1>
      <ToggleSwitchCards />
    </div>
  )
}

export default ToggleSwitchs;
