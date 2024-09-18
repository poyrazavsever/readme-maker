import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectTemplate } from '../redux/slice/templateSlice';

// Icons
import { FaEye } from "react-icons/fa";


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

          <div className='group w-32 md:w-40 lg:w-48 shadow shadow-slate-900' key={template.id}>

            <button
              onClick={() => handleSelect(template.id)}
              className='w-full h-32 md:h-40 lg:h-48 flex items-center justify-center rounded-t-md bg-slate-900 transition-all border border-slate-800 hover:border-slate-700 hover:bg-slate-700'
            >

              <h3 className='text-5xl font-black tracking-wide text-zinc-200'>{template.templateName}</h3>

            </button>

            <a href={`/preview/${template.id}`} className='flex items-center justify-center gap-2 text-zinc-200 w-full py-4 border border-slate-800 bg-slate-800 rounded-b-md hover:bg-green-800 transition-all'>
              <FaEye />
              <span className='uppercase font-semibold tracking-wide text-xs md:text-base'>Preview</span>
            </a>

          </div>

        ))}
      </div>

    </div>
  );
};

export default TemplateSelector;
