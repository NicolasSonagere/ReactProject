import { useEffect, useRef, useState } from 'react';
import { NavElements } from "./NavElements";

export function BarraNavegacao() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null); // Referência para a barra de navegação

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setIsOpen(false); // Fecha a barra se o clique estiver fora dela
    }
  };

  useEffect(() => {
    // Adiciona o listener ao documento
    document.addEventListener('mousedown', handleClickOutside);

    // Remove o listener quando o componente for desmontado
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Ícone de Menu Hambúrguer (visível apenas em mobile) */}
      <button
        className="md:hidden fixed top-4 left-4 z-50"
        onClick={toggleMenu}
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      {/* Navbar para mobile */}
      <nav
        ref={navRef} // Adiciona a referência à barra de navegação
        className={`fixed h-screen w-64 bg-black text-white transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:hidden z-50 flex items-center justify-center`}
      >
        <ul className="flex flex-col items-center justify-center h-full">
          <NavElements label='Home' />
          <NavElements label='Pesquisar' />
          <NavElements label='Favoritos' />
        </ul>
      </nav>

      {/* Navbar visível em desktop (manter como estava antes) */}
      <nav className="hidden md:flex fixed h-screen w-[10%] bg-black text-white items-center flex-col justify-center z-50">
        <ul className="h-1/3 items-center flex flex-col justify-between p-4">
          <NavElements label='Home' />
          <NavElements label='Pesquisar' />
          <NavElements label='Favoritos' />
        </ul>
      </nav>
    </div>
  );
}
