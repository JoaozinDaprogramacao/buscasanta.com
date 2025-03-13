import ChurchCard from '@/components/ChurchCard';
import { MapPin } from 'lucide-react';

const churches = [
  {
    name: 'Catedral Nossa Senhora',
    image: '/igreja1.jpg',
    address: 'Praça da Catedral, 123',
    schedule: 'Missas: Dom 8h, 10h, 18h',
    phone: '(11) 1234-5678',
    slug: 'catedral-nossa-senhora'
  },
  {
    name: 'Igreja São José',
    image: '/igreja2.jpg',
    address: 'Rua São José, 456',
    schedule: 'Missas: Dom 7h30, 19h',
    phone: '(11) 2345-6789',
    slug: 'igreja-sao-jose'
  },
  // Adicione mais igrejas aqui
];

export default function IgrejasPage() {
  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <MapPin className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Nossas Igrejas</h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {churches.map((church) => (
            <ChurchCard key={church.slug} {...church} />
          ))}
        </div>
      </div>
    </main>
  );
} 