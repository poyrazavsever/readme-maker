import React from 'react'
import StatusBox from '../statubox'
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineFeedback } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

function Status() {
    return (
        <div className='mt-48 mb-24 w-full p-5 desktop:p-0'>

            <div className='w-full flex flex-col md:flex-row items-start md:justify-between gap-14'>

                <div className='flex flex-col items-start gap-4 md:w-1/2'>

                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold tracking-wide'><span className='text-secondary'>README Files:</span> The Face of Your Projects</h3>

                    <p>README files are essential documents that provide key information and usage instructions for your projects. They explain what the project is about, how to use it, and what features it offers. A well-crafted README makes it easier for others to quickly understand and effectively use your project. Additionally, for open-source projects, it shows contributors how they can get involved and how to get started. In essence, a README file ensures your projects are presented professionally and helps others grasp them with ease.</p>

                </div>

                <div className='flex flex-col items-start gap-4 md:w-1/2'>

                    <h3 className='text-lg sm:text-xl md:text-2xl font-bold tracking-wide'><span className='text-secondary'>MD Files:</span>  A Simple Yet Powerful Document Format</h3>

                    <p>Markdown (.md) files are a lightweight markup language used for formatting text content. They allow you to easily organize and format written content, resulting in clean and readable documents. Especially popular for software development and documentation, Markdown provides functionalities like list creation, heading insertion, and linking. This makes your text more accessible and understandable for both users and other developers.</p>

                </div>

            </div>

            <div className='w-full h-full p-8 bg-secondary my-24'>

                <div className='flex flex-col md:flex-row items-start justify-between gap-12 dekstop:gap-0'>
                    <StatusBox icon={<BsGraphUpArrow className='text-primary'/>} header="Upcoming Features" desc="New Markdown Templates, More Theme Options. Enhanced API Integrations"/>
                    <StatusBox icon={<MdOutlineFeedback className='text-primary'/>} header="User Feedback" desc="New Markdown Templates, More Theme Options. Enhanced API Integrations"/>
                    <StatusBox icon={<AiOutlineProject className='text-primary'/>} header="Project Status" desc="New Markdown Templates, More Theme Options. Enhanced API Integrations"/>
                </div>

            </div>

        </div>
    )
}

export default Status