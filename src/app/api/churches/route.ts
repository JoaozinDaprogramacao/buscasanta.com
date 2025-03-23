import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getAllChurches, createChurch } from '@/data/churches';

export async function GET() {
  try {
    const churches = await prisma.church.findMany({
      orderBy: {
        name: 'asc'
      }
    });
    return NextResponse.json(churches);
  } catch (error) {
    console.error('Erro ao buscar igrejas:', error);
    return NextResponse.json({ error: 'Erro ao buscar igrejas' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session) {
      return NextResponse.json({ error: 'Não autorizado' }, { status: 401 });
    }
    
    const data = await request.json();
    const church = await createChurch(data);
    return NextResponse.json(church, { status: 201 });
  } catch (error) {
    console.error('Erro ao criar igreja:', error);
    return NextResponse.json({ error: 'Erro ao criar igreja' }, { status: 500 });
  }
} 