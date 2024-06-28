const MobileNavMenu = () => {
  return (
    <div className="flex gap-3 md:gap-4 lg:gap-6">
      <div className="flex flex-col gap-2 w-8">
        <input className="peer hidden" type="checkbox" />
        <div
          className="rounded-2xl h-[3px] w-1/2 bg-black dark:bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"
        ></div>
        <div
          className="rounded-2xl h-[3px] w-full bg-black dark:bg-white duration-500 peer-checked:-rotate-45"
        ></div>
        <div
          className="rounded-2xl h-[3px] w-1/2 bg-black dark:bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"
        ></div>
      </div>
      <div className="flex flex-col gap-2 w-8">
        <input className="peer hidden" type="checkbox" checked />
        <div
          className="rounded-2xl h-[3px] w-1/2 bg-black dark:bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]"
        ></div>
        <div
          className="rounded-2xl h-[3px] w-full bg-black dark:bg-white duration-500 peer-checked:-rotate-45"
        ></div>
        <div
          className="rounded-2xl h-[3px] w-1/2 bg-black dark:bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]"
        ></div>
      </div>
    </div>
  )
}

export default MobileNavMenu;
