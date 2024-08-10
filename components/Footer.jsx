import React from 'react'

//Social Media Icon
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {

    const socialStyle = "text-tert dark:text-primary hover:text-secondary transition text-xl "

    return (
        <div className='flex flex-col items-center justify-center gap-4 py-8'>
            <h3 className='text-sm sm:text-base dark:text-primary text-fourth font-bold tracking-wider'>My Social Media</h3>
            <div className='flex items-center justify-center gap-4'>
                <a href="https://github.com/poyrazavsever" target='__blank'><FaGithubSquare className={socialStyle}/></a>
                <a href="https://www.linkedin.com/in/poyraz-avsever-252408233/" target='__blank'><FaLinkedin className={socialStyle}/></a>
                <a href="https://x.com/PoyrazAvsever" target='__blank'><FaTwitterSquare className={socialStyle}/></a>
            </div>
            <p className='text-xs dark:text-primary text-fourth font-medium'>This site was designed and coded by Poyraz Avsever</p>
        </div>
    )
}

export default Footer