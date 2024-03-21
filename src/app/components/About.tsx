import React from 'react'
import Image from 'next/image'
import img1 from "../images/img1.jpg"

function About() {
  return (
    <div className='bg-slate-800 text-white py-10'>
        <div className='min-h-screen container flex flex-col md:flex-row justify-center items-center gap-10'>
        <div className='w-full md:w-2/4 space-y-6'>
        <h3 data-aos="fade-up" className='text-xl font-bold text-orange-500 uppercase tracking-[4px]'>About FlexForce</h3>
        <h1 data-aos="fade-up" className='text-5xl font-bold'>Welcome to Us</h1>
        <p data-aos="fade-up" className='text-orange-500 font-semibold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quo consectetur perspiciatis minus provident eveniet ea mollitia, blanditiis aperiam quis. Cumque dicta repudiandae possimus, fugiat cupiditate ipsum adipisci reiciendis esse.
        </p>
        <p data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus optio excepturi ab officia aliquid omnis, explicabo itaque non? Voluptatibus officiis molestias ipsa voluptas magni laboriosam rem error delectus earum soluta.
        </p>
        <p data-aos="fade-up">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, asperiores neque totam voluptatem hic ipsam unde sapiente quibusdam officia fugit commodi odio quo suscipit magni. Maiores distinctio autem maxime perspiciatis.
        </p>
        <span data-aos="fade-up" className='text-orange-500 font-bold'>Read more..</span>
        </div>
        <div data-aos="fade-up">
            <div>
                <Image src={img1} alt='img' width={455} height={455}/>
            </div>
        </div>
        </div>
    </div>
   

  )
}

export default About