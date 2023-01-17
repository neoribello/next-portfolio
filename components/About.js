import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I am</h2>
          <p className='py-2 text-gray-600'>
            I have two years of experience in the tech industry from being a Web Designer to a Web Developer.

            For my first year of experience, I worked as a Web Designer at Real Estate Webmasters right after graduating from BCIT. Then I pivoted my career and went to Lighthouse Labs to focus on Web Development. I have recently worked at TalentMarketplace to be their Frontend developer for one year where I was involved in numerous product projects in mostly working on the frontend where I interacted with the backend.

            I have experience in working in an array of projects from being design related to development focused. I’ve worked in an agile and scrum environment that consists of React, Python, JavaScript, HTML, CSS and SCSS.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image className='rounded-xl' src="/../public/assets/profile.jpg" alt="/" width='600' height="500"/>
        </div>
      </div>
    </div>
  )
}

export default About