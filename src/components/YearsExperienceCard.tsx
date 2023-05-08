import { CardStructure } from "./CardStructure";

export function YearsExperienceCard() {
  const firstJobDate = new Date(2021, 9, 28);
  const today = new Date();
  const diffYear = today.getFullYear() - firstJobDate.getFullYear();

  return (
    <CardStructure className="px-1 py-6 bg-[#8BB443]">
      <span className="block w-fit mx-auto text-4xl font-bold">{diffYear}+</span> {/* TODO: fazer o calculo certinho */}
      <span className="block w-fit mx-auto text-lg font-semibold">Years Experience</span>
    </CardStructure>
  )
}