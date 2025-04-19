import React from 'react'
import { IoSparklesSharp } from "react-icons/io5";

const News = () => {
  return (
    <div className='news w-full h-screen text-black'>
      <div className='news-con flex flex-col justify-center items-center pt-15 '>
        <div className='flex gap-4 items-center '> 
            <IoSparklesSharp/>
            <p>In the Media</p>
        </div>
        <div>
            <h1 className='text-[82.176px] md:text-[153px] leading-20 md:leading-35 py-10'> &nbsp;&nbsp;Spread <br /> the News</h1>
        </div>
        <div className='text-[24.6528px] font-semibold '>
            <p>Find out more about our work <br />
            &nbsp;&nbsp;on these leading design and <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; technology platforms.
            </p>
        </div>
        <div className='text-[21.6528px] md:text-[17px] py-10'>
            <h2><a href="#">Browse all News</a></h2>
        </div>

      </div>
    </div>
  )
}

export default News
