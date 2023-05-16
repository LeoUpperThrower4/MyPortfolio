import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

/* TODO: Add I18N */
interface CardStructureProps {
  children?: React.ReactNode;
  className?: string;
  layoutId?: string;
  updateSelectedCard?: (layoutId: string) => void;
}

export function CardStructure({ children, className, layoutId, updateSelectedCard }: CardStructureProps) {
  return (
    <motion.div 
      layoutId={layoutId}
      className={twMerge(`cursor-pointer rounded-3xl text-white bg-[#3E3B3B] ${className ?? ''}`)}
      onClick={() => updateSelectedCard && updateSelectedCard(layoutId ?? '')}
    >
      {children}
    </motion.div>
  )
}