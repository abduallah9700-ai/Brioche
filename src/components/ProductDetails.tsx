import { motion } from 'motion/react';
import { ArrowLeft, Star, Clock, Flame } from 'lucide-react';
import { MenuItem } from '../types';

interface ProductDetailsProps {
  item: MenuItem;
  onBack: () => void;
}

export default function ProductDetails({ item, onBack }: ProductDetailsProps) {
  return (
    <section className="py-24 bg-cream min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-secondary font-black uppercase tracking-widest mb-12 hover:text-primary transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Menu
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary rounded-full blur-[120px] opacity-20"></div>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-auto object-contain relative z-10 drop-shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary text-secondary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                {item.category}
              </span>
              <div className="flex items-center gap-1 text-primary">
                <Star size={16} fill="currentColor" />
                <span className="text-secondary font-bold">4.9 (200+ Reviews)</span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-secondary uppercase tracking-tighter mb-8 leading-[0.9]">
              {item.name}
            </h1>
            
            <p className="text-2xl font-black text-primary mb-12">${item.price}</p>

            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl text-center">
                <Clock className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-black uppercase tracking-widest text-secondary/40">Prep Time</p>
                <p className="font-bold text-secondary">15 Mins</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center">
                <Flame className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-black uppercase tracking-widest text-secondary/40">Calories</p>
                <p className="font-bold text-secondary">850 kcal</p>
              </div>
              <div className="bg-white p-6 rounded-2xl text-center">
                <Star className="mx-auto mb-2 text-primary" />
                <p className="text-xs font-black uppercase tracking-widest text-secondary/40">Rating</p>
                <p className="font-bold text-secondary">4.9/5</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
