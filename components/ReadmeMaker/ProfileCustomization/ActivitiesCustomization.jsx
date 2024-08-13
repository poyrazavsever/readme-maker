import React, { useState } from 'react';

const ActivitiesCustomization = ({ setActivitiesList }) => {
  const [username, setUsername] = useState('');
  const [align, setAlign] = useState('center');
  const [postLimit, setPostLimit] = useState(4);
  const [theme, setTheme] = useState('dark');

  const themes = [
    'dark', 'radical', 'Merko', 'Gruvbox', 'Gruvbox Light', 'Tokyonight', 'onedark',
    'cobalt', 'synthwave', 'highcontrast', 'dracula', 'prussian', 'monokai', 'vue',
    'vue dark', 'Shades of purple'
  ];

  const handleAddActivity = () => {
    if (username) {
      const markdownActivity = `
<div align="${align}">
  <img 
    src="https://github-read-medium-git-main.pahlevikun.vercel.app/latest?limit=${postLimit}&username=@${username}&theme=${theme}" 
    alt="Layout with last medium posts" 
  />
</div>`;

      setActivitiesList(markdownActivity);

      // Clear inputs after adding
      setUsername('');
      setAlign('center');
      setPostLimit(4);
      setTheme('dark');
    }
  };

  return (
    <div className='animation-card'>
      <h2 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Activities Customization</h2>
      <div className="mt-4">
        <label htmlFor="username" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Medium Username (@username)</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Medium username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none my-2 dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100 dark:placeholder:text-fourth"
        />
      </div>
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
        <label htmlFor="post-limit" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Post Limit</label>
        <input
          id="post-limit"
          type="number"
          placeholder="Enter number of posts"
          value={postLimit}
          onChange={(e) => setPostLimit(e.target.value)}
          className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none my-2 dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
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
          {themes.map((themeOption) => (
            <option key={themeOption} value={themeOption}>
              {themeOption}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={handleAddActivity}
        className="mt-6 px-4 py-2 bg-tert text-white rounded hover:bg-secondary transition-all dark:bg-fourth"
      >
        Add Activity
      </button>
    </div>
  );
};

export default ActivitiesCustomization;
