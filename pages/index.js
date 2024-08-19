import TemplateSelector from '../components/TemplateSelector';

import NameAdded from '@/components/Text/NameAdded';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 p-4">

      <div className='m-8'>
        <TemplateSelector />
      </div>

      <NameAdded />

    </div>
  );
}
