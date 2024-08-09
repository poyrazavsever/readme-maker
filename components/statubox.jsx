import React from 'react'

function StatusBox({ icon, header, desc }) {
  return (
    <div className='bg-fourth p-6 shadow-xl shadow-tert flex flex-col items-start gap-2 w-full md:w-[280px]'>
      <div className='flex items-center justify-start gap-2'>
        {icon}
        <h4 className='uppercase font-semibold tracking-wider text-primary'>{header}</h4>
      </div>

      <p className='text-xs text-primary'>{desc}</p>

    </div>
  )
}

export default StatusBox