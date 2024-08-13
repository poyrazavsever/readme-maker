import React, { useState } from 'react';

const Stats = ({ setStatsList }) => {
  const [activeSection, setActiveSection] = useState('layout');
  const [align, setAlign] = useState('center');
  const [direction, setDirection] = useState('row');
  const [clearFloat, setClearFloat] = useState(false);
  const [showStats, setShowStats] = useState(true);
  const [showLanguages, setShowLanguages] = useState(true);
  const [showStreak, setShowStreak] = useState(true);
  const [showTrophy, setShowTrophy] = useState(true);
  const [selectedFeature, setSelectedFeature] = useState('stats');
  const [customTitle, setCustomTitle] = useState('');
  const [translate, setTranslate] = useState('en');
  const [hideRank, setHideRank] = useState(false);
  const [hideTitle, setHideTitle] = useState(false);
  const [hideBorder, setHideBorder] = useState(false);
  const [disableAnimations, setDisableAnimations] = useState(false);
  const [height, setHeight] = useState(150);
  const [theme, setTheme] = useState('dracula');
  const [showIcons, setShowIcons] = useState(true);
  const [githubUsername, setGithubUsername] = useState('');

  const features = {
    stats: showStats,
    languages: showLanguages,
    streak: showStreak,
    trophy: showTrophy,
  };

  const handleGenerate = () => {
    if (!githubUsername) {
      alert('Please enter your GitHub username');
      return;
    }

    const featureUrls = {
      stats: `https://github-readme-stats.vercel.app/api?username=${githubUsername}&hide_title=${hideTitle}&hide_rank=${hideRank}&show_icons=${features.stats}&include_all_commits=true&count_private=true&disable_animations=${disableAnimations}&theme=${theme}&locale=${translate}&hide_border=${hideBorder}`,
      languages: `https://github-readme-stats.vercel.app/api/top-langs?username=${githubUsername}&locale=${translate}&hide_title=${hideTitle}&layout=compact&card_width=320&langs_count=5&theme=${theme}&hide_border=${hideBorder}`,
      streak: `https://streak-stats.demolab.com?user=${githubUsername}&locale=${translate}&mode=daily&theme=${theme}&hide_border=${hideBorder}&border_radius=5`,
      trophy: `https://github-profile-trophy.vercel.app?username=${githubUsername}&theme=${theme}&column=-1&row=1&margin-w=8&margin-h=8&no-bg=${hideBorder}&no-frame=${hideBorder}`,
    };

    const markdownStats = `
<div align="${align}">
  ${features.stats ? `<img src="${featureUrls.stats}" height="${height}" alt="stats graph" />` : ''}
  ${features.languages ? `<img src="${featureUrls.languages}" height="${height}" alt="languages graph" />` : ''}
  ${features.streak ? `<img src="${featureUrls.streak}" height="${height}" alt="streak graph" />` : ''}
  ${features.trophy ? `<img src="${featureUrls.trophy}" height="${height}" alt="trophy graph" />` : ''}
</div>`;

    setStatsList(markdownStats);
  };

  return (
    <div className='animation-card'>
      <div className='flex justify-start gap-4'>
        <button onClick={() => setActiveSection('layout')} className={`px-4 py-2 ${activeSection === 'layout' ? 'bg-secondary text-white' : 'bg-tert text-primary'} transition-all`}>Layout</button>
        <button onClick={() => setActiveSection('config')} className={`px-4 py-2 ${activeSection === 'config' ? 'bg-secondary text-white' : 'bg-tert text-primary'} transition-all`}>Config</button>
      </div>

      {activeSection === 'layout' && (
        <div className="mt-2">
          <h2 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Layout</h2>
          <div className="mt-4">
            <label htmlFor="align" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Align</label>
            <select
              id="align"
              value={align}
              onChange={(e) => setAlign(e.target.value)}
              className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="direction" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Direction</label>
            <select
              id="direction"
              value={direction}
              onChange={(e) => setDirection(e.target.value)}
              className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
            >
              <option value="row">Row</option>
              <option value="column">Column</option>
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="clearFloat" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Clear Float</label>
            <input
              id="clearFloat"
              type="checkbox"
              checked={clearFloat}
              onChange={() => setClearFloat(!clearFloat)}
              className="ml-2"
            />
          </div>
          <div className="mt-6">
            <label className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Add Features</label>
            <div className="mt-2">
              {Object.keys(features).map((feature) => (
                <div key={feature} className="flex items-center mb-2">
                  <input
                    id={feature}
                    type="checkbox"
                    checked={features[feature]}
                    onChange={() => {
                      const newFeatures = { ...features, [feature]: !features[feature] };
                      setShowStats(newFeatures.stats);
                      setShowLanguages(newFeatures.languages);
                      setShowStreak(newFeatures.streak);
                      setShowTrophy(newFeatures.trophy);
                    }}
                    className="mr-2"
                  />
                  <label htmlFor={feature} className='text-primary dark:text-fourth'>{feature}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'config' && (
        <div className="mt-2">
          <h2 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Config</h2>
          <div className="mt-4">
            <label htmlFor="githubUsername" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>GitHub Username</label>
            <input
              id="githubUsername"
              type="text"
              placeholder="Enter your GitHub username"
              value={githubUsername}
              onChange={(e) => setGithubUsername(e.target.value)}
              className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="customTitle" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Custom Title</label>
            <input
              id="customTitle"
              type="text"
              placeholder="Enter custom title"
              value={customTitle}
              onChange={(e) => setCustomTitle(e.target.value)}
              className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="translate" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Translate</label>
            <select
              id="translate"
              value={translate}
              onChange={(e) => setTranslate(e.target.value)}
              className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
            >
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="es">Spanish</option>
              {/* Add other language options as needed */}
            </select>
          </div>
          <div className="mt-4">
            <label className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Layout Settings</label>
            <div className="mt-2">
              <div className="flex items-center mb-2">
                <input
                  id="showIcons"
                  type="checkbox"
                  checked={showIcons}
                  onChange={() => setShowIcons(!showIcons)}
                  className="mr-2"
                />
                <label htmlFor="showIcons" className='text-primary dark:text-fourth'>Show Icons</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="hideRank"
                  type="checkbox"
                  checked={hideRank}
                  onChange={() => setHideRank(!hideRank)}
                  className="mr-2"
                />
                <label htmlFor="hideRank" className='text-primary dark:text-fourth'>Hide Rank</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="hideTitle"
                  type="checkbox"
                  checked={hideTitle}
                  onChange={() => setHideTitle(!hideTitle)}
                  className="mr-2"
                />
                <label htmlFor="hideTitle" className='text-primary dark:text-fourth'>Hide Title</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="hideBorder"
                  type="checkbox"
                  checked={hideBorder}
                  onChange={() => setHideBorder(!hideBorder)}
                  className="mr-2"
                />
                <label htmlFor="hideBorder" className='text-primary dark:text-fourth'>Hide Border</label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  id="disableAnimations"
                  type="checkbox"
                  checked={disableAnimations}
                  onChange={() => setDisableAnimations(!disableAnimations)}
                  className="mr-2"
                />
                <label htmlFor="disableAnimations" className='text-primary dark:text-fourth'>Disable Animations</label>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="height" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Height</label>
            <input
              id="height"
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="theme" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Theme</label>
            <select
              id="theme"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
            >
              <option value="dracula">Dracula</option>
              <option value="dark">Dark</option>
              <option value="radical">Radical</option>
              <option value="merko">Merko</option>
              <option value="gruvbox">Gruvbox</option>
              <option value="gruvbox_light">Gruvbox Light</option>
              <option value="tokyonight">Tokyonight</option>
              <option value="onedark">Onedark</option>
              <option value="cobalt">Cobalt</option>
              <option value="synthwave">Synthwave</option>
              <option value="highcontrast">Highcontrast</option>
              <option value="dracula">Dracula</option>
              <option value="prussian">Prussian</option>
              <option value="monokai">Monokai</option>
              <option value="vue">Vue</option>
              <option value="vue_dark">Vue Dark</option>
              <option value="shades_of_purple">Shades of Purple</option>
              {/* Add all other themes as needed */}
            </select>
          </div>
        </div>
      )}

      <button
        onClick={handleGenerate}
        className="mt-6 px-4 py-2 bg-tert text-white rounded hover:bg-secondary transition-all dark:bg-fourth"
      >
        Generate Stats
      </button>
    </div>
  );
};

export default Stats;
