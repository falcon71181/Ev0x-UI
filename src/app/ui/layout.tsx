import Sidebar from "@/components/nav/Sidebar";

export const metadata = {
  title: { default: 'Components', template: '%s - Ev0X - UI' },
  description: 'tailwindCSS and reactjs/nextjs copy paste components'
};

export default function ComponentLayout({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <main className="w-full flex">
      <div className="w-[100rem] mx-auto flex gap-3 px-3 border border-sky-600">
        <Sidebar />
        <div className="grow mr-5 px-3">
          {children}
        </div>
      </div>
    </main>
  );
}
