import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tech_icons } from '../public/assets/tech-icons'; // Veriyi içe aktarıyoruz
import { addedTech, deletedTech } from '../redux/slice/informationSlice'; // Redux slice'ını içe aktarıyoruz

const defaultIcon = '/path/to/default/icon.png'; // Varsayılan görselin yolu

const SelectedTechs = () => {
  const dispatch = useDispatch();
  const selectedTechs = useSelector((state) => state.information.techs); // Redux'tan seçilen teknolojileri alıyoruz
  const [searchTerm, setSearchTerm] = useState('');

  // Teknoloji seçme işlemi
  const handleSelectTech = (tech, provider) => {
    const techToAdd = { ...tech, provider };
    dispatch(addedTech(techToAdd));
  };

  // Teknolojiyi kaldırma işlemi
  const handleRemoveTech = (techToRemove) => {
    dispatch(deletedTech(techToRemove));
  };

  // Arama
  const filteredTechs = tech_icons.filter(tech =>
    tech.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tech.alias.some(alias => alias.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="flex flex-col md:flex-row">

      {/* Sol taraf - Tüm teknolojiler */}
      <div className="w-full md:w-1/2 py-4 border-r border-slate-600 overflow-y-auto pr-4 md:pr-12">
        <h2 className="text-xl font-semibold tracking-wider text-slate-200 mb-4">All Technologies</h2>

        <input
          type="text"
          placeholder="Search Technology..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 focus:outline-none py-2 px-4 rounded bg-slate-700 text-slate-100 w-full placeholder:text-slate-500"
        />

        <div className='flex flex-wrap gap-x-12'>
          {filteredTechs.length === 0 ? (
            <p className='text-slate-500'>The technology you are looking for could not be found.</p>
          ) : (
            filteredTechs.map((tech) => (
              <div key={tech.name} className="py-6 flex flex-col items-start">
                <h3 className="font-medium text-slate-400">{tech.name}</h3>
                <div className="flex gap-2 mt-2">
                  {tech.available_providers?.map(provider => (
                    <button
                      key={provider}
                      onClick={() => handleSelectTech(tech, provider)}
                      className="bg-slate-800 rounded p-2 hover:bg-slate-600 hover:-translate-y-1 transition-all"
                    >
                      <img 
                        src={tech.providers[provider]?.path || defaultIcon} 
                        alt={tech.name} 
                        className="w-16 h-16" 
                      />
                    </button>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Sağ taraf - Seçilen teknolojiler */}
      <div className="w-full md:w-1/2 py-4 pl-4 md:pl-12 overflow-y-auto">
        <h2 className="text-xl font-semibold tracking-wider text-slate-200 mb-4">
          Selected Technologies
        </h2>

        {selectedTechs.length === 0 ? (
          <p className='text-slate-500 text-sm font-medium'>The technology has not been selected yet.</p>
        ) : (
          selectedTechs.map((tech) => (
            <div key={`${tech.name}-${tech.provider}`} className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                <img 
                  src={tech.providers[tech.provider]?.path || defaultIcon} 
                  alt={tech.name} 
                  className="w-16 h-16 mr-2" 
                />
                <span className='text-slate-200 text-sm font-medium'>{tech.name} ({tech.provider})</span>
              </div>
              <button
                onClick={() => handleRemoveTech(tech)}
                className="text-red-100 bg-red-900 hover:bg-red-700 transition py-2 px-4 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

    </div>
  );
};

export default SelectedTechs;
