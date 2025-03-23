'use client'

import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function AreaRestrita() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <div>Carregando...</div>
  }

  if (!session) {
    redirect('/')
  }

  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Área Restrita</h1>
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">
            Bem-vindo, {session.user?.name}!
          </h2>
          <p className="text-gray-600">
            Esta é uma área exclusiva para usuários autenticados.
          </p>
        </div>
      </div>
    </main>
  )
} 