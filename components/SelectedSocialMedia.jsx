import React, { useState } from 'react';

const socialMediaList = [
  'behance', 'codepen', 'discord', 'facebook', 'gmail',
  'instagram', 'linkedin', 'medium', 'stackoverflow', 
  'telegram', 'twitch', 'twitter', 'whatsapp', 'youtube'
];

const SelectedSocialMedia = () => {
  const [selectedIcons, setSelectedIcons] = useState([]);
  const [iconLinks, setIconLinks] = useState({});

  const handleIconClick = (icon) => {
    if (!selectedIcons.includes(icon)) {
      setSelectedIcons([...selectedIcons, icon]);
    }
  };

  const handleLinkChange = (icon, link) => {
    setIconLinks({
      ...iconLinks,
      [icon]: link
    });
  };

  return (
    <div className="flex">
      {/* Sağ Taraf: Sosyal Medya İkonları */}
      <div className="w-1/2 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Sosyal Medya İkonları</h2>
        <div className="grid grid-cols-3 gap-4">
          {socialMediaList.map(icon => (
            <div
              key={icon}
              className="cursor-pointer"
              onClick={() => handleIconClick(icon)}
            >
              <img
                src={`/SocialMedia/${icon}/default.svg`}
                alt={icon}
                className="w-12 h-12"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Sol Taraf: Seçilen Sosyal Medya İkonları ve Linkler */}
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Seçilen Sosyal Medya İkonları</h2>
        {selectedIcons.map(icon => (
          <div key={icon} className="flex items-center mb-4">
            <img
              src={`/SocialMedia/${icon}/default.svg`}
              alt={icon}
              className="w-12 h-12 mr-4"
            />
            <input
              type="text"
              placeholder={`Link for ${icon}`}
              value={iconLinks[icon] || ''}
              onChange={(e) => handleLinkChange(icon, e.target.value)}
              className="border p-2 rounded"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedSocialMedia;
