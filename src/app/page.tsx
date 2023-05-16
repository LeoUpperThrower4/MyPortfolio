'use client'
import Image from "next/image";
import { CardStructure } from "../components/CardStructure";
import { Mail, Linkedin, GitHub, Download } from "react-feather";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";	
import { Dialog } from '@headlessui/react'
import Link from "next/link";

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

interface LayoutModal {
  [key: string]: React.ReactNode
}

const layoutModal: LayoutModal = { 'work': <CardStructure>teste</CardStructure> }

export default function Home() {
  const firstJobDate = new Date(2021, 9, 28);
  const today = new Date();
  const diffYear = today.getFullYear() - firstJobDate.getFullYear();

  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref});

  console.log(scrollXProgress)
  
  const [selectedCard, setSelectedCard] = useState("")

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
              <Link key={url} href={url} target="_blank" className="p-4">
                <Icon size={48} />
              </Link>
            )
          })}
      </CardStructure>
      {/* Hire Me */}
      {/* Portfolio */}
      <CardStructure updateSelectedCard={setSelectedCard} layoutId="portfolio" className="col-span-8 min-h-[16rem] relative overflow-hidden group">
        <Image
          src={'/usegptest_hero.png'}
          alt="Nelogica Website Cover"
          fill
          style={{objectFit: 'cover'}}
          className="transition-all duration-300 ease-in-out group-hover:scale-110"
        />               
        <span className="
        transition-all duration-500 ease-in-out 
        group-hover:text-2xl
        flex items-end justify-center
        roundend-lg absolute top-0 right-0 left-0 bottom-0
          
        p-4 bg-gradient-to-t from-[#3E3B3B] to-transparent
        text-white text-lg">
          Portfolio
        </span>
      </CardStructure>
      {/* Work Experience */}
      <CardStructure updateSelectedCard={setSelectedCard} layoutId="work" className="col-span-8 p-2 min-h-[16rem] relative overflow-hidden group">
        <Image
            src={'/nelogica_hero.png'}
            alt="Nelogica Website Cover"
            fill
            style={{objectFit: 'cover'}}
            className="transition-all duration-300 ease-in-out group-hover:scale-110"
        />            
        <span className="
          transition-all duration-500 ease-in-out 
          group-hover:text-2xl      
          flex items-end justify-center
          roundend-lg absolute top-0 right-0 left-0 bottom-0
          p-4 bg-gradient-to-t from-[#3E3B3B] to-transparent
          text-white text-lg">
            Work Experience
        </span>
      </CardStructure>  
      {/* About Me */}
      <CardStructure updateSelectedCard={setSelectedCard} layoutId="me" className="col-span-4 min-h-[20rem] relative overflow-hidden group">
        <Image
          src={'/eu.jpg'}
          alt="Leonardo`s Picture. White man with a beard and short hair."
          fill
          style={{objectFit: 'cover'}}
          className="transition-all duration-300 ease-in-out group-hover:scale-110"
        />    
        <span className="
          transition-all duration-500 ease-in-out 
          group-hover:text-2xl
          flex items-end justify-center
          roundend-lg absolute top-0 right-0 left-0 bottom-0
          p-4 bg-gradient-to-t from-[#3E3B3B] to-transparent
          text-white text-lg">
            About Me
        </span>         
          
      </CardStructure>
      {/* Education History */}
      <CardStructure updateSelectedCard={setSelectedCard} layoutId="education" className="col-span-4 min-h-[20rem] relative overflow-hidden group">
      <Image
          src={'/furg.jpg'}
          alt="Picture of the author"
          fill
          style={{objectFit: 'cover'}}
          className="transition-all duration-500 ease-in-out group-hover:scale-110"
        />          
      <span className="
        transition-all duration-500 ease-in-out 
        group-hover:text-2xl
        flex items-end justify-center
        roundend-lg absolute top-0 right-0 left-0 bottom-0
        p-4 bg-gradient-to-t from-[#3E3B3B] to-transparent
        text-white text-lg">Education History</span>         
      </CardStructure>
      {/* Resume */}
      <CardStructure updateSelectedCard={setSelectedCard} layoutId="resume" className="col-span-8 flex justify-between items-center p-4 min-h-[6rem]">
        <span className="py-2">Resume</span>
        <div className="flex items-center justify-center bg-[#1B1919] rounded-full">
          <button className="py-3 px-10 border-r border-r-[#4E4B4B] flex items-center gap-2">EN-US <Download size={20}/></button>
          <button className="py-3 px-10 flex items-center gap-2">PT-BR <Download size={20}/></button>
        </div>
      </CardStructure> 

      <AnimatePresence>
        <Dialog  open={selectedCard != ''} onClose={() => setSelectedCard('')}>
          <div className="fixed inset-0 bg-black/20" aria-hidden="true" />

          <Dialog.Panel >
            <motion.div layoutId={selectedCard} className="rounded-3xl fixed top-[10%] bottom-[10%] left-[10%] right-[10%] bg-slate-400">
              <ul ref={ref} className="overflow-x-scroll flex flex-grow-0 p-2 basis-1 gap-1 ">
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">a</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">v</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
                <li className="w-96 h-7 bg-slate-500 flex-shrink-0">b</li>
              </ul>
              {/* {layoutModal[selectedCard]} */}
            </motion.div>
          </Dialog.Panel>
        </Dialog>
      </AnimatePresence> 
    </main>
  )
}