import { twMerge } from "tailwind-merge";

/* TODO: Add I18N */
interface CardStructureProps {
  children?: React.ReactNode;
  className?: string;
}

export function CardStructure({ children, className }: CardStructureProps) {
  return (
    <div className={twMerge(`rounded-3xl text-white bg-zinc-700 ${className ?? ''}`)}>
      {children}
    </div>
  )
}