import Image from 'next/image';
import { Clock, MapPin, Phone, Calendar } from 'lucide-react';
import { Metadata } from 'next';
import { churches } from '@/data/churches';

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Igreja ${params.slug.replace(/-/g, ' ')}`,
  }
}

export default function ChurchPage({ params }: Props) {
  const church = churches.find(c => c.slug === params.slug) || {
    name: 'Igreja não encontrada',
    image: '/igreja1.jpg',
    address: 'Endereço não disponível',
    schedule: 'Horários não disponíveis',
    phone: 'Telefone não disponível',
    description: 'Informações não disponíveis',
    events: []
  };

  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto">
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
                    <Calendar size={24} className="text-blue-600" />
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
      </div>
    </main>
  );
} 