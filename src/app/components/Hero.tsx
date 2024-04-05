import React from 'react'
import Image from 'next/image'
import { FaYoutube } from "react-icons/fa"
import { trace } from 'next/dist/trace'
import bg from '../images/bg2.jpg'

function Hero() {
    return (
        <div className="bg min-h-screen flex flex-col md:flex-row justify-center items-center">
             <Image
             className='object-cover w-full h-screen'
                src={bg}
                alt='bg'
                
            />
            <div className='container text-white space-y-6 absolute'>
           
                    <h1 data-aos="fade-up" className=' text-4xl sm:text-4xl md:text-5xl w-full md:w-2/4 font-bold leading-tight'>You Only Fail, <span className='bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'>When You Stop</span> Trying</h1>
                    <p data-aos="fade-up" data-aos-delay="600" className='w-full md:w-2/4 text-sm sm:text-sm md:text-xl'>
                        "You Only Fail, When You Stop Trying" serves as a powerful mantra for gym motivation, reminding us that success is not defined by the number of times we fall, but by our determination to get back up and keep pushing forward. In the world of fitness, setbacks and challenges are inevitable, but it is our resilience and perseverance that ultimately lead to progress. This quote encourages us to embrace failure as a stepping stone to success, recognizing that each attempt, no matter how difficult, brings us closer to our goals. So, the next time you feel like giving up, remember these words and let them fuel your drive to keep going.

                    </p>
                    <div data-aos="fade-up" data-aos-delay="1000" className='flex gap-8'>
                        <button className='uppercase px-4 py-2 bg-orange-500 text-sm hover:scale-105 transition duration-200 ease-in'>Get Started Now</button>
                        <div className='flex gap-2 items-center'>
                            <FaYoutube size={28} className='text-red-500' />
                            <button>Watch Reviews</button>
                        </div>
                        </div>
                    </div>
                </div>
        

    )
}

export default Hero