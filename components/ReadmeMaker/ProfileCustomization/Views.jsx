import React, { useState } from 'react';

const Views = ({ setViewMarkdown }) => {
  const [username, setUsername] = useState('');
  const [customText, setCustomText] = useState('');
  const [alignment, setAlignment] = useState('left'); // default alignment

  const handleAddView = () => {
    let markdown = `<img src="https://visitor-badge.laobi.icu/badge?page_id=${username}.${username}&" />`;

    if (customText) {
      markdown = `<img src="https://visitor-badge.laobi.icu/badge?page_id=${username}.${username}&left_text=${customText}" />`;
    }

    if (alignment === 'center') {
      markdown = `<p align="center">${markdown}</p>`;
    } else if (alignment === 'right') {
      markdown = `<p align="right">${markdown}</p>`;
    }

    setViewMarkdown(markdown);
  };

  return (
    <div>
      <h2 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Add View Badge</h2>

      <div className='flex flex-col items-start gap-3 mt-6'>
        <div>
          <label className='py-4'>
            <span className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>GitHub Username:</span>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='w-full mt-2 px-2 py-2 rounded-md bg-tert dark:bg-zinc-300 shadow-md focus:outline-none text-primary dark:text-fourth'
            />
          </label>
        </div>

        <div>
          <label>
            <span className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Custom Text:</span>
            <input
              type="text"
              value={customText}
              onChange={(e) => setCustomText(e.target.value)}
              className='w-full mt-2 px-2 py-2 rounded-md bg-tert dark:bg-zinc-300 shadow-md focus:outline-none text-primary dark:text-fourth'
            />
          </label>
        </div>
        <div>
          <label>
            <span className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>Alignment :</span>
            <select
              value={alignment}
              onChange={(e) => setAlignment(e.target.value)}
              className='w-full mt-2 px-2 py-2 rounded-md bg-tert dark:bg-zinc-300 shadow-md focus:outline-none text-primary dark:text-fourth'
            >
              <option value="left">Left</option>
              <option value="center">Center</option>
              <option value="right">Right</option>
            </select>
          </label>
        </div>
        <button onClick={handleAddView} className='w-full text-center py-2 bg-primary text-fourth dark:bg-primary dark:text-primary hover:bg-secondary transition-all rounded-md mt-4'>Add View Badge</button>
      </div>
    </div>
  );
};

export default Views;
