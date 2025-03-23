import prisma from './db';
import { Event } from '@prisma/client';

// Obter todos os eventos
export async function getAllEvents() {
  return await prisma.event.findMany({
    orderBy: {
      date: 'asc',
    },
    include: {
      church: true,
    },
  });
}

// Obter eventos futuros
export async function getFutureEvents() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  return await prisma.event.findMany({
    where: {
      date: {
        gte: today,
      },
    },
    orderBy: {
      date: 'asc',
    },
    include: {
      church: true,
    },
  });
}

// Criar novo evento
export async function createEvent(data: Omit<Event, 'id' | 'createdAt' | 'updatedAt'>) {
  return await prisma.event.create({
    data,
  });
}

// Atualizar evento
export async function updateEvent(id: number, data: Partial<Omit<Event, 'id' | 'createdAt' | 'updatedAt'>>) {
  return await prisma.event.update({
    where: { id },
    data,
  });
}

// Excluir evento
export async function deleteEvent(id: number) {
  return await prisma.event.delete({
    where: { id },
  });
} 