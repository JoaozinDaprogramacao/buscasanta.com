import { Church } from '@/types/church';

export const churches: Church[] = [
  {
    name: 'Catedral Nossa Senhora',
    image: '/igreja1.jpg',
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
  {
    name: 'Igreja São José',
    image: '/igreja2.jpg',
    address: 'Rua São José, 456',
    schedule: 'Missas: Dom 7h30, 19h',
    phone: '(11) 2345-6789',
    slug: 'igreja-sao-jose',
    description: 'A Igreja São José é conhecida por sua arquitetura...',
    events: [
      {
        title: 'Festa do Padroeiro',
        date: '2024-03-19',
        time: '19:00'
      }
    ]
  }
]; 