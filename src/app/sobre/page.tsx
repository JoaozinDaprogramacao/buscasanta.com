import { InfoIcon, Mail, Phone, MapPin } from 'lucide-react';

export default function SobrePage() {
  return (
    <main className="bg-slate-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <InfoIcon className="text-blue-600" size={32} />
          <h1 className="text-3xl font-bold text-gray-900">Sobre Nós</h1>
        </div>

        <div className="grid gap-8">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Nossa Missão</h2>
            <p className="text-gray-600 leading-relaxed">
              O Busca Santa é uma plataforma dedicada a conectar fiéis às igrejas católicas de nossa cidade. 
              Nossa missão é facilitar o acesso à informação sobre horários de missas, eventos e celebrações 
              especiais, tornando mais simples a participação na vida da Igreja.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Como Funciona</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Reunimos informações atualizadas de todas as igrejas católicas da região, incluindo:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Horários de missas e confissões</li>
              <li>Eventos e celebrações especiais</li>
              <li>Localização e contato das igrejas</li>
              <li>Informações sobre as comunidades</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Entre em Contato</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-600">contato@buscasanta.com.br</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-600">(11) 1234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-600">Rua da Igreja, 123 - Centro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 