import { motion } from 'motion/react';
import { Star } from 'lucide-react';
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
      className="bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative h-40 md:h-64 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        {item.featured && (
          <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-primary text-secondary px-2 py-0.5 md:px-4 md:py-1 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest flex items-center gap-1">
            <Star size={10} className="md:w-3 md:h-3" fill="currentColor" />
            <span className="hidden xs:inline">BEST SELLER</span>
            <span className="xs:hidden">BEST</span>
          </div>
        )}
      </div>
      <div className="p-3 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-1">
          <h3 className="text-sm md:text-2xl font-black text-secondary leading-tight line-clamp-1 md:line-clamp-none">{item.name}</h3>
          <span className="text-sm md:text-xl font-black text-primary">${item.price}</span>
        </div>
      </div>
    </motion.div>
  );
}
