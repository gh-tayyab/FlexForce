import React from 'react'
import { FaInternetExplorer} from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { MdEmail } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
const Footer = () => {
  return (
    <footer className='bg-neutral-900 border-t-2 border-neutral-800 text-white pt-8 md:pt-0'>
        <div className='flex flex-col md:flex-row justify-center gap-5 mg:gap-24 p-8 md:px-32 px-5'>
            <div className='w-full md:w-1/4 space-y-4'>
                <span className='text-3xl font-bold'>Flex</span>
                <span className='text-3xl font-bold text-orange-500'>Force</span>

                <p className='text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nostrum expedita iste. Reprehenderit est officia quaerat aut natus dolorem! Similique, sapiente! Natus sit id optio ut beatae fuga esse architecto?
                </p>
            </div>
            <div className='w-full md:w-1/4'>
                <h1 className='font-medium text-2xl pb-4 pt-5 md:pt-0'>Quick Contacts</h1>
                <div className='space-y-2'>
                    <div className='flex items-center gap-3'>
                        <FaLocationDot size={23}/>
                        <p className='text-sm'>567 Cummerate Mission, Los Angeles USA 4502</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <MdEmail size={23}/>
                        <p className='text-sm'>flexforce@gmail.com</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <IoMdCall size={23}/>
                        <p className='text-sm'>+454346588907</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        <FaInternetExplorer size={23}/>
                        <p className='text-sm'>www.flexforce.com</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='font-medium text-2xl pb-4 pt-5 md:pt-0'>Popular Tags</h1>
                <div className='space-y-5'>
                    <h3 className='font-medium ring-2 ring-slate-500 text-center uppercase hover:bg-orange-500 transition-all cursor-pointer'>Workout</h3>
                    <h3 className='font-medium ring-2 ring-slate-500 text-center uppercase hover:bg-orange-500 transition-all cursor-pointer'>Trainers</h3>
                    <h3 className='font-medium ring-2 ring-slate-500 text-center uppercase hover:bg-orange-500 transition-all cursor-pointer'>Nutrition</h3>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer