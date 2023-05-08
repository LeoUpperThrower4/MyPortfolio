'use client'

import { CardStructure } from "../components/CardStructure";
import { SocialNetworksCard } from "../components/SocialNetworksCard";
import { YearsExperienceCard } from "../components/YearsExperienceCard";

export default function Home() {
  return (
    <main>
      {/* Welcome Card */}
      <CardStructure className="py-6 px-8">
        <span className="block mx-auto font-semibold text-lg">Hi, I`m Leonardo Silva👋</span>
        <span className="block mx-auto font-semibold text-2xl mb-3">Software Developer</span>
      </CardStructure>
      {/* Years Experience Card */}
      <YearsExperienceCard />
      {/* SocialNetworks Card */}
      <SocialNetworksCard />
    </main>
  )
}

export const getStaticProps = async () => {
  return {
    props: {}
  }
}