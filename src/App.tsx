import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import { Page, MenuItem } from './types';
import { MENU_ITEMS } from './constants';
import FoodCard from './components/FoodCard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleProductClick = (item: MenuItem) => {
    setSelectedItem(item);
    setCurrentPage('product');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero onOrderClick={() => setCurrentPage('menu')} />
            
            {/* Featured Section */}
            <section className="py-24 bg-cream">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                  <div>
                    <h2 className="text-6xl md:text-8xl font-black text-secondary uppercase tracking-tighter leading-[0.8]">
                      POPULAR <br /> <span className="text-primary">BITES</span>
                    </h2>
                  </div>
                  <button 
                    onClick={() => setCurrentPage('menu')}
                    className="bg-secondary text-cream px-10 py-4 rounded-full font-black text-lg hover:bg-primary hover:text-secondary transition-all"
                  >
                    VIEW FULL MENU
                  </button>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-12">
                  {MENU_ITEMS.filter(item => item.featured).map((item) => (
                    <FoodCard 
                      key={item.id} 
                      item={item} 
                      onClick={() => handleProductClick(item)} 
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Why Brioche Section */}
            <section className="py-24 bg-primary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
                <span className="text-[40vw] font-black text-secondary whitespace-nowrap">QUALITY</span>
              </div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
                  {[
                    { title: 'Freshly Baked', desc: 'Our brioche buns are baked every morning for that perfect golden glow.' },
                    { title: 'Premium Beef', desc: '100% grass-fed beef, hand-pressed and seasoned to perfection.' },
                    { title: 'Secret Sauce', desc: 'Our signature house-made sauces that you won\'t find anywhere else.' }
                  ].map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                    >
                      <h3 className="text-4xl font-black text-secondary mb-6 uppercase tracking-tighter">{feature.title}</h3>
                      <p className="text-xl font-bold text-secondary/70 leading-relaxed">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Instagram Style Section */}
            <section className="py-24 bg-cream overflow-hidden">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
                <h2 className="text-5xl font-black text-secondary uppercase tracking-tighter text-center">
                  JOIN THE <span className="text-primary">CULT</span> #BRIOCHE
                </h2>
              </div>
              <div className="flex gap-4 animate-scroll">
                {[
                  'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=600',
                  'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=600',
                ].map((img, i) => (
                  <div key={i} className="w-80 h-80 shrink-0 rounded-[2rem] overflow-hidden">
                    <img src={img} alt="Social" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </section>
          </>
        );
      case 'menu':
        return <Menu />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'product':
        return selectedItem ? (
          <ProductDetails item={selectedItem} onBack={() => setCurrentPage('menu')} />
        ) : (
          <Menu />
        );
      default:
        return <Hero onOrderClick={() => setCurrentPage('menu')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
