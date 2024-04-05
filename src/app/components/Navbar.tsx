'use client'
import { RiMenu3Line, } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import Link from "next/link"

const Navbar = () => {
    const [mobileDrawerOpen,setmobileDrawerOpen]=useState(false)
    const toggleNavbar=()=>{
        setmobileDrawerOpen(!mobileDrawerOpen)
    }
  return (
   <nav className='top-0 z-50  py-3 bg-neutral-950'>
    <div className='container flex justify-between px-4 mx-auto relative text-sm'>
        <div className='flex items-center justify-center'>
            <div className='flex items-center flex-shrink-0 p'></div>
    <span className="text-3xl tracking-tight text-white">Flex<span className="text-orange-500">Force</span></span>
        </div>
        <ul className="hidden lg:flex ml-14 space-x-14 items-center justify-center font-poppins  text-white">
           <Link href='/' className="text-orange-500"><li>Home</li></Link>
           <Link href='/About' className="hover:text-orange-500"> <li>About</li></Link>
           <Link href='/Reviews' className="hover:text-orange-500"> <li>Reviews</li></Link>
           <Link href='/Pricing' className="hover:text-orange-500"> <li>Pricing</li></Link>
           <Link href='/Blog' className="hover:text-orange-500"> <li>Blog</li></Link>
        </ul>
        
        <div  className="lg:hidden md:flex flex-col justify-end  text-xl">
            <button onClick={toggleNavbar} className="py-3">{mobileDrawerOpen ? <RxCross2 className="text-white"/> :<RiMenu3Line className="text-white" />}</button>
        </div>
    </div>
    {
        mobileDrawerOpen && (
            <div className="right-0 z-20 bg-neutral-900 w-full p-4 flex flex-col justify-center items-center lg:hidden text-white">
                 <ul className=" space-x-1">
           <Link href='/' className="text-orange-500"> <li>Home</li></Link>
           <Link href='/About' className="hover:text-orange-500"> <li>About</li></Link>
           <Link href='/Reviews' className="hover:text-orange-500"> <li>Reviews</li></Link>
           <Link href='/Pricing' className="hover:text-orange-500"> <li>Pricing</li></Link>
           <Link href='/Blog' className="hover:text-orange-500"> <li>Blog</li></Link>
        </ul>
            </div>

        )
    }
   </nav>
  )
}

export default Navbar