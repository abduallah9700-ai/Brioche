import { motion } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: { name: string; id: Page }[] = [
    { name: 'Home', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setPage('home')}
          >
            <span className="text-3xl font-black tracking-tighter text-secondary">
              B<span className="text-primary">rioche</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => setPage(link.id)}
                className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                  currentPage === link.id ? 'text-primary' : 'text-secondary'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="bg-secondary text-cream px-6 py-2 rounded-full font-bold text-sm hover:bg-primary hover:text-secondary transition-all flex items-center gap-2">
              <ShoppingBag size={18} />
              ORDER NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary p-2"
            >
              {isMenuOpen ? <X size={28} /> : <MenuIcon size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-cream border-b border-black/5 px-4 pt-2 pb-6 space-y-4"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setPage(link.id);
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left text-lg font-black uppercase tracking-widest ${
                currentPage === link.id ? 'text-primary' : 'text-secondary'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button className="w-full bg-secondary text-cream px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
            <ShoppingBag size={20} />
            ORDER NOW
          </button>
        </motion.div>
      )}
    </nav>
  );
}
