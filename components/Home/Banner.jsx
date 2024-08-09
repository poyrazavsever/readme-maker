import React from 'react'
import Ide from '../ide'
function Banner() {
  return (
    <div className='flex items-start justify-between gap-12 desktop:mt-36'>

      <div className='flex flex-col items-start gap-6 md:w-1/2'>
        <h1 className='text-3xl md:text-5xl font-black tracking-wider'>Create Your <span className='text-secondary'>README Files</span> with Ease!</h1>
        <p className='font-medium tracking-wider'>Use our Markdown editor and GitHub integrations to quickly and aesthetically create your <span className='font-bold tracking-widest'>README files</span>. Professional look and usability in just a few clicks!</p>
        <button className='py-2 px-4 bg-secondary text-lg font-medium text-primary rounded transition-all hover:bg-sky-300'>Get Started</button>
      </div>

      <div className='h-screen md:w-1/2'>
        <Ide />
      </div>

    </div>
  )
}

export default Banner