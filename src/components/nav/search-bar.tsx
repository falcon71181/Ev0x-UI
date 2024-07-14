import { useKBar } from 'kbar'
import { SearchIcon, CommandIcon } from 'lucide-react'

export function Search() {
  const {
    query: { toggle }
  } = useKBar()

  return (
    <button
      onClick={toggle}
      className="mr-3 flex flex-1 cursor-text items-center gap-5 rounded-xl bg-neutral-200/20 py-3 px-4 text-sm leading-none backdrop-blur-3xl dark:bg-neutral-800/20"
    >
      <span className="flex items-center gap-3">
        <SearchIcon size="1em" className='text-black dark:text-white' />
        <span className="text-neutral-900 dark:text-neutral-400">
          Search...
        </span>
      </span>
      <kbd className="text-neutral-900 dark:text-neutral-400 keyboard hidden md:flex md:gap-2 md:justify-center md:items-center">
        <CommandIcon className='size-3.5' />
        <h1 className='size-4 font-extrabold flex items-center justify-center'>K</h1>
      </kbd>
    </button>
  )
}
