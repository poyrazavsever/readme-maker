import TemplateSelector from '../components/TemplateSelector';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

// Templates
import Template1 from '@/components/templates/Template1/Template1';
import Template2 from '@/components/templates/Template2/Template2';
import Template3 from '@/components/templates/Template3/Template3';
import Template4 from '@/components/templates/Template4/Template4';

export default function Home() {

  const selectedTemplate = useSelector((state) => state.template.selectedTemplate)

  console.log(selectedTemplate)

  return (
    <div className="h-screen bg-zinc-950 p-4">

      <Toaster />

      {!selectedTemplate && 
        <div className='m-8'>
          <TemplateSelector />
        </div>
    }

      {selectedTemplate == 1 && 
        <Template1 />
      }
      {selectedTemplate == 2 && 
        <Template2 />
      }
      {selectedTemplate == 3 && 
        <Template3 />
      }
      {selectedTemplate == 4 && 
        <Template4 />
      }
      
    </div>
  );
}
