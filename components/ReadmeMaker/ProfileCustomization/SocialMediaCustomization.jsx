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
  const [selectedIcon, setSelectedIcon] = useState('');
  const [link, setLink] = useState('');
  const [section, setSection] = useState(false);
  const [selectedIconsWithLinks, setSelectedIconsWithLinks] = useState([]);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    setSection(true); // İkon seçildiğinde link ekleme bölümüne geç
  };

  const handleAddLink = () => {
    if (selectedIcon && link) {
      const imageUrl = `https://raw.githubusercontent.com/poyrazavsever/readme-maker/9d52693b604f817a87f6dc0a0d8088c5ed5df807/public/SocialMedia/${selectedIcon}/default.svg`;
      const markdownLink = `<a href="${link}"><img src="${imageUrl}" width="52" height="48" alt="${selectedIcon} logo"/></a>`;

      if (!selectedIcons.includes(selectedIcon)) {
        setSelectedIcons([...selectedIcons, selectedIcon]);
        setMarkdownList([...markdownList, markdownLink]);
        setSelectedIconsWithLinks([...selectedIconsWithLinks, { icon: selectedIcon, link }]);
      }

      // Alanları temizle
      setSelectedIcon('');
      setLink('');
      setSection(false); // Link ekledikten sonra ikon seçme bölümüne geri dön
    }
  };

  const filteredIcons = socialMediaIcons.filter((icon) =>
    icon.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <span className='relative w-[200px] h-12 rounded-sm'>
        <input
          type="checkbox"
          id='switcher'
          className='appearance-none w-[200px] h-12 rounded-sm bg-fourth dark:bg-primary outline-none before:z-20 before:absolute before:top-1/2 before:-translate-y-1/2 before:font-medium after:z-20 after:absolute after:top-1/2 after:-translate-y-1/2 after:font-medium  before:content-["Select"] before:left-5 after:content-["Edit"] after:right-5 cursor-pointer before:text-primary dark:before:text-fourth checked:before:text-tert dark:checked:before:text-zinc-300 after:text-tert dark:after:text-zinc-300 checked:after:text-primary dark:checked:after:text-fourth'
          checked={section}
          onChange={() => setSection(!section)}
        />
      </span>

      {!section && (
        <div className='animation-card'>
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
              <button key={icon} onClick={() => handleIconClick(icon)}>
                <img
                  src={`/SocialMedia/${icon}/default.svg`}
                  alt={icon}
                  className={`w-12 p-2 hover:bg-primary dark:hover:bg-fourth transition-all ${selectedIcons.includes(icon) ? 'bg-primary dark:bg-fourth' : ''
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {section && (
        <div className="mt-6 animation-card">
          <h3 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Add Link</h3>
          {selectedIcon && (
            <div className="mt-4">
              <label htmlFor="url" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth'>{selectedIcon}</label>
              <input
                id='url'
                type="url"
                placeholder="Enter URL"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none my-2 dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100 dark:placeholder:text-fourth"
              />
              <button
                onClick={handleAddLink}
                className="mt-2 px-4 py-2 bg-tert text-white rounded hover:bg-secondary transition-all dark:bg-fourth"
              >
                Add Link
              </button>
            </div>
          )}

          <div className="mt-6">
            <h4 className='text-sm uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Selected Social Media Icons</h4>
            <div className="flex flex-wrap gap-6 mt-4">
              {selectedIconsWithLinks.map(({ icon, link }, index) => (
                <div key={index}>
                  <img
                    src={`/SocialMedia/${icon}/default.svg`}
                    alt={icon}
                    className="w-8"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaCustomization;
