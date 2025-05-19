
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div 
          className="flex items-center space-x-2 cursor-pointer" 
          onClick={scrollToTop}
        >
          <span className="h-8 w-8 rounded-full bg-gradient-to-br from-wellspring-500 to-wellspring-700"></span>
          <span className="font-bold text-xl text-wellspring-800">Wellspring Corporate Compass</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium">Serviços</a>
          <a href="#about" className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium">Sobre Nós</a>
          <a href="#process" className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium">Como Funciona</a>
          <a href="#testimonials" className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium">Depoimentos</a>
          <a href="#pricing" className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium">Preços</a>
          <Button className="wellspring-button-primary" onClick={() => window.location.href = '#contact'}>
            Começar Agora
          </Button>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-600 hover:text-wellspring-600 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t py-4 px-4 animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#services" 
              className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Serviços
            </a>
            <a 
              href="#about" 
              className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Sobre Nós
            </a>
            <a 
              href="#process" 
              className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Como Funciona
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Depoimentos
            </a>
            <a 
              href="#pricing" 
              className="text-gray-600 hover:text-wellspring-600 transition-colors font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              Preços
            </a>
            <Button 
              className="wellspring-button-primary w-full"
              onClick={() => {
                window.location.href = '#contact';
                setIsOpen(false);
              }}
            >
              Começar Agora
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default NavBar;
