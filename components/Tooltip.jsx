import React from 'react'

function Tooltip({ message }) {
  return (
    <div className='flex flex-col items-center animate-card'>
      <div className='w-0 h-0 border-[15px] border-t-transparent border-l-transparent border-r-transparent border-b-neutral-900'></div>
      <div className='bg-neutral-900 rounded-lg '>
        <p className='text-neutral-300 py-4 px-12 w-64 text-center'>{message}</p>
      </div>
    </div>
  )
}

export default Tooltip