"use client"
import React from 'react'

import Link from 'next/link'
import {MdCancel} from "react-icons/md"
import {CgMenuGridR} from "react-icons/cg"
import { useState } from 'react'


export const Navlinks = [
  {
    id:1,
    title: "Home",
    link: "/"
  },
  {
    id:2,
    title: "About",
    link: "/About"
  },
  {
    id:3,
    title: "Reviews",
    link: "/Reviews"
  },
  {
    id:4,
    title: "Pricing",
    link: "/Pricing"
  },
  {
    id:5,
    title: "Blogs",
    link: "/Blogs"
  },
]

function Navbar() {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu)
  };
  const closeMenu = ()=> {
    setMenu(false);
  }


  return (
    <header className='bg-slate-950 shadow-md text-white backdrop-blur-lg'>
      <nav className='container flex items-center justify-between py-3'>
        <div>
          <Link href={"/"}>
            <span className='text-3xl font-bold'>Flex</span>
            <span className='text-3xl font-bold text-orange-500'>Force</span>
          </Link>
        </div>
        <div className='hidden md:flex'>
          <ul className='flex items-center gap-8'>
            {Navlinks.map(({id, title, link})=> {
              return (
                <li key={id}>
                  <Link href={link} className='text-lg font-medium hover:text-orange-400 transition-all'>{title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className='md:hidden flex items-center'>
          {menu ? (
            <MdCancel size={25} onClick={handleChange} />
          ) : (
            <CgMenuGridR size={25} onClick={handleChange}/>
          )};
        </div>
      </nav>
      <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-black z-10 left-0 top-14 list-none font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
              {Navlinks.map(({id, title, link})=>{
                  return (
                    <li key={id}>
                      <Link href={link} onClick={closeMenu} className='text-lg font-medium hover:text-orange-400 transition-all'>{title}
                      </Link>
                    </li>
                  )
              })}
      </div>
    </header>
  )
}

export default Navbar