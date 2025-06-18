// eslint-disable-next-line no-unused-vars
import React from 'react'

const Body = () => {
  return (
    <div className='space-y-4 lg:flex lg:flex-row '>
      <div className='flex items-center justify-center lg:flex-1 lg:h-[400px]  lg:order-2'>
        <img src="./assets/Blue-Shape.svg" alt="1st" className=' -rotate-45 h-64 md:h-[300px] lg:h-[400px]'/>
        <img src="./assets/Pink-Shape.svg" alt="2nd" className='absolute -rotate-[30deg] h-64 md:h-[300px] lg:h-[400px]'/>
        <img src="./assets/Purple-Shape.svg" alt="3rd" className='absolute -rotate-[15deg] h-64 md:h-[300px] lg:h-[400px]'/>
        <img src="./assets/Hero-Model.png" alt="hero" className='absolute h-64 md:h-[300px] lg:h-[400px]' />
      </div>
      
      <div className='lg:flex-1'>
        <h1 className='text-5xl font-bold font-playfair leading-tight'>Host your website in less than 5 minutes</h1>
        
        <p className='font-lato text-gray-500 my-4 md:text-xl'>With Hoster, get your website up and running in no less than 5 minutes with the moist competitive pricing packages available online</p>

        <form action="" className='flex flex-col gap-4 md:flex-row md:text-xl md:my-4 lg:text-lg'>
          <input className='rounded-md px-4 py-3 placeholder:text-gray-400 md:w-[300px] md:h-[50px]' type="email" placeholder='Enter email address'/>
          
          <button className='rounded-md px-4 py-3 bg-blue-400 hover:bg:blue-600 text-white lg:py-2'>Join Waitlist</button>
        </form>

        <div className='flex gap-2'>
          <img src="./assets/Checkmark.svg" alt="Check" />
          
          <p className='font-lato text-gray-400 md:text-lg'>No spam, ever. Unsubscribe anytime</p>
        </div>
      </div>
    </div>
  )
}

export default Body
