"use client"
import React from 'react'

import Link from 'next/link'
import {MdCancel} from "react-icons/md"
import {CgMenuGridR} from "react-icons/cg"
import { useState } from 'react'
import { FaHamburger } from 'react-icons/fa'
import { IoMdMenu } from 'react-icons/io'


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



  return (
    <header className='bg-slate-950 shadow-md text-white backdrop-blur-lg'>
      <nav className='container flex items-center justify-between py-3'>
        <div>
  
          <Link href={"/"}>
            <span className='text-3xl font-bold'>Flex</span>
            <span className='text-3xl font-bold text-orange-500'>Force</span>
          </Link>
        </div>
        <div className='md:hidden'>
        <IoMdMenu size={38}/>
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
      </nav>
     
    </header>
  )
}

export default Navbar