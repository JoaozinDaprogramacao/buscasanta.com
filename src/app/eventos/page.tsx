'use client';

import { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

type Event = {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  church: {
    name: string;
    address: string;
  };
}

export default function EventosPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await fetch('/api/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Erro ao carregar eventos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Eventos</h1>
        {loading ? (
          <div className="flex items-center justify-center min-h-[400px] bg-slate-50">
            <span className="text-gray-600">Carregando...</span>
          </div>
        ) : (
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">{event.title}</h2>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>{new Date(event.date).toLocaleDateString('pt-BR')}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>{event.church.name} - {event.church.address}</span>
                  </div>
                  <p className="mt-4">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
} 