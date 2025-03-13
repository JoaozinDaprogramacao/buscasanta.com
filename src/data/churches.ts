import { Church } from '@/types/church';

export const churches: Church[] = [
  {
    name: 'Catedral Nossa Senhora',
    image: '/images/churches/catedral.jpg',
    address: 'Praça da Catedral, 123',
    schedule: 'Missas: Dom 8h, 10h, 18h',
    phone: '(11) 1234-5678',
    slug: 'catedral-nossa-senhora',
    description: 'A Catedral Nossa Senhora é um importante marco histórico...',
    events: [
      {
        title: 'Missa Solene',
        date: '2024-03-24',
        time: '10:00'
      }
    ]
  },
  // ...
]; 