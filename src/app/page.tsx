import Image from 'next/image';
import Link from 'next/link';
import { Building2, Calendar, Clock, ArrowRight } from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    icon: Building2,
    title: 'Nossas Igrejas',
    description: 'Conheça todas as igrejas católicas da cidade e suas histórias.',
    linkText: 'Ver Igrejas',
    href: '/igrejas'
  },
  {
    icon: Calendar,
    title: 'Eventos e Festas',
    description: 'Fique por dentro de todos os eventos e celebrações especiais.',
    linkText: 'Ver Eventos',
    href: '/eventos'
  },
  {
    icon: Clock,
    title: 'Horários de Confissão',
    description: 'Encontre os horários de confissão em todas as igrejas.',
    linkText: 'Ver Horários',
    href: '/confissoes'
  }
];

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* Hero Section */}
      <section className="w-full flex items-center justify-center px-4">
        <div className='relative w-full md:w-2/3 h-[400px] md:h-[600px] flex items-center mt-3'>
          <div className="absolute inset-0">
            <Image
              src="/principal.png"
              alt="Igreja Católica"
              fill
              className="object-cover rounded-xl md:rounded-3xl"
              priority
            />
            <div className="absolute inset-0 bg-black opacity-60 rounded-xl md:rounded-3xl" />
          </div>
          <div className="relative container mx-auto px-4 text-center text-white">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
              Bem-vindo à<br />
              Comunidade Católica
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 md:mb-12">
              Encontre informações sobre todas as igrejas católicas da
              nossa cidade em um só lugar.
            </p>
            <Link
              href="/igrejas"
              className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
            >
              Encontrar uma Igreja
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Cards */}
      <section className="py-12 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <FeatureCard key={feature.href} {...feature} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
