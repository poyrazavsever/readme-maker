const Preview1 = () => {
  const name = "Poyraz";
  const selectedCountry = "Turkey";
  const selectedTechs = [
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=js" } }, name: "JavaScript" },
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=ts" } }, name: "TypeScript" },
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=react" } }, name: "React" },
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=nextjs" } }, name: "Next.js" },
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=nodejs" } }, name: "Node.js" },
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=html" } }, name: "HTML" },
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=css" } }, name: "CSS" },
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=tailwind" } }, name: "Tailwind CSS" },
    { providers: { "skillicons": { path: "https://skillicons.dev/icons?i=bootstrap" } }, name: "Bootstrap" }
  ];
  const selectedSocialMedia = [
    { platform: "instagram", link: "https://www.instagram.com/p.avsever" },
    { platform: "github", link: "https://www.github.com/poyrazavsever" },
    { platform: "linkedin", link: "https://www.linkedin.com/in/poyraz-avsever/" }
  ];
  const githubUsername = "poyrazavsever";

  return (
    <div className="h-full p-6 bg-gray-900 rounded-lg border border-gray-700 shadow-lg">
      <h2 className="text-3xl font-semibold text-slate-100 py-4">Hello everyone, I'm {name}</h2>
      <p className="text-slate-200">I'm from {selectedCountry} and I'm a Front-End Developer.</p>

      <div className="py-4">
        <img src={`https://visitor-badge.laobi.icu/badge?page_id=${githubUsername}.${githubUsername}&`} alt="Visitor Badge" style={{ borderRadius: '8px' }} />
      </div>

      <section className="py-8">
        <h3 className="text-2xl font-semibold text-slate-200">Technologies</h3>
        <div className="flex flex-wrap gap-3 pt-6">
          {selectedTechs.map((tech, index) => (
            <div key={index} style={{ marginRight: '15px' }}>
              <img src={tech.providers["skillicons"].path} alt={`${tech.name} logo`} width="40" style={{ borderRadius: '5px' }} />
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h3 className="text-2xl font-semibold text-slate-200">Social Media</h3>
        <div className="flex flex-wrap gap-3 pt-6">
          {selectedSocialMedia.map((socialmedia, index) => (
            <a key={index} href={socialmedia.link} target="_blank" rel="noopener noreferrer" style={{ marginRight: '15px' }}>
              <img src={`https://raw.githubusercontent.com/poyrazavsever/readme-maker/cd965922da06b9d3dc01772cac085f39056eec98/public/SocialMedia/${socialmedia.platform}/default.svg`} alt={`${socialmedia.platform} logo`} height="40" width="40" style={{ borderRadius: '5px' }} />
            </a>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Preview1
