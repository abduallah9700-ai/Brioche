import { motion } from 'motion/react';
import { ShoppingBag, Star } from 'lucide-react';
import { MenuItem } from '../types';

interface FoodCardProps {
  item: MenuItem;
  onClick: () => void;
  key?: string | number;
}

export default function FoodCard({ item, onClick }: FoodCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {item.featured && (
          <div className="absolute top-4 left-4 bg-primary text-secondary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-1">
            <Star size={12} fill="currentColor" />
            BEST SELLER
          </div>
        )}
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-black text-secondary leading-tight">{item.name}</h3>
          <span className="text-xl font-black text-primary">${item.price}</span>
        </div>
        <p className="text-secondary/60 text-sm font-medium mb-8 line-clamp-2">
          {item.description}
        </p>
        <button className="w-full bg-cream border-2 border-secondary/10 text-secondary py-4 rounded-2xl font-bold flex items-center justify-center gap-2 group-hover:bg-secondary group-hover:text-cream transition-all">
          <ShoppingBag size={18} />
          ADD TO CART
        </button>
      </div>
    </motion.div>
  );
}
