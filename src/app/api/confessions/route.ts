import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const confessions = await prisma.confession.findMany({
      include: {
        church: true
      },
      orderBy: {
        dayOfWeek: 'asc'
      }
    });
    return NextResponse.json(confessions);
  } catch (error) {
    console.error('Erro ao buscar confissões:', error);
    return NextResponse.json({ error: 'Erro ao buscar confissões' }, { status: 500 });
  }
} 