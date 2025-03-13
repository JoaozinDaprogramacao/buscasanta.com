import { Clock } from 'lucide-react';

const confessionSchedules = [
  {
    church: 'Catedral Nossa Senhora',
    schedules: [
      { day: 'Segunda', time: '15:00 - 17:00' },
      { day: 'Quarta', time: '09:00 - 11:00' },
      { day: 'Sábado', time: '14:00 - 16:00' }
    ]
  },
  {
    church: 'Igreja São José',
    schedules: [
      { day: 'Terça', time: '16:00 - 18:00' },
      { day: 'Quinta', time: '10:00 - 12:00' },
      { day: 'Sábado', time: '15:00 - 17:00' }
    ]
  }
];

export default function ConfissoesPage() {
  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <Clock className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Horários de Confissão</h1>
        </div>
        
        <div className="grid gap-6">
          {confessionSchedules.map((item) => (
            <div key={item.church} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">{item.church}</h2>
              <div className="grid gap-2">
                {item.schedules.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
} 