import TemplateSelector from '../components/TemplateSelector';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

// Templates
import Template1 from '@/components/templates/Template1/Template1';

export default function Home() {

  const selectedTemplate = useSelector((state) => state.template.selectedTemplate)

  console.log(selectedTemplate)

  return (
    <div className="h-screen bg-gray-950 p-4">

      <Toaster />

      {!selectedTemplate && 
        <div className='m-8'>
          <TemplateSelector />
        </div>
    }

      {selectedTemplate == 1 && 
        <Template1 />
      }

    </div>
  );
}
