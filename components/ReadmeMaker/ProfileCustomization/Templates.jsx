import { useEffect, useState } from 'react';

const Templates = ({setTemplate}) => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    // JSON dosyasını fetch ile almak
    const fetchTemplates = async () => {
      const response = await fetch('templates.json');
      const data = await response.json();
      setTemplates(data);
    };

    fetchTemplates();
  }, []);

  return (
    <div>
      <h1 className='pt-6 uppercase tracking-wider font-semibold text-primary dark:text-fourth'>Templates</h1>
      
      <div className='flex flex-wrap items-center gap-3 pt-4'>
        {templates.map((template, index) => (
          <button key={index} className='w-full px-8 py-10 rounded-md bg-tert text-primary text-lg tracking-wider font-semibold hover:bg-secondary transition-all' onClick={() => setTemplate(template.content)}>
            {template.id}
          </button>
        ))}
      </div>

    </div>
  );
};

export default Templates;
