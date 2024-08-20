import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegCopy } from "react-icons/fa6";
import toast from 'react-hot-toast';
import BackButton from '@/components/BackButton';

function CodeTwo({setCurrentStep, currentStep}) {
    const githubUsername = useSelector((state) => state.information.githubUsername);
    const name = useSelector((state) => state.information.name);
    const selectedTechs = useSelector((state) => state.information.techs);
    const selectedSocialMedia = useSelector((state) => state.information.socialMedia);

    const elementsDiv = `
<h2>Hi! I'm ${name}</h2>
<div align="left">
 <img src="https://visitor-badge.laobi.icu/badge?page_id=${githubUsername}.${githubUsername}&" />
</div>
<div>
<h3 align="left">Techs</h3>
<div align="left">
${selectedTechs.map(tech => `
<img src="${tech.providers[tech.provider].path}" alt="${tech.name} logo" height="40"/>
<img width="12"/>
`).join('')}
</div>
</div>
<div>
<h3 align="left">Social Media</h3>
${selectedSocialMedia.map(socialmedia => `
<a href="${socialmedia.link}" target='__blank'><img src="https://raw.githubusercontent.com/poyrazavsever/readme-maker/9f115e8a71eadd6caeab48174a2e91b08a11ba03/public/SocialMedia/${socialmedia.platform}/default.svg" alt="${socialmedia.platform} logo" height="40" width="52"/></a>
<img width="12"/>`).join('')}
</div>
<div>
<h3 align="left">Stats</h3>
<div align="left">

<img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1" height="150" alt="stats graph"  />
<img src="https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2" height="150" alt="languages graph"  />
<img src="https://streak-stats.demolab.com?user=${githubUsername}&locale=en&mode=daily&theme=dracula&hide_border=false&border_radius=5&order=3" height="150" alt="streak graph"  />
<img src="https://github-profile-trophy.vercel.app?username=${githubUsername}&theme=dracula&column=-1&row=1&margin-w=8&margin-h=8&no-bg=false&no-frame=false&order=4" height="200" alt="trophy graph"  />
<img src="https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&radius=16&theme=react&area=true&order=5" height="300" alt="activity-graph graph"  />
</div>
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
