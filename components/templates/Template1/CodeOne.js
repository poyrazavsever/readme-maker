import React from 'react'
import { useSelector } from 'react-redux';

function CodeOne() {

    
    const githubUsername = useSelector((state) => state.information.githubUsername)
    const name = useSelector((state) => state.information.name)
    const selectedTechs = useSelector((state) => state.information.techs)
    const selectedSocialMedia = useSelector((state) => state.information.socialMedia)
    
    return (
        <div className='prose'>

                        <h1>Hi! I'm {name}</h1>

                        <div align="left">
                            <img src={`https://visitor-badge.laobi.icu/badge?page_id=${githubUsername}.${githubUsername}&`}  />
                        </div>

                        <div>
                            <h2>Techs</h2>
                            <div align="left">
                                {selectedTechs.map((tech) => {
                                    let provider = tech.provider

                                    return (
                                        <>
                                            <img src={tech.providers[provider].path} alt={`${tech.name} logo`} height="40"/>
                                            <img width="12"/>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                        
                        <div>
                            <h2>Social Media</h2>
                            {selectedSocialMedia.map((socialmedia) => {
                                const link = socialmedia.link
                                const platform = socialmedia.platform
                                return (
                                    <>
                                        <a href={link} target='__blank'>
                                            <img 
                                                src={`https://raw.githubusercontent.com/poyrazavsever/readme-maker/9f115e8a71eadd6caeab48174a2e91b08a11ba03/public/SocialMedia/${platform}/default.svg`} 
                                                alt={`${platform} logo`}
                                                height="40" 
                                                width="52"
                                            />
                                        </a>
                                        <img width="12"/>
                                    </>
                                )
                            })}
                        </div>

                        <div align="left">

                            <img src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1`} height="150" alt="stats graph"  />

                            <img src={`https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2`} height="150" alt="languages graph"  />

                            <img src={`https://streak-stats.demolab.com?user=${githubUsername}&locale=en&mode=daily&theme=dracula&hide_border=false&border_radius=5&order=3`} height="150" alt="streak graph"  />

                            <img src={`https://github-profile-trophy.vercel.app?username=${githubUsername}&theme=dracula&column=-1&row=1&margin-w=8&margin-h=8&no-bg=false&no-frame=false&order=4`} height="200" alt="trophy graph"  />

                            <img src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&radius=16&theme=react&area=true&order=5`} height="300" alt="activity-graph graph"  />

                        </div>

                    </div>
    )
}

export default CodeOne