import { motion } from 'motion/react';
import { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import FoodCard from './FoodCard';
import { MenuItem } from '../types';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', 'Burgers', 'Sandwiches', 'Sides', 'Drinks'];

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-secondary uppercase tracking-tighter mb-8"
          >
            OUR <span className="text-primary">MENU</span>
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? 'bg-secondary text-cream scale-110' 
                    : 'bg-white text-secondary hover:bg-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {filteredItems.map((item) => (
            <FoodCard 
              key={item.id} 
              item={item} 
              onClick={() => {}} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
