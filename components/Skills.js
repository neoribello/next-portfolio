import React, { useEffect, useState } from 'react'
import userData from '../data/data'
import SkillsItem from './SkillsItem'

function Skills() {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I can do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillsItem
            userData={userData}
          />
        </div>
      </div>
    </div>
  )
}

export default Skills