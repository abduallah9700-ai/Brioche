import { Menu as MenuIcon, X } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
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
            <img 
              src="/logo.png" 
              alt="" 
              className="h-16 md:h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
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
          </div>

          {/* Mobile Menu Button - Using Checkbox Hack */}
          <div className="md:hidden flex items-center">
            <label htmlFor="menu-toggle" className="cursor-pointer p-2 text-secondary">
              <input type="checkbox" id="menu-toggle" className="hidden peer" />
              <div className="peer-checked:hidden">
                <MenuIcon size={28} />
              </div>
              <div className="hidden peer-checked:block">
                <X size={28} />
              </div>
              
              {/* Mobile Nav Overlay */}
              <div className="fixed top-20 left-0 w-full bg-cream border-b border-black/5 px-4 pt-2 pb-6 space-y-4 hidden peer-checked:block">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={(e) => {
                      e.preventDefault();
                      setPage(link.id);
                      // Uncheck the checkbox to close menu
                      const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                      if (checkbox) checkbox.checked = false;
                    }}
                    className={`block w-full text-left text-lg font-black uppercase tracking-widest ${
                      currentPage === link.id ? 'text-primary' : 'text-secondary'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
