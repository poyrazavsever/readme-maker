import React from 'react'
import Ide from '../ide'
function Banner() {
  return (
    <div className='flex mobile:w-full flex-col items-start justify-between gap-12 mt-16 desktop:mt-36 desktop:flex-row p-5 md:p-0'>

      <div className='flex flex-col items-start mobile:justify-center gap-6 md:w-1/2'>
        <h1 className='text-xl sm:text-3xl md:text-5xl font-extrabold sm:font-black tracking-wider dark:text-primary'>Create Your <span className='text-secondary'>README Files</span> with Ease!</h1>
        <p className='text-sm sm:text-base font-medium tracking-wider dark:text-primary'>Use our Markdown editor and GitHub integrations to quickly and aesthetically create your <span className='font-bold tracking-widest'>README files</span>. Professional look and usability in just a few clicks!</p>
        <button className='py-2 px-4 bg-secondary text-sm sm:text-lg font-medium text-primary rounded transition-all hover:bg-sky-300'>Get Started</button>
      </div>

      <div className='w-full md:w-1/2'>
        <Ide />
      </div>

    </div>
  )
}

export default Banner