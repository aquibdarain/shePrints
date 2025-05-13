import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Palette } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2" onClick={handleLogoClick}>
          <Palette className="h-8 w-8 text-purple-600" />
          <span className="font-bold text-xl text-purple-700">ShePrints</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={link.path === '/' ? handleLogoClick : undefined}
              className={`text-sm font-medium transition-colors hover:text-purple-600 ${
                location.pathname === link.path
                  ? 'text-purple-600'
                  : isScrolled
                  ? 'text-gray-800'
                  : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        <button
          className="md:hidden p-2 rounded-full hover:bg-purple-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <Menu className={`h-5 w-5 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <Link to="/" className="flex items-center gap-2" onClick={(e) => { handleLogoClick(e); setIsMobileMenuOpen(false); }}>
            <Palette className="h-8 w-8 text-purple-600" />
            <span className="font-bold text-xl text-purple-700">ShePrints</span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-purple-100 transition-colors"
            aria-label="Close Menu"
          >
            <X className="h-5 w-5 text-gray-800" />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`py-3 text-lg font-medium transition-colors hover:text-purple-600 ${
                location.pathname === link.path ? 'text-purple-600' : 'text-gray-800'
              }`}
              onClick={(e) => {
                if (link.path === '/') {
                  handleLogoClick(e);
                }
                setIsMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;