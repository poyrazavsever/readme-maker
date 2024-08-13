import React, { useState } from 'react';
import { tech_icons } from './techIcon'; // techIcon.jsx dosyasından verileri içe aktar
import classNames from 'classnames';

const Techs = ({savedTechs, setSavedTechs}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTechs, setSelectedTechsLocal] = useState([]);
  const [currentTech, setCurrentTech] = useState(null);
  const [techConfig, setTechConfig] = useState({});
  const [activeSection, setActiveSection] = useState('layout');
  
  // Provider değerinin doğru bir şekilde alınması için bir varsayılan değer belirleyin
  const getProviderPath = (tech, provider) => {
    return tech_icons.find(t => t.name === tech)?.providers[provider]?.path;
  };

  // Arama terimine göre filtrelenmiş ikonları al
  const filteredTechs = tech_icons.filter(tech =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Bir teknolojiyi seçmek veya seçimi kaldırmak için işlev
  const toggleTech = (tech) => {
    if (selectedTechs.includes(tech)) {
      setSelectedTechsLocal(prevSelectedTechs =>
        prevSelectedTechs.filter(item => item !== tech)
      );
      setTechConfig(prevConfig => {
        const { [tech]: _, ...rest } = prevConfig;
        return rest;
      });
    } else {
      setSelectedTechsLocal(prevSelectedTechs => [...prevSelectedTechs, tech]);
      setCurrentTech(tech);
      setActiveSection('config'); // Otomatik olarak 'config' sekmesine geç
    }
  };

  // Teknoloji için provider ve konfigürasyon ayarlarını güncelle
  const updateTechConfig = (key, value) => {
    setTechConfig(prevConfig => ({
      ...prevConfig,
      [currentTech]: {
        ...prevConfig[currentTech],
        [key]: value
      }
    }));
  };

  // Seçilen teknolojilerin formatlı bir şekilde kaydedilmesi
  const saveTechs = () => {
    const formattedTechs = selectedTechs.map(tech => {
      const provider = techConfig[tech]?.provider || 'devicons'; // Default provider
      return {
        name: `${tech}`,
        src: getProviderPath(tech, provider),
        alt: `${tech} logo`,
        md: `<img src=${getProviderPath(tech, provider)} alt="${tech} logo" height="40" />`,
      };
    });
    setSavedTechs(formattedTechs);
  };

  // Seçilen teknolojilerin gösterilmesi için HTML oluştur
  const renderSelectedTechs = () => {
    return (
      <div className="flex flex-wrap items-center gap-4 mt-4">
        {selectedTechs.map((tech) => {
          const techData = tech_icons.find(t => t.name === tech);
          return techData && (
            <div key={tech} className="flex items-center gap-2">
              <img
                src={techData.providers[techConfig[tech]?.provider || 'devicons']?.path}
                height="40"
                alt={`${tech} logo`}
                className={classNames({
                  'w-12': techConfig[tech]?.provider === 'devicons' || techConfig[tech]?.provider === 'simple_icons',
                  'w-36': techConfig[tech]?.provider !== 'devicons' && techConfig[tech]?.provider !== 'simple_icons' || !techConfig[tech]?.provider
                })}
              />
              <button
                onClick={() => toggleTech(tech)}
                className="ml-2 px-2 py-1 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    );
  };

  // Seçilen teknolojiye göre konfigürasyon bölümünü render et
  const renderTechConfig = () => {
    if (!currentTech) return null;
    const tech = tech_icons.find(t => t.name === currentTech);
    return (
      <div className="mt-6">
        <label htmlFor="provider" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth mt-4'>Provider</label>
        <select
          id="provider"
          value={techConfig[currentTech]?.provider || 'devicons'}
          onChange={(e) => updateTechConfig('provider', e.target.value)}
          className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
        >
          {tech_icons.find(t => t.name === currentTech)?.providers.simple_icons && <option value="simple_icons">Simple Icons</option>}
          {tech_icons.find(t => t.name === currentTech)?.providers.devicons && <option value="devicons">Dev Icons</option>}
          {tech_icons.find(t => t.name === currentTech)?.providers.shields && <option value="shields">Shields</option>}
        </select>

        <label htmlFor="align" className='text-xs uppercase tracking-wide font-medium text-primary dark:text-fourth mt-4'>Alignment</label>
        <select
          id="align"
          value={techConfig[currentTech]?.align || 'left'}
          onChange={(e) => updateTechConfig('align', e.target.value)}
          className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100"
        >
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>
      </div>
    );
  };

  return (
    <div>
      <h1 className='py-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Tech Icons</h1>

      {/* Sekme Butonları */}
      <div className='flex justify-start gap-4'>
        <button onClick={() => setActiveSection('layout')} className={`px-4 py-2 ${activeSection === 'layout' ? 'bg-secondary text-white' : 'bg-tert text-primary'} transition-all`}>Layout</button>
        <button onClick={() => setActiveSection('config')} className={`px-4 py-2 ${activeSection === 'config' ? 'bg-secondary text-white' : 'bg-tert text-primary'} transition-all`}>Config</button>
      </div>

      {activeSection === 'layout' && (
        <>
          {/* Arama çubuğu */}
          <input
            type="text"
            placeholder="Search technologies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-3 py-2 w-full rounded bg-tert bg-opacity-50 text-primary focus:outline-none my-6 dark:bg-zinc-200 dark:shadow-md dark:text-fourth dark:opacity-100 dark:placeholder:text-fourth"
          />

          {/* Seçim Bölümü */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-7 my-8">
            {filteredTechs.map((tech) => (
              tech.providers.devicons && (
                <button
                  key={tech.name}
                  className={`cursor-pointer w-10 ${selectedTechs.includes(tech.name) ? 'border-2 border-blue-500' : ''}`}
                  onClick={() => toggleTech(tech.name)}
                >
                  <img
                    src={tech.providers.devicons?.path || tech.providers.simple_icons?.path || tech.providers.shields?.path}
                    alt={tech.name}
                    className="w-full"
                  />
                </button>
              )
            ))}
          </div>

        </>
      )}

      {activeSection === 'config' && (
        <>
          {/* Konfigürasyon Bölümü */}
          {renderTechConfig()}

          {/* Kaydedilen Teknolojiler */}
          <div className="mt-6">
            {savedTechs.length > 0 && (
              <div align={techConfig[currentTech]?.align || 'left'}>
                {savedTechs.map((tech, index) => (
                  <React.Fragment key={index}>
                    <img src={tech.src} alt={tech.alt} className='w-12' />
                    {index < savedTechs.length - 1 && <img width="12" className='w-12' />}
                  </React.Fragment>
                ))}
              </div>
            )}

            {/* Seçilen Teknolojiler */}
            {renderSelectedTechs()}

            {/* Kaydet Butonu */}
            <button
              onClick={saveTechs}
              className="px-4 py-2 bg-blue-500 text-white rounded mt-4"
            >
              Kaydet
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Techs;
