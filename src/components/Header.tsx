
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-navy font-serif text-xl md:text-2xl font-bold">Dr. Ibrahim Wuni</Link>
        </div>
        
        <div className="hidden md:flex space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#research">Research</NavLink>
          <NavLink href="#publications">Publications</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="text-navy hover:text-navy-light focus:outline-none"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
            <MobileNavLink href="#education" onClick={toggleMenu}>Education</MobileNavLink>
            <MobileNavLink href="#research" onClick={toggleMenu}>Research</MobileNavLink>
            <MobileNavLink href="#publications" onClick={toggleMenu}>Publications</MobileNavLink>
            <MobileNavLink href="#contact" onClick={toggleMenu}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      className="text-navy-light hover:text-navy font-medium transition-colors duration-200"
    >
      {children}
    </a>
  );
};

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => {
  return (
    <a 
      href={href}
      className="text-navy-light hover:text-navy py-2 font-medium transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </a>
  );
};

export default Header;
