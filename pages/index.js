import TemplateSelector from '../components/TemplateSelector';
import { Toaster } from 'react-hot-toast';

import GithubAdded from '@/components/Text/GithubAdded';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 p-4">

      <Toaster />

      <div className='m-8'>
        <TemplateSelector />
      </div>

      <GithubAdded />

    </div>
  );
}
