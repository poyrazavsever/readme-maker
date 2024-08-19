import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectTemplate } from '../redux/template/templateSlice';

const TemplateSelector = () => {
  const dispatch = useDispatch();
  const selectedTemplate = useSelector((state) => state.template.selectedTemplate);
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
    <div>
      <h2>Select a Template</h2>
      {templates.map((template) => (
        <div key={template.id}>
          <h3>{template.name}</h3>
          <button onClick={() => handleSelect(template.id)}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
};

export default TemplateSelector;
