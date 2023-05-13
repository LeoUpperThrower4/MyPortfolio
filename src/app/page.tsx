import { CardStructure } from "../components/CardStructure";
import { Mail, Linkedin, GitHub, Download } from "react-feather";

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
    url: 'mailto:leozinhoduartesilva@gmail.com',
    Icon: Mail
  }
]

export default function Home() {
  const firstJobDate = new Date(2021, 9, 28);
  const today = new Date();
  const diffYear = today.getFullYear() - firstJobDate.getFullYear();
  return (
    <main className="grid grid-cols-8 grid-rows-[12] gap-3 w-full p-16">
      {/* Welcome */}
      <CardStructure className="flex flex-col justify-center py-6 px-8 
      col-span-8 min-h-[6rem]">
        <span className="font-semibold text-lg flex-grow-2">Hi, I`m Leonardo Silva👋</span>
        <span className="font-semibold text-2xl mb-3 flex-grow-3">Software Developer</span>
      </CardStructure>
      {/* Years Experience */}
      <CardStructure className="col-span-4 row-span-2 flex flex-col items-center justify-center px-1 py-6 bg-[#8BB443] min-h-[12rem]">
        <span className="block text-4xl font-bold">{diffYear}+</span>
        <span className="block text-lg font-semibold text-center">Years Experience</span>
      </CardStructure>
      {/* Social Networks */}
      <CardStructure className="col-span-4 flex justify-evenly h-fit">
          {socialNetworks.map(({url, Icon}) => {
            return (
              <div key={url} className="p-4">
                <Icon size={48} />
              </div>
            )
          })}
      </CardStructure>
      {/* Social Networks */}
      <CardStructure className="col-span-4 flex justify-evenly h-fit">
          {socialNetworks.map(({url, Icon}) => {
            return (
              <div key={url} className="p-4">
                <Icon size={48} />
              </div>
            )
          })}
      </CardStructure>      
      {/* Portfolio */}
      <CardStructure className="col-span-8 min-h-[16rem] relative overflow-hidden bg-cover bg-usegptest">
        <span className="
        flex items-end justify-center
        roundend-lg absolute top-0 right-0 left-0 bottom-0
          
        p-4 bg-gradient-to-t from-[#3E3B3B] to-transparent
        text-white text-lg">Portfolio</span>
      </CardStructure>
      {/* Work Experience */}
      <CardStructure className="col-span-8 p-2 min-h-[16rem] relative overflow-hidden bg-cover bg-nelogica">
      <span className="
        flex items-end justify-center
        roundend-lg absolute top-0 right-0 left-0 bottom-0
        p-4 bg-gradient-to-t from-[#3E3B3B] to-transparent
        text-white text-lg">Work Experience</span>
      </CardStructure>  
      {/* About Me */}
      <CardStructure className="col-span-4 min-h-[20rem] relative overflow-hidden bg-cover bg-eu bg-top">
      <span className="
        flex items-end justify-center
        roundend-lg absolute top-0 right-0 left-0 bottom-0
        p-4 bg-gradient-to-t from-[#3E3B3B] to-transparent
        text-white text-lg">About Me</span>         
        
      </CardStructure>
      {/* Education History */}
      <CardStructure className="col-span-4 min-h-[20rem] relative overflow-hidden bg-cover bg-furg bg-top">
      <span className="
        flex items-end justify-center
        roundend-lg absolute top-0 right-0 left-0 bottom-0
        p-4 bg-gradient-to-t from-[#3E3B3B] to-transparent
        text-white text-lg">Education History</span>         
      </CardStructure>
      {/* Resume */}
      <CardStructure className="col-span-8 flex justify-between items-center p-4 min-h-[6rem]">
        <span className="py-2">Resume</span>
        <div className="flex items-center justify-center bg-[#1B1919] rounded-full">
          <button className="py-3 px-10 border-r border-r-[#4E4B4B] flex items-center gap-2">EN <Download size={20}/></button>
          <button className="py-3 px-10 flex items-center gap-2">PT <Download size={20}/></button>
        </div>
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