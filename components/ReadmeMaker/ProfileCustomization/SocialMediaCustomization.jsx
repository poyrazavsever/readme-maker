import React, { useState } from 'react';

const SocialMediaCustomization = ({ selectedIcons, setSelectedIcons, markdownList, setMarkdownList }) => {
  const socialMediaIcons = [
    'behance',
    'codepen',
    'discord',
    'facebook',
    'gmail',
    'instagram',
    'linkedin',
    'medium',
    'stackoverflow',
    'telegram',
    'twitch',
    'whatsapp',
    'youtube',
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleIconClick = (icon) => {
    const imageUrl = `https://raw.githubusercontent.com/poyrazavsever/readme-maker/9d52693b604f817a87f6dc0a0d8088c5ed5df807/public/SocialMedia/${icon}/default.svg`;
    const markdownImage = `<img src="${imageUrl}" width="52" height="48"/> alt="${icon} logo"`;

    if (!selectedIcons.includes(icon)) {
      setSelectedIcons([...selectedIcons, icon]);
      setMarkdownList([...markdownList, markdownImage]);
    }
  };
  const filteredIcons = socialMediaIcons.filter((icon) =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  console.log(markdownList)


  return (
    <div>
      <h2 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Social Media</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none my-6 dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100 dark:placeholder:text-fourth"
      />
      <div className="flex flex-wrap gap-4 gap-y-10">
        {filteredIcons.map((icon) => (
          <button onClick={() => handleIconClick(icon)}>
            <img
              key={icon}
              src={`/SocialMedia/${icon}/default.svg`}
              alt={icon}
              className="w-12 p-2 hover:bg-primary dark:hover:bg-fourth transition-all"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaCustomization;
