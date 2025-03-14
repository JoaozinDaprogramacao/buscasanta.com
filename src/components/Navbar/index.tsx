'use client';

import Link from 'next/link';
import { Home, Church, Calendar, Clock, BookOpen, InfoIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="flex items-center gap-2">
          <Church size={24} className="text-blue-600" />
          <span className="text-xl font-semibold text-blue-600">Busca Santa</span>
        </Link>
        
        {/* Menu para Desktop */}
        <div className="hidden md:flex gap-6">
          <Link href="/" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <Home size={18} />
            Inicial
          </Link>
          <Link href="/igrejas" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <Church size={18} />
            Igrejas
          </Link>
          <Link href="/eventos" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <Calendar size={18} />
            Eventos
          </Link>
          <Link href="/confissoes" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <Clock size={18} />
            Confissões
          </Link>
          <Link href="/sobre" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
            <InfoIcon size={18} />
            Sobre
          </Link>
        </div>

        {/* Botão do Menu Mobile */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-blue-600"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50 transition-all duration-300 ease-in-out">
            <div className="flex flex-col py-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                onClick={toggleMenu}
              >
                <Home size={18} />
                Inicial
              </Link>
              <Link 
                href="/igrejas" 
                className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                onClick={toggleMenu}
              >
                <Church size={18} />
                Igrejas
              </Link>
              <Link 
                href="/eventos" 
                className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                onClick={toggleMenu}
              >
                <Calendar size={18} />
                Eventos
              </Link>
              <Link 
                href="/confissoes" 
                className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                onClick={toggleMenu}
              >
                <Clock size={18} />
                Confissões
              </Link>
              <Link 
                href="/calendario" 
                className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                onClick={toggleMenu}
              >
                <BookOpen size={18} />
                Calendário
              </Link>
              <Link 
                href="/sobre" 
                className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
                onClick={toggleMenu}
              >
                <InfoIcon size={18} />
                Sobre
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 