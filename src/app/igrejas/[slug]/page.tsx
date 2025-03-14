import Image from 'next/image';
import { Clock, MapPin, Phone, Calendar } from 'lucide-react';
import { Metadata } from 'next';
import { churches } from '@/data/churches';
import { notFound } from 'next/navigation';

// Gera as rotas estáticas no build
export async function generateStaticParams() {
  return churches.map((church) => ({
    slug: church.slug,
  }));
}

// Gera os metadados dinâmicos
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const church = churches.find((c) => c.slug === slug);

  if (!church) {
    return {
      title: 'Igreja não encontrada',
    };
  }

  return {
    title: `${church.name} - Busca Santa`,
    description: church.description,
  };
}

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

export default async function ChurchPage({ params }: PageProps) {
  const { slug } = await params;
  const church = churches.find((church) => church.slug === slug);

  if (!church) {
    notFound();
  }

  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Imagem da Igreja */}
          <div className="relative h-[400px]">
            <Image
              src={church.image}
              alt={church.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Informações da Igreja */}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{church.name}</h1>

            <div className="grid gap-4 mb-8">
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={24} />
                <span className="text-gray-700">{church.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="text-blue-600" size={24} />
                <span className="text-gray-700">{church.schedule}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={24} />
                <span className="text-gray-700">{church.phone}</span>
              </div>
            </div>

            {/* Descrição */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sobre a Igreja</h2>
              <p className="text-gray-600 leading-relaxed">{church.description}</p>
            </div>

            {/* Eventos */}
            {church.events && church.events.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Próximos Eventos</h2>
                <div className="grid gap-4">
                  {church.events.map((event) => (
                    <div 
                      key={`${event.title}-${event.date}`}
                      className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg"
                    >
                      <Calendar className="text-blue-600 mt-1" size={24} />
                      <div>
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <p className="text-gray-600">
                          {event.date} às {event.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
} 