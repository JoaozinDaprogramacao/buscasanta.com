'use client';

import { useEffect, useState } from 'react';
import { Clock, MapPin } from 'lucide-react';

type Confession = {
  id: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  notes?: string;
  church: {
    name: string;
    address: string;
  };
}

export default function ConfissoesPage() {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchConfessions() {
      try {
        const response = await fetch('/api/confessions');
        const data = await response.json();
        setConfessions(data);
      } catch (error) {
        console.error('Erro ao carregar confissões:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchConfessions();
  }, []);

  if (loading) {
    return (
  <main className="min-h-screen bg-slate-50 py-8">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Eventos</h1>
      {loading ? (
        <div className="flex items-center justify-center min-h-[400px] bg-slate-50">
          <div className="text-gray-600">Carregando...</div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Resto do código permanece igual */}
        </div>
      )}
    </div>
  </main>
);
  }

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Horários de Confissão</h1>
        <div className="space-y-6">
          {confessions.map((confession) => (
            <div key={confession.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="space-y-3 text-gray-600">
                <h2 className="text-xl font-semibold text-gray-900">{confession.church.name}</h2>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{confession.church.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>{confession.dayOfWeek}: {confession.startTime} - {confession.endTime}</span>
                </div>
                {confession.notes && (
                  <p className="mt-2 text-sm">{confession.notes}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 