import TemplateSelector from '../components/TemplateSelector';
import { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';


export default function Home() {

  const selectedSelector = useSelector((state) => state.template.selectedTemplate)

  console.log(selectedSelector)

  return (
    <div className="min-h-screen bg-gray-950 p-4">

      <Toaster />

      <div className='m-8'>
        <TemplateSelector />
      </div>      

    </div>
  );
}
