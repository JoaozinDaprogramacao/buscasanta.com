'use client';

import { useEffect, useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import Image from 'next/image';

type Church = {
  id: number;
  name: string;
  image: string;
  address: string;
  schedule: string;
  phone: string;
  description: string;
}

export default function IgrejasPage() {
  const [churches, setChurches] = useState<Church[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchChurches() {
      try {
        const response = await fetch('/api/churches');
        const data = await response.json();
        setChurches(data);
      } catch (error) {
        console.error('Erro ao carregar igrejas:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchChurches();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Igrejas Católicas</h1>
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px] bg-slate-50">
            <div className="text-gray-600">Carregando...</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {churches.map((church) => (
              <div key={church.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={church.image}
                    alt={church.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{church.name}</h2>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 mt-0.5" />
                      <span>{church.address}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Clock className="w-5 h-5 mt-0.5" />
                      <span>{church.schedule}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <Phone className="w-5 h-5 mt-0.5" />
                      <span>{church.phone}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 