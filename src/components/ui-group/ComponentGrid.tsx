import Link from "next/link";
import type { ComponentDataType } from "@/types/component";
import Card from "./Card";

const ComponentGrid = ({ components }: { components: ComponentDataType[] }) => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {components.map((component: ComponentDataType, index: number) => (
        <Link href={component.link} key={index} className="no-underline">
          <Card title={component.title}>
            {component.component ? (
              component.component
            ) : null}
          </Card>
        </Link>
      ))}
    </div>
  )
}

export default ComponentGrid;
