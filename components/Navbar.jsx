import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import Tooltip from './Tooltip';
function Navbar() {

    const linkStyle = ' text-sm font-semibold uppercase tracking-wider border-b border-neutral-600 inline-block relative px-2 py-1 transition-all !z-50 before:content-[""] before:-z-10 before:w-full before:h-0 before:bg-neutral-200 before:bottom-0 before:left-0 before:absolute before:transition-height hover:before:border-transparent hover:before:h-full shadow-xl'

    return (
        <div className='w-full items-center justify-between container mx-auto py-4 transition-all hidden desktop:flex'>

            <div>
                <img src="/logo/logo.svg" className='w-8' />
            </div>

            <ul className='flex items-center justify-center gap-6'>
                <li><a href="/" className={linkStyle}>Home</a></li>
                <li><a href="/" className={linkStyle}>Readme File</a></li>
                <li><a href="/" className={linkStyle}>md editör</a></li>
            </ul>

            <div className='flex items-center justify-center gap-6'>

                <div className='relative group'>
                    <a href='https://github.com/poyrazavsever/readme-maker' target='__blank' className='hover:text-neutral-600 transition-all'>
                        <FaStar className='text-xl' />
                    </a>

                    <div className="absolute -left-[116px] hidden group-hover:block -z-40">
                        <Tooltip message="Star my Github repositories" />
                    </div>

                </div>
                <div className='relative group'>
                    <a href="https://github.com/poyrazavsever" target='__blank' className='hover:text-neutral-600 transition-all'>
                        <FaGithub className='text-xl' />
                    </a>

                    <div className="absolute -left-[116px] hidden group-hover:block -z-40">
                        <Tooltip message="Check out my Github profile" />
                    </div>

                </div>
                <FaMoon className='hover:text-neutral-600 transition-all' />
            </div>


        </div>
    )
}

export default Navbar