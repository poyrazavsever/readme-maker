import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectTemplate } from '../redux/slice/templateSlice';
import { motion } from 'framer-motion';

const TemplateSelector = () => {

  const dispatch = useDispatch();

  // templates ve aktif kategori için state tanımlamaları
  const [templates, setTemplates] = useState([]);
  const [activeCategory, setActiveCategory] = useState(''); // Aktif kategori tutulacak

  useEffect(() => {
    fetch('/assets/templates.json')
      .then(response => response.json())
      .then(data => setTemplates(data))
      .catch(error => console.error('Error loading templates:', error));
  }, []);

  const handleSelect = (id) => {
    dispatch(selectTemplate(id));
  };

  const categories = [
    "All", // Tüm şablonları göstermek için bir 'All' seçeneği ekliyoruz.
    "Code Mode",
    "Minimalistic",
    "Badges",
    "Retro",
  ];

  // Aktif kategoriye göre template'leri filtrele
  const filteredTemplates = activeCategory === "All" || activeCategory === ""
    ? templates
    : templates.filter(template => template.category === activeCategory);

  const btnStyle = 'flex items-center justify-center gap-3 text-zinc-50 w-1/2 py-4 px-2 transition-all uppercase font-semibold tracking-wide text-xs md:text-base';

  return (
    <div className='relative flex flex-col items-start gap-12'>

      <div className='flex flex-col items-start gap-6 z-20'>

        <div className='flex flex-col items-start gap-3'>
          <div className='flex items-end gap-8'>
            <h2 className='text-2xl md:text-3xl lg:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400'>Readme Maker</h2>
            <span className='py-2 px-4 font-semibold bg-gradient-to-b from-emerald-600 to-emerald-900 rounded-full bg-opacity-30 border border-emerald-400 text-emerald-50'>v2.1</span>
          </div>
          <p className='text-base md:text-lg lg:text-2xl text-neutral-100 font-medium'>Choose a template for your profile readme file.</p>
        </div>

        {/* Kategoriler */}
        <div className='flex items-center gap-4'>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)} // Kategori seçildiğinde state güncellenir
              className={`py-2 px-6 text-lg font-semibold rounded-full bg-opacity-30 border  text-emerald-50 transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-b from-cyan-600 to-cyan-900 border-cyan-400' // Aktif kategori stili
                  : 'bg-gradient-to-b from-emerald-500 to-emerald-700 border-emerald-400'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

      </div>

      {/* Filtrelenmiş Template'ler */}
      <div className='flex flex-wrap gap-8 z-20'>
        {filteredTemplates.map((template) => (
          <div className='relative w-48 md:w-40 lg:w-64 shadow border border-emerald-400 overflow-hidden' key={template.id}>
            <motion.div 
              whileHover={{ y: -70 }}
              className='relative w-full h-full'
              transition={{ type: "spring", stiffness: 300, damping: 70 }}
            >
              <img src={`/templateImage/${template.image}`} alt={`Banner for ${template.id}`} className='w-full h-full object-cover' />
            </motion.div>

            <div className='flex items-center justify-between w-full absolute bottom-0'>
              
              {/* Preview butonu */}
              <motion.a
                href={`/preview/${template.id}`}
                className={`${btnStyle} bg-gradient-to-b from-emerald-400 to-emerald-700`}
                whileHover={{
                  background: "linear-gradient(to right, #00f260, #0575E6)", // Renk değişimi
                }}
                transition={{ duration: 0.3 }}
              >
                Preview
              </motion.a>

              {/* Select butonu */}
              <motion.button
                onClick={() => handleSelect(template.id)}
                className={`${btnStyle} bg-gradient-to-b from-cyan-400 to-cyan-700`}
                whileHover={{
                  background: "linear-gradient(to right, #6a11cb, #2575fc)",  // Renk değişimi
                }}
                transition={{ duration: 0.3 }}
              >
                Select
              </motion.button>
            </div>

          </div>
        ))}
      </div>

      {/* Dekoratif arka plan */}
      <div className='absolute right-1/2 w-64 h-64 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-full blur-3xl opacity-20' />

    </div>
  );
};

export default TemplateSelector;