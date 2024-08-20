const Preview4 = () => {
    const name = "Poyraz";
    const githubUsername = "poyrazavsever";
    const countryName = "Turkey";
    const image = "https://via.placeholder.com/150";
    const job = "Front-End Developer";
    const paragraph = "I am a passionate front-end developer with experience in modern web technologies.";
    const techs = [
        { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=js" } }, name: "JavaScript" },
        { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=react" } }, name: "React" }
    ];
    const socialMedia = [
        { platform: "instagram", link: "https://www.instagram.com/p.avsever" },
        { platform: "github", link: "https://www.github.com/poyrazavsever" }
    ];

    return (
        <div className="h-full p-6 bg-gray-900 rounded-lg border border-gray-700 shadow-lg">
            <div className="flex items-center">
                <img src={image} alt={`${name}'s profile`} className="w-24 h-24 rounded-full mr-4" />
                <div>
                    <h2 className="text-3xl font-semibold text-slate-100">{name}</h2>
                    <p className="text-slate-200">{job} from {countryName}</p>
                </div>
            </div>
            <p className="text-slate-200 mt-4">{paragraph}</p>
            <div className="py-4">
                <img src={`https://visitor-badge.laobi.icu/badge?page_id=${githubUsername}.${githubUsername}&`} alt="Visitor Badge" style={{ borderRadius: '8px' }} />
            </div>
            <section className="py-8">
                <h3 className="text-2xl font-semibold text-slate-200">Technologies</h3>
                <div className="flex flex-wrap gap-3 pt-6">
                    {techs.map((tech, index) => (
                        <img key={index} src={tech.providers["skillicons"].path} alt={`${tech.name} logo`} width="40" className="rounded-sm" />
                    ))}
                </div>
            </section>
            <section className="py-8">
                <h3 className="text-2xl font-semibold text-slate-200">Social Media</h3>
                <div className="flex flex-wrap gap-3 pt-6">
                    {socialMedia.map((socialmedia, index) => (
                        <a key={index} href={socialmedia.link} target="_blank" rel="noopener noreferrer">
                            <img src={`https://raw.githubusercontent.com/poyrazavsever/readme-maker/cd965922da06b9d3dc01772cac085f39056eec98/public/SocialMedia/${socialmedia.platform}/default.svg`} alt={`${socialmedia.platform} logo`} height="40" width="40" className="rounded-sm" />
                        </a>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Preview4;
