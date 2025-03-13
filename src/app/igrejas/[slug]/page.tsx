import Image from 'next/image';
import { Clock, MapPin, Phone, Calendar } from 'lucide-react';

interface ChurchPageProps {
  params: {
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function ChurchPage({ params, searchParams }: ChurchPageProps) {
  // Usando o params.slug para buscar os dados da igreja
  const church = {
    name: params.slug === 'catedral-nossa-senhora' ? 'Catedral Nossa Senhora' : 'Igreja São José',
    image: '/images/churches/catedral.jpg',
    address: 'Praça da Catedral, 123',
    schedule: 'Missas: Dom 8h, 10h, 18h',
    phone: '(11) 1234-5678',
    description: 'Uma bela catedral histórica...',
    events: [
      {
        title: 'Missa Solene',
        date: '25/12/2024',
        time: '10:00'
      }
    ]
  };

  return (
    <main className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-96">
          <Image
            src={church.image}
            alt={church.name}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{church.name}</h1>
          
          <div className="grid gap-4 mb-8">
            <div className="flex items-center gap-2">
              <MapPin size={20} />
              <span>{church.address}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={20} />
              <span>{church.schedule}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={20} />
              <span>{church.phone}</span>
            </div>
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">Sobre a Igreja</h2>
            <p>{church.description}</p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Próximos Eventos</h2>
            <div className="grid gap-4">
              {church.events.map((event) => (
                <div key={event.title} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <Calendar size={24} className="text-[#1a237e]" />
                  <div>
                    <h3 className="font-semibold">{event.title}</h3>
                    <p className="text-gray-600">{event.date} às {event.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 