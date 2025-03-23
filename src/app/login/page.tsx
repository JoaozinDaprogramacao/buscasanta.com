"use client";

import { Church } from 'lucide-react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <Link href="/" className="flex items-center justify-center gap-2 mb-8">
            <Church size={32} className="text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">Busca Santa</span>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900">Bem-vindo de volta</h2>
          <p className="mt-2 text-gray-600">
            Entre para acompanhar sua comunidade católica
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <div className="space-y-4">
            <button
              onClick={() => signIn('google', { callbackUrl: '/' })}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition"
            >
              <Image
                src="/google-icon.svg"
                alt="Google"
                width={20}
                height={20}
              />
              Entrar com Google
            </button>
          </div>

          <div className="mt-6 text-center text-sm">
            <p className="text-gray-600">
              Ao entrar, você concorda com nossos{' '}
              <Link href="/termos" className="text-blue-600 hover:text-blue-700">
                Termos de Uso
              </Link>{' '}
              e{' '}
              <Link href="/privacidade" className="text-blue-600 hover:text-blue-700">
                Política de Privacidade
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 