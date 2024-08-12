import React, { useState } from 'react';
import {tech_icons} from './techIcon'; // techIcon.jsx dosyasından verileri içe aktar

const Techs = ({setSelectedTechs}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Arama terimine göre filtrelenmiş ikonları al
  const filteredTechs = tech_icons.filter(tech =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Bir tekniği seçmek veya seçimi kaldırmak için işlev
  const toggleTech = (tech) => {
    setSelectedTechs((prevSelectedTechs) =>
      prevSelectedTechs.includes(tech)
        ? prevSelectedTechs.filter((item) => item !== tech)
        : [...prevSelectedTechs, tech]
    );
  };

  return (
    <div>

      <h1 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Tech Icons</h1>

      {/* Arama çubuğu */}
      <input
        type="text"
        placeholder="Search technologies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none my-6"

      />

      <div className="flex flex-wrap items-center gap-x-4 gap-y-7 my-8">
        {filteredTechs.map((tech) => (
          <button
            key={tech.name}
            className="cursor-pointer w-10"
            onClick={() => toggleTech(tech.name)}
            style={{ borderColor: tech.color }}
          >
            <img
              src={tech.providers.devicons?.path || tech.providers.skill_icons?.path || tech.providers.simple_icons?.path || tech.providers.shields?.path}
              alt={tech.name}
              className="w-full"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Techs;
