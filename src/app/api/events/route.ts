import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    const events = await prisma.event.findMany({
      include: {
        church: true
      },
      orderBy: {
        date: 'asc'
      }
    });
    return NextResponse.json(events);
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    return NextResponse.json({ error: 'Erro ao buscar eventos' }, { status: 500 });
  }
} 