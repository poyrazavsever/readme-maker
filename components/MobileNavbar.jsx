import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

function MobileNavbar({ isDark, setIsDark }) {

  const linkStyle = "text-zinc-800 dark:hover:text-secondary uppercase text-2xl font-bold dark:text-primary tracking-widest before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-600 dark:before:bg-secondary before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100 relative hover:text-neutral-600 transition-all"

  const linkStylebot = "flex items-center gap-4 text-zinc-800 dark:hover:text-secondary text-lg font-medium tracking-widest dark:text-primary before:content-[''] before:absolute before:w-full before:h-[1px] before:rounded-md before:bg-neutral-600 dark:before:bg-secondary before:-bottom-1 before:left-0 before:origin-right before:scale-x-0 before:transition-all before:ease-in-out before:duration-300 hover:before:origin-left hover:before:scale-x-100 relative"

  const [open, setOpen] = useState(false)


  return (
    <div className='w-full hidden mobile:block relative !z-50'>

      <div className='dekstop:container dekstop:mx-auto w-full flex items-center justify-between p-6'>
        <div>
          <img src="/logo/logo.svg" className='w-8' />
        </div>

        <div>

          <div>
            <button onClick={() => setOpen(!open)}><IoMdMenu className='text-3xl text-neutral-900 hover:text-neutral-500 transition-all dark:text-primary dark:hover:text-secondary' /></button>
          </div>

        </div>
      </div>

      {open === true &&
        <div className='absolute h-screen w-full top-0 left-0 bg-primary dark:bg-tert bg-opacity-70 backdrop-blur-md z-50 !overflow-y-hidden p-8 animate-card'>

          <div className='w-full flex items-center justify-between border-b pb-4'>

            <img src="/logo/logo.svg" className='w-8' />

            <button onClick={() => setOpen(!open)}><IoMdClose className='text-4xl dark:text-primary dark:hover:text-secondary text-neutral-900 hover:text-neutral-500 transition-all' /></button>

          </div>

          <div>
            <ul className='mt-24 flex flex-col items-start justify-center gap-16'>
              <li><a href="/" className={linkStyle}>-Home</a></li>
              <li><a href="/" className={linkStyle}>-Readme Maker</a></li>
              <li><a href="/" className={linkStyle}>-MD Editor</a></li>
            </ul>

            <div className='w-full h-[1px] bg-neutral-500 my-16'></div>

            <ul className='flex flex-col items-start justify-center gap-16'>
              <li><a href="/" className={linkStylebot}>
                <FaStar className='text-xl' /><span>Star my Github repositories</span>
              </a></li>
              <li><a href="/" className={linkStylebot}>
                <FaGithub className='text-xl' /><span>Check out my Github profile</span>
              </a></li>
              {!isDark &&
                <li>
                  <button onClick={() => setIsDark(!isDark)} className={linkStylebot}><FaMoon className='text-xl' />
                    <span>It's so bright in here!</span>
                  </button>
                </li>
              }

              {isDark &&
                <li>
                  <button onClick={() => setIsDark(!isDark)} className={linkStylebot}><FaSun className='text-xl' />
                    <span>The time for enlightenment has come!</span>
                  </button>
                </li>
              }
            </ul>

          </div>


        </div>

      }

    </div>
  )
}

export default MobileNavbar