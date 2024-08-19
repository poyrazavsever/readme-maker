import TemplateSelector from '../components/TemplateSelector';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';

import SelectedSocialMedia from '@/components/SelectedSocialMedia';
import NameAdded from '@/components/Text/NameAdded';

export default function Home() {

  return (
    <div className="min-h-screen bg-gray-950 p-4">

      <Toaster />

      <div className='m-8'>
        <TemplateSelector />
      </div>      

    </div>
  );
}
