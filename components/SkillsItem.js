import React from 'react'
import Image from 'next/image'

function SkillsItem(props) {
  
  console.log(props.userData.skills)
  return (
    <div>
    {props.userData.skills.map((item, index) => (
      <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
          <div className='m-auto'>
            <Image 
              src='/../public/assets/logo.png' 
              width="100" 
              height="100"
              alt='/'
            />
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h3>{item.name}</h3>
          </div>
        </div>
      </div>
    ))}
    </div>
    
  )
}

export default SkillsItem