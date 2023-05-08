import { twMerge } from "tailwind-merge";

/* TODO: Add I18N */
interface CardStructureProps {
  children?: React.ReactNode;
  className?: string;
}

export function CardStructure({ children, className }: CardStructureProps) {
  return (
    <div className={twMerge(`rounded-lg text-white bg-zinc-700 ${className ?? ''}`)}>
      {children}
    </div>
  )
}