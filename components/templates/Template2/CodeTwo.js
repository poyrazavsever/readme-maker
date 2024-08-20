import React, { use } from 'react';
import { useSelector } from 'react-redux';
import { FaRegCopy } from "react-icons/fa6";
import toast from 'react-hot-toast';
import BackButton from '@/components/BackButton';

function CodeTwo({setCurrentStep, currentStep}) {
    const githubUsername = useSelector((state) => state.information.githubUsername);
    const name = useSelector((state) => state.information.name);
    const selectedTechs = useSelector((state) => state.information.techs);
    const selectedSocialMedia = useSelector((state) => state.information.socialMedia);
    const selectedCountry = useSelector((state) => state.information.countryName);
    const selectedJob = useSelector((state) => state.information.job);

    const elementsDiv = `
<div style="font-family: Arial, sans-serif; color: #333;">
<h2 style="font-size: 24px; color: #1F2937;">Hello everyone, I'm ${name}</h2>
<h4>I'm from ${selectedCountry} and I'm a ${selectedJob} </h4>
<div style="margin-bottom: 20px;">
<img src="https://visitor-badge.laobi.icu/badge?page_id=${githubUsername}.${githubUsername}&" alt="Visitor Badge" style="border-radius: 8px;" />
</div>
<section style="margin-bottom: 20px;">
<h3 style="font-size: 20px; color: #1F2937;">Technologies</h3>
<div align="left" style="display: flex; flex-wrap: wrap;">
${selectedTechs.map(tech => `
<img src="${tech.providers[tech.provider].path}" alt="${tech.name} logo" height="40" style="border-radius: 5px;" />
<img width="12">
`).join('')}
</div>
</section>
<section style="margin-bottom: 20px;">
<h3 style="font-size: 20px; color: #1F2937;">Social Media</h3>
<div style="display: flex; flex-wrap: wrap;">
${selectedSocialMedia.map(socialmedia => `
<a href="${socialmedia.link}" target="_blank" style="margin-right: 15px;">
<img src="https://raw.githubusercontent.com/poyrazavsever/readme-maker/9f115e8a71eadd6caeab48174a2e91b08a11ba03/public/SocialMedia/${socialmedia.platform}/default.svg" alt="${socialmedia.platform} logo" height="40" width="40" style="border-radius: 5px;" /></a><img width="12">`).join('')}</div>
</section>
</div>
`;


    const copyToClipboard = () => {
        const codeElement = document.getElementById('code-block');
        navigator.clipboard.writeText(codeElement.textContent).then(() => {
            toast.success("Copied")
        }, (err) => {
            toast.error('Copy operation failed:', err);
        });
    };

    return (
        <div className="max-w-lg mx-auto border border-gray-300 rounded-lg bg-gray-100 p-2 overflow-hidden">

            <BackButton setCurrentStep={setCurrentStep} currentStep={currentStep}/>

            <div className='flex items-center justify-between'>
                <h4 className="text-sm uppercase font-bold tracking-wider text-slate-800 py-2">Your code</h4>

                <button onClick={copyToClipboard}><FaRegCopy className='text-slate-800 text-lg'/></button>
            </div>

            <pre className="max-h-96 overflow-y-auto scrollbar scrollbar-track-slate-900 scrollbar-thumb-slate-400 whitespace-pre-wrap break-words p-2 bg-gray-800 text-gray-200 rounded-md" id='code-block'>
                {elementsDiv}
            </pre>
        </div>
    );
}

export default CodeTwo;
