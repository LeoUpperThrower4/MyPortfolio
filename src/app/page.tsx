import { CardStructure } from "../components/CardStructure";
import { Linkedin, GitHub } from "react-feather";

const socialNetworks = [
  {
    url: 'https://www.linkedin.com/in/leonardo-silva-oliveira/',
    Icon: Linkedin
  },
  {
    url: 'https://github.com',
    Icon: GitHub
  },
  {
    url: 'https://www.linkedin.com/in/leonardo-silva/',
    Icon: Linkedin
  },
  {
    url: 'https://github.com/',
    Icon: GitHub
  }
]

export default function Home() {
  const firstJobDate = new Date(2021, 9, 28);
  const today = new Date();
  const diffYear = today.getFullYear() - firstJobDate.getFullYear();
  return (
    <main className="grid grid-cols-8 grid-rows-[12] gap-3 w-full h-screen p-8">
      {/* Welcome */}
      <CardStructure className="flex flex-col justify-center py-6 px-8 col-span-8 row-span-2">
        <span className="font-semibold text-lg flex-grow-2">Hi, I`m Leonardo Silva👋</span>
        <span className="font-semibold text-2xl mb-3 flex-grow-3">Software Developer</span>
      </CardStructure>
      {/* Resume */}
      <CardStructure className="col-span-8 row-span-1 flex justify-between items-center p-4">
        <span className="py-2">Resume</span>
        <div className="flex items-center justify-center bg-[#1B1919] rounded-full">
          <button className="py-3 px-10 border-r border-r-[#4E4B4B]">EN</button>
          <button className="py-3 px-10">PT</button>
        </div>
      </CardStructure>
      {/* Years Experience */}
      <CardStructure className="col-span-4 row-span-2 flex flex-col items-center justify-center px-1 py-6 bg-[#8BB443]">
        <span className="block text-4xl font-bold">{diffYear}+</span>
        <span className="block text-lg font-semibold text-center">Years Experience</span>
      </CardStructure>
      {/* Social Networks */}
      <CardStructure className="col-span-4 row-span-2 grid grid-cols-2 grid-rows-2">
          {socialNetworks.map(({url, Icon}) => {
            return (
              <div key={url} className="m-auto items-center justify-center rounded-full p-4 bg-[#1B1919]">
                <Icon size={48} className="text-white" />
              </div>
            )
          })}
      </CardStructure>
      {/* Portfolio */}
      <CardStructure className="col-span-8 row-span-2 p-2">
        {/* <img src="" alt="" /> */}
        <span>Portfolio</span>
      </CardStructure>
      {/* Work Experience */}
      <CardStructure className="col-span-8 row-span-2 p-2">
        {/* <img src="" alt="" /> */}
        <span>Work Experience</span>
      </CardStructure>  
      {/* About Me */}
      <CardStructure className="col-span-4 row-span-3">
        About Me
      </CardStructure>
      {/* Education History */}
      <CardStructure className="col-span-4 row-span-3">
        Education History
      </CardStructure>
    </main>
  )
}

// assim que transforma em full static?
export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24 // 24 hours
  }
}