import { Calendar } from 'lucide-react';

const events = [
  {
    title: 'Missa Solene de Natal',
    church: 'Catedral Nossa Senhora',
    date: '25/12/2024',
    time: '10:00',
    description: 'Celebração especial de Natal'
  },
  {
    title: 'Festa de São José',
    church: 'Igreja São José',
    date: '19/03/2024',
    time: '19:00',
    description: 'Festa do padroeiro da paróquia'
  }
];

export default function EventosPage() {
  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Calendar className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Eventos e Celebrações</h1>
        </div>
        
        <div className="grid gap-6">
          {events.map((event) => (
            <div key={event.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <Calendar size={24} className="text-blue-600 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h2>
                  <p className="text-gray-600 mb-2">{event.church}</p>
                  <p className="text-blue-600 font-medium">{event.date} às {event.time}</p>
                  <p className="text-gray-600 mt-2">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 