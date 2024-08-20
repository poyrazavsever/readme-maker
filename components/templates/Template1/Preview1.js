const Preview1 = () => {
  return (
    <div className="h-full p-6 bg-gray-900 rounded-lg border border-gray-700 shadow-lg">
      <h2 className="text-3xl font-semibold text-slate-100 py-4">Hi! I&apos;m Poyraz</h2>

      <div className="py-4">
        <img src="https://visitor-badge.laobi.icu/badge?page_id=poyrazavsever.poyrazavsever&" alt="visitor badge for preview"/>
      </div>

      <div className="flex flex-col items-start gap-4 py-8">
        <h3 className="text-2xl font-semibold text-slate-200">Techs</h3>
        <div className="flex flex-center flex-wrap gap-3">
          <img src="https://skillicons.dev/icons?i=js" width="40" alt="javascript logo" />
          <img src="https://skillicons.dev/icons?i=ts" width="40" alt="typescript logo" />
          <img src="https://skillicons.dev/icons?i=react" width="40" alt="react logo" />
          <img src="https://skillicons.dev/icons?i=nextjs" width="40" alt="nextjs logo" />
          <img src="https://skillicons.dev/icons?i=nodejs" width="40" alt="nodejs logo" />
          <img src="https://skillicons.dev/icons?i=git" width="40" alt="git logo" />
          <img src="https://skillicons.dev/icons?i=github" width="40" alt="github logo" />
          <img src="https://skillicons.dev/icons?i=gitlab" width="40" alt="gitlab logo" />
          <img src="https://skillicons.dev/icons?i=redux" width="40" alt="redux logo" />
          <img src="https://skillicons.dev/icons?i=py" width="40" alt="python logo" />
          <img src="https://skillicons.dev/icons?i=flask" width="40" alt="flask logo" />
          <img src="https://skillicons.dev/icons?i=django" width="40" alt="django logo" />
          <img src="https://skillicons.dev/icons?i=html" width="40" alt="html5 logo" />
          <img src="https://skillicons.dev/icons?i=css" width="40" alt="css3 logo" />
          <img src="https://skillicons.dev/icons?i=tailwind" width="40" alt="tailwindcss logo" />
          <img src="https://skillicons.dev/icons?i=materialui" width="40" alt="materialui logo" />
          <img src="https://skillicons.dev/icons?i=bootstrap" width="40" alt="bootstrap logo" />
          <img src="https://skillicons.dev/icons?i=sass" width="40" alt="sass logo" />
          <img src="https://skillicons.dev/icons?i=figma" width="40" alt="figma logo" />
          <img src="https://cdn.simpleicons.org/adobephotoshop/31A8FF" width="40" alt="photoshop logo" />
          <img src="https://skillicons.dev/icons?i=vscode" width="40" alt="vscode logo" />
        </div>
      </div>

      <div className="flex flex-col items-start gap-4 py-8">
        <h3 className="text-2xl font-semibold text-slate-200">Social Media</h3>
        <div className="flex flex-center gap-3">
          <a href="https://www.instagram.com/p.avsever" target="__blank">
            <img src="/SocialMedia/instagram/default.svg" alt="instagram svg" className="w-10 h-10" />
          </a>
          <a href="https://www.github.com/poyrazavsever" target="__blank" className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
            <img src="/SocialMedia/github/default.svg" alt="github svg" className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/poyraz-avsever/" target="__blank">
            <img src="/SocialMedia/linkedin/default.svg" alt="linkedin svg" className="w-10 h-10" />
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-slate-200 py-4">Stats</h3>
        <div className="flex flex-wrap items-center gap-4">
          <img src="https://github-readme-stats.vercel.app/api?username=poyrazavsever&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1" alt="stats graph" />
          <img src="https://streak-stats.demolab.com?user=poyrazavsever&locale=en&mode=daily&theme=dracula&hide_border=false&border_radius=5&order=3" alt="streak graph" />
          <img src="https://github-readme-stats.vercel.app/api/top-langs?username=poyrazavsever&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2" alt="languages graph" />
          <img src="https://github-profile-trophy.vercel.app?username=poyrazavsever&theme=dracula&column=-1&row=1&margin-w=8&margin-h=8&no-bg=false&no-frame=false&order=4" alt="trophy graph" />
        </div>
      </div>
    </div>
  )
}

export default Preview1
