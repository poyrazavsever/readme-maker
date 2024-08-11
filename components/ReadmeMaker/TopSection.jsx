import React from 'react'

function TopSection({section, setSection}) {

  // Eğer section false dönüyorsa profile, true dönüyorsa project kısmını çalıştıracağız. Checked değilse false, checked ise true.

  return (
    <div className='flex items-start gap-4 flex-col'>

        <div className='flex flex-col items-start'>

          <h2 className='text-lg font-semibold tracking-widest text-fourth dark:text-primary'>Readme Maker</h2>
          <p className='text-sm font-medium tracking-wider text-neutral-500'>Choose which type to create</p>

        </div>

        <span className='relative w-[200px] h-12 rounded-sm'>

          <input type="checkbox" id='switcher' className='appearance-none w-[200px] h-12 rounded-sm bg-fourth dark:bg-primary outline-none before:z-20 before:absolute before:top-1/2 before:-translate-y-1/2 before:font-medium after:z-20 after:absolute after:top-1/2 after:-translate-y-1/2 after:font-medium  before:content-["Profile"] before:left-5 after:content-["Project"] after:right-5 cursor-pointer before:text-primary dark:before:text-fourth checked:before:text-tert dark:checked:before:text-zinc-300 after:text-tert dark:after:text-zinc-300 checked:after:text-primary dark:checked:after:text-fourth' checked={section} onChange={() => setSection(!section)}/>

        </span>

    </div>
  )
}

export default TopSection