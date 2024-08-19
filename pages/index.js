import TemplateSelector from '../components/TemplateSelector';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the README Maker</h1>
      <TemplateSelector />
    </div>
  );
}
