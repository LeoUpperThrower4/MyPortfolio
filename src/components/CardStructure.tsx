import { twMerge } from "tailwind-merge";

/* TODO: Add I18N */
interface CardStructureProps {
  children?: React.ReactNode;
  className?: string;
}

export function CardStructure({ children, className }: CardStructureProps) {
  return (
    <div className={twMerge(`rounded-3xl text-white bg-[#3E3B3B] ${className ?? ''}`)}>
      {children}
    </div>
  )
}