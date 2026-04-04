import { Menu as MenuIcon, X } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export default function Navbar({ currentPage, setPage }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={() => setPage('home')}
          >
            <img 
              src="https://scontent.fmgq2-1.fna.fbcdn.net/v/t39.30808-6/272921332_262362036017754_89106958614156851_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=uQRc3dGKDC8Q7kNvwFA9Ls2&_nc_oc=Adp16ax3QR79U4J4KWub-8od8bjgAv50mNWM6Ce8zl-PuDghPWk006ClqkeR1JbHZGc&_nc_zt=23&_nc_ht=scontent.fmgq2-1.fna&_nc_gid=J2VdTsIA58Asgj0FNS0_VA&_nc_ss=7a389&oh=00_Af2IE0xQa6XvQTzeJWeLVcjxsJ_aR9JPG--PxlfJ08-9lw&oe=69D70E56" 
              alt="Brioche Logo" 
              className="h-16 md:h-20 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation Links - Hardcoded for easy editing */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => setPage('home')}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                currentPage === 'home' ? 'text-primary' : 'text-secondary'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setPage('menu')}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                currentPage === 'menu' ? 'text-primary' : 'text-secondary'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => setPage('about')}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                currentPage === 'about' ? 'text-primary' : 'text-secondary'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setPage('contact')}
              className={`text-sm font-bold uppercase tracking-widest transition-colors hover:text-primary ${
                currentPage === 'contact' ? 'text-primary' : 'text-secondary'
              }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Section */}
          <div className="md:hidden flex items-center">
            <label htmlFor="menu-toggle" className="cursor-pointer p-2 text-secondary">
              <input type="checkbox" id="menu-toggle" className="hidden peer" />
              
              {/* Menu Icons */}
              <div className="peer-checked:hidden">
                <MenuIcon size={28} />
              </div>
              <div className="hidden peer-checked:block">
                <X size={28} />
              </div>
              
              {/* Mobile Navigation Overlay - Hardcoded for easy editing */}
              <div className="fixed top-20 left-0 w-full bg-cream border-b border-black/5 px-4 pt-2 pb-6 space-y-4 hidden peer-checked:block">
                <button
                  onClick={() => {
                    setPage('home');
                    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                    if (checkbox) checkbox.checked = false;
                  }}
                  className={`block w-full text-left text-lg font-black uppercase tracking-widest ${
                    currentPage === 'home' ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => {
                    setPage('menu');
                    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                    if (checkbox) checkbox.checked = false;
                  }}
                  className={`block w-full text-left text-lg font-black uppercase tracking-widest ${
                    currentPage === 'menu' ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  Menu
                </button>
                <button
                  onClick={() => {
                    setPage('about');
                    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                    if (checkbox) checkbox.checked = false;
                  }}
                  className={`block w-full text-left text-lg font-black uppercase tracking-widest ${
                    currentPage === 'about' ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => {
                    setPage('contact');
                    const checkbox = document.getElementById('menu-toggle') as HTMLInputElement;
                    if (checkbox) checkbox.checked = false;
                  }}
                  className={`block w-full text-left text-lg font-black uppercase tracking-widest ${
                    currentPage === 'contact' ? 'text-primary' : 'text-secondary'
                  }`}
                >
                  Contact
                </button>
              </div>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
