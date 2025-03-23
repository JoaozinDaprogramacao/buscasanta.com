import prisma from './db';
import { Church } from '@prisma/client';

// Obter todas as igrejas
export async function getAllChurches() {
  return await prisma.church.findMany({
    orderBy: {
      name: 'asc',
    },
  });
}

// Obter igreja por slug
export async function getChurchBySlug(slug: string) {
  return await prisma.church.findUnique({
    where: { slug },
    include: {
      events: {
        orderBy: {
          date: 'asc',
        },
      },
      confessions: {
        orderBy: {
          dayOfWeek: 'asc',
        },
      },
    },
  });
}

// Criar nova igreja
export async function createChurch(data: Omit<Church, 'id' | 'createdAt' | 'updatedAt'>) {
  return await prisma.church.create({
    data,
  });
}

// Atualizar igreja
export async function updateChurch(id: number, data: Partial<Omit<Church, 'id' | 'createdAt' | 'updatedAt'>>) {
  return await prisma.church.update({
    where: { id },
    data,
  });
}

// Excluir igreja
export async function deleteChurch(id: number) {
  return await prisma.church.delete({
    where: { id },
  });
} 