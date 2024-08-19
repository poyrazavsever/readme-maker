import TemplateSelector from '../components/TemplateSelector';

import TextAdded from '@/components/Text/TextAdded';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 p-4">

      <div className='m-8'>
        <TemplateSelector />
      </div>

      <TextAdded />

    </div>
  );
}
