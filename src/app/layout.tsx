import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Igrejas Católicas - Nossa Cidade',
  description: 'Encontre todas as informações das igrejas católicas da nossa cidade em um só lugar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Navbar />
        {children}
        <footer className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white">
          <div className="container mx-auto py-12 px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Sobre Nós</h3>
                <p className="text-gray-200">Conectando fiéis às igrejas católicas de nossa cidade.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li><Link href="/igrejas" className="hover:text-gray-300">Igrejas</Link></li>
                  <li><Link href="/eventos" className="hover:text-gray-300">Eventos</Link></li>
                  <li><Link href="/horarios" className="hover:text-gray-300">Horários de Missa</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contato</h3>
                <ul className="space-y-2 text-gray-200">
                  <li>contato@igrejascidade.com.br</li>
                  <li>(XX) XXXX-XXXX</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
                <div className="flex space-x-4">
                  {/* Adicione ícones de redes sociais aqui */}
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700">
            <div className="container mx-auto py-4 px-4 text-center text-sm">
              <p>© 2024 Igrejas Católicas - Nossa Cidade. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
