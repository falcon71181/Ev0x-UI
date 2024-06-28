const AnimatedCheckUncheck = () => {
  return (
    <div className="flex gap-2 md:gap-3">
      <div className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" />
        <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 size-16  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:size-14 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
        </div>
      </div>
      <div className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" value="" className="sr-only peer" checked />
        <div className="peer ring-0 bg-rose-400  rounded-full outline-none duration-300 after:duration-500 size-16  shadow-md peer-checked:bg-emerald-500  peer-focus:outline-none  after:content-['✖️'] after:rounded-full after:absolute after:outline-none after:size-14 after:bg-gray-50 after:top-1 after:left-1 after:flex after:justify-center after:items-center  peer-hover:after:scale-75 peer-checked:after:content-['✔️'] after:-rotate-180 peer-checked:after:rotate-0">
        </div>
      </div>
    </div>
  )
}

export default AnimatedCheckUncheck;
