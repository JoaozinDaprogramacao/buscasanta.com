import prisma from './db';
import { Confession } from '@prisma/client';

// Obter todas as confissões
export async function getAllConfessions() {
  return await prisma.confession.findMany({
    include: {
      church: true,
    },
  });
}

// Criar nova confissão
export async function createConfession(data: Omit<Confession, 'id' | 'createdAt' | 'updatedAt'>) {
  return await prisma.confession.create({
    data,
  });
}

// Atualizar confissão
export async function updateConfession(id: number, data: Partial<Omit<Confession, 'id' | 'createdAt' | 'updatedAt'>>) {
  return await prisma.confession.update({
    where: { id },
    data,
  });
}

// Excluir confissão
export async function deleteConfession(id: number) {
  return await prisma.confession.delete({
    where: { id },
  });
} 