import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectTemplate } from '../redux/slice/templateSlice';



const TemplateSelector = () => {

  const dispatch = useDispatch();

  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // JSON dosyasını import edip state'e yükle
    fetch('/assets/templates.json')
      .then(response => response.json())
      .then(data => setTemplates(data))
      .catch(error => console.error('Error loading templates:', error));
  }, []);

  const handleSelect = (id) => {
    dispatch(selectTemplate(id));
  };

  const categories = [
    "Code Mode",
    "Minimalistic",
    "Badges",
    "Retro",
  ]

  const btnStyle = 'flex items-center justify-center gap-3 text-zinc-50 w-1/2 py-4 px-2 transition-all uppercase font-semibold tracking-wide text-xs md:text-base'


  return (
    <div className='flex flex-col items-start gap-12'>

      <div className='flex flex-col items-start gap-6'>

        {/* Exp web app */}

        <div className='flex flex-col items-start gap-3'>

          <div className='flex items-end gap-8'>
            <h2 className='text-2xl md:text-3xl lg:text-6xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400'>Readme Maker</h2>
            <span className='py-2 px-4 font-semibold bg-gradient-to-b from-emerald-600 to-emerald-900 rounded-full bg-opacity-30 border border-emerald-400 text-emerald-50'>v2.1</span>
          </div>

          <p className='text-base md:text-lg lg:text-2xl text-neutral-100 font-medium'>Choose a template for your profile readme file.</p>

        </div>

        {/* Categories  */}

        <div className='flex items-center gap-4'>
          {categories.map((category) => (
            <button key={category} className='py-2 px-6 text-lg font-semibold bg-gradient-to-b from-emerald-600 to-emerald-900 rounded-full bg-opacity-30 border border-emerald-400 text-emerald-50'>{category}</button>
          ))}
        </div>

      </div>

      <div className='flex flex-wrap gap-8'>
        {templates.map((template) => (

          <div className='group w-48 md:w-40 lg:w-64 shadow border border-emerald-400' key={template.id}>

            <div>
              <img src={`/templateImage/${template.image}`} alt={`Banner for ${template.id}`} className='w-full h-full transition-all hover:scale-105'/>
            </div>


            <div className='flex items-center justify-between w-full'>
              <a href={`/preview/${template.id}`} className={`${btnStyle} bg-gradient-to-b from-emerald-400 to-emerald-700`}>
                Preview
              </a>

              <button
                onClick={() => handleSelect(template.id)}
                className={`${btnStyle} bg-gradient-to-b from-cyan-400 to-cyan-700`}>
                Select
              </button>
            </div>

          </div>

        ))}
      </div>

    </div>
  );
};

export default TemplateSelector;
