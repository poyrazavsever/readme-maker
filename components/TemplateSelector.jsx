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

  return (
    <div className='flex flex-col items-start gap-12'>

      <div className='flex flex-col items-start gap-3'>
        <h2 className='text-2xl md:text-3xl lg:text-5xl font-extrabold tracking-wider text-zinc-200'>Select a Template</h2>
        <span className='text-xs md:text-sm lg:text-base text-neutral-600 font-medium'>Choose a template for your profile readme file.</span>
      </div>

      <div className='flex flex-wrap gap-8'>
        {templates.map((template) => (

          <div className='group w-32 md:w-40 lg:w-48 shadow shadow-slate-900 ' key={template.id}>

            <button
              onClick={() => handleSelect(template.id)}
              className='w-full h-32 md:h-40 lg:h-48 flex items-center justify-center rounded-t-md bg-slate-900 transition-all border border-slate-800'
            >

              <div className="flex flex-col items-center justify-center gap-3">

                <h3 className='text-5xl font-black tracking-wide text-zinc-200'>{template.templateName}</h3>

              </div>

            </button>

            <a href={`/preview/${template.id}`} className='flex items-center justify-center gap-2 text-zinc-200 w-full py-4 border border-slate-800 bg-slate-800 rounded-b-md hover:bg-green-800 transition-all'>
              <FaEye className='' />
              <span className='uppercase font-semibold tracking-wide text-xs md:text-base'>Preview</span>
            </a>

          </div>

        ))}
      </div>

    </div>
  );
};

export default TemplateSelector;
