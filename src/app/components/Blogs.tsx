import React from 'react'
import pic1 from "../images/pic1.jpg"
import pic2 from "../images/pic2.jpg"
import pic3 from "../images/pic3.jpg"
import BlogsCard from './BlogsCard'


const BlogsData = [
    {
        id:1,
        img: pic1,
        title: "yoga & pilates",
        heading: "Do Your Self Realizations Quickly Fade",
        duration: "400"
    },
    {
        id:2,
        img: pic2,
        title: "Trainers & Equipment",
        heading: "Little Things Do Make A Difference",
        duration: "800"
    },
    {
        id:3,
        img: pic3,
        title: "PowerLifting",
        heading: "Are You Famous Or Focused",
        duration: "1200"
    }
]

const Blogs = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center items-center bg-slate-800 text-white py-8 overflow-hidden'>
        <h3 className='text-center text-lg font-bold text-orange-500 uppercase tracking-[4px]'>Daily Blogs</h3>
        <h1 className='text-center text-4xl font-bold pt-3'>Our Latest News</h1>

        <div className='container grid grid-col-1 md:grid-cols-3 lg:grid-col-3 gap-10 mt-10'>
            {BlogsData.map((ele)=>(
                <BlogsCard 
                key={ele.id}
                img={ele.img}
                title={ele.title}
                heading={ele.heading}
                duration={ele.duration}
                />
            ))}
        </div>
    </div>
  )
}

export default Blogs