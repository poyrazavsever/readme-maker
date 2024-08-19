import TemplateSelector from '../components/TemplateSelector';
import { Toaster } from 'react-hot-toast';

import SelectedTechs from '@/components/SelectedTechs';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 p-4">

      <Toaster />

      <div className='m-8'>
        <TemplateSelector />
      </div>

      <div className='m-8'>
        <SelectedTechs />
      </div>

      

    </div>
  );
}
