'use client'

import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { SessionProvider } from "next-auth/react"

const inter = Inter({ subsets: ['latin'] });

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <SessionProvider>
          <Navbar />
          {children}
          <footer className="bg-gradient-to-r from-[#1a237e] to-[#283593] text-white">
            {/* ... resto do código do footer ... */}
          </footer>
        </SessionProvider>
      </body>
    </html>
  );
} 