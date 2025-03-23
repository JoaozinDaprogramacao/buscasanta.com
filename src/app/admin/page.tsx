"use client";

import { useState, useEffect } from 'react';
import { Church, Calendar, Clock, Plus, Edit, Trash2 } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('igrejas');
  const [churches, setChurches] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [confessions, setConfessions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Redirecionar se não estiver autenticado
  if (status === 'unauthenticated') {
    router.push('/login');
    return null;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        if (activeTab === 'igrejas') {
          const response = await fetch('/api/churches');
          const data = await response.json();
          setChurches(data);
        } else if (activeTab === 'eventos') {
          const response = await fetch('/api/events');
          const data = await response.json();
          setEvents(data);
        } else if (activeTab === 'confissoes') {
          const response = await fetch('/api/confessions');
          const data = await response.json();
          setConfessions(data);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [activeTab]);

  async function handleDelete(id: string, type: string) {
    try {
      const response = await fetch(`/api/${type}/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Atualizar a lista após excluir
        if (type === 'churches') {
          setChurches(churches.filter(church => church.id !== id));
        } else if (type === 'events') {
          setEvents(events.filter(event => event.id !== id));
        } else if (type === 'confessions') {
          setConfessions(confessions.filter(confession => confession.id !== id));
        }
      } else {
        alert('Erro ao excluir item');
      }
    } catch (error) {
      console.error('Erro ao excluir:', error);
      alert('Erro ao excluir item');
    }
  }

  // Mostrar carregando enquanto verifica a sessão ou carrega dados
  if (status === 'loading' || loading) {
    return (
      <main className="bg-slate-50 min-h-screen py-8">
        <div className="container mx-auto px-4">
          <p className="text-center py-8">Carregando...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Painel de Administração</h1>
        
        {/* Abas de navegação */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`py-3 px-6 font-medium flex items-center gap-2 ${
              activeTab === 'igrejas' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab('igrejas')}
          >
            <Church size={18} />
            Igrejas
          </button>
          <button
            className={`py-3 px-6 font-medium flex items-center gap-2 ${
              activeTab === 'eventos' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab('eventos')}
          >
            <Calendar size={18} />
            Eventos
          </button>
          <button
            className={`py-3 px-6 font-medium flex items-center gap-2 ${
              activeTab === 'confissoes' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
            onClick={() => setActiveTab('confissoes')}
          >
            <Clock size={18} />
            Confissões
          </button>
        </div>
        
        {/* Botão de adicionar */}
        <div className="flex justify-end mb-6">
          <Link 
            href={`/admin/${activeTab}/novo`}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
          >
            <Plus size={18} />
            Adicionar {activeTab === 'igrejas' ? 'Igreja' : activeTab === 'eventos' ? 'Evento' : 'Horário de Confissão'}
          </Link>
        </div>
        
        {/* Conteúdo da aba */}
        {activeTab === 'igrejas' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Endereço</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Horários</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {churches.map((church) => (
                  <tr key={church.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{church.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {church.address}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                      {church.schedule}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex gap-3">
                        <Link 
                          href={`/admin/igrejas/editar/${church.id}`}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit size={18} />
                        </Link>
                        <button 
                          onClick={() => {
                            if (confirm(`Tem certeza que deseja excluir ${church.name}?`)) {
                              handleDelete(church.id, 'churches');
                            }
                          }}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        
        {activeTab === 'eventos' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600">Lista de eventos será exibida aqui.</p>
            {/* Implementar tabela de eventos similar à de igrejas */}
          </div>
        )}
        
        {activeTab === 'confissoes' && (
          <div className="bg-white rounded-xl shadow-md p-6">
            <p className="text-gray-600">Lista de horários de confissão será exibida aqui.</p>
            {/* Implementar tabela de confissões similar à de igrejas */}
          </div>
        )}
      </div>
    </main>
  );
} 