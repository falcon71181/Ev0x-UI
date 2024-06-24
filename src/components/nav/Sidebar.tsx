'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dispatch, SetStateAction, useState } from 'react';
import { ArrowDown } from 'lucide-react';

type Route = {
  route: string;
  new?: boolean;
  updated?: boolean;
}

type Menu = {
  about: string;
  links: Route[];
}

const MenuItems: Menu[] = [
  {
    about: 'Components',
    links: [
      { route: 'Accordion', new: true },
      { route: 'Avatar' },
      { route: 'Badge' },
      { route: 'Breadcrumbs' },
      { route: 'Button' },
      { route: 'Card' },
      { route: 'Carousel' },
      { route: 'CheckBox' },
      { route: 'Dropdown' },
      { route: 'Footer' },
      { route: 'Form' },
      { route: 'File Upload' },
      { route: 'Hero' },
      { route: 'Input' },
      { route: 'Loader' },
      { route: 'Navbar' },
      { route: 'Pagination' },
      { route: 'Progress' },
      { route: 'Rating' },
      { route: 'Select' },
      { route: 'Skeleton' },
      { route: 'Tooltip' }
    ]
  },
];

export function SidebarMenuItem({ menuItem, setIsOpen }: { menuItem: Menu, setIsOpen: Dispatch<SetStateAction<boolean>> }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const path = usePathname();

  return (
    <div className={`${path.includes('components') && menuItem.about === 'Blocks' ? 'hidden' : path.includes('blocks') && menuItem.about === 'Components' ? 'hidden' : null}`}>
      <div onClick={() => setIsDropdownOpen(!isDropdownOpen)} className={`group mt-2 mb-4 flex cursor-pointer items-center justify-between gap-5`}>
        <h4 className={`group-hover:text-red-600 font-semibold capitalize dark:text-white`}>{menuItem.about}</h4>
        <ArrowDown className={`${isDropdownOpen ? '-rotate-180 duration-300' : 'duration-300'}`} />
      </div>
      <div className={`grid origin-top overflow-hidden font-mono duration-300 ease-in-out ${isDropdownOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="ml-3 flex flex-col space-y-2 overflow-hidden text-zinc-600 dark:text-zinc-400 sm:space-y-3 lg:space-y-4 border-l border-border">
          {menuItem?.links?.map((item: Route, key) => {
            return (
              <div key={key}>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  className={`${path.includes(item.route.toLowerCase()) ? "border-l border-primary" : "hover:border-l hover:border-neutral-1000 dark:hover:border-primary"} pl-3 group flex items-center gap-1`}
                  href={`/ui/${menuItem.about.toLowerCase()}/${item.route.toLowerCase().replace(/\s+/g, '')}`}
                >
                  <span
                    className={`${path === `/${menuItem.about.toLowerCase()}/${item.route.toLowerCase().replace(/\s+/g, '')}` ? 'font-semibold text-black dark:text-white' : 'group-hover:pl-[2px] group-hover:font-medium group-hover:tracking-widest group-hover:text-black dark:group-hover:text-white'} text-sm duration-200`}
                  >
                    {item?.route}
                  </span>
                  <span
                    className={`rounded-lg border px-1 text-xs ${item.new ? 'border-cyan-400 bg-cyan-400/20 text-cyan-400' : item.updated ? 'border-orange-500 bg-orange-500/20 text-orange-500' : 'hidden'}`}
                  >
                    {item.new ? 'new' : item.updated ? 'updated' : null}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="sticky select-none h-[90vh] pr-16 overflow-y-auto duration-300"
      >
        <div className="sidebar mt-2 overflow-y-scroll pl-5">
          {MenuItems.map((menuItem: Menu, idx: number) => (
            <SidebarMenuItem key={idx} setIsOpen={setIsOpen} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </>
  );
}
