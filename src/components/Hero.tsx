import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Page } from '../types';

interface HeroProps {
  onOrderClick: () => void;
}

export default function Hero({ onOrderClick }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-primary">
      {/* Blurred Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[25vw] font-black text-secondary whitespace-nowrap blur-xl leading-none"
        >
          BRIOCHE BRIOCHE
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-secondary leading-[0.9] tracking-tighter mb-8">
              BITE INTO <br />
              <span className="text-cream">FLAVOR</span>
            </h1>
            <p className="text-xl md:text-2xl font-bold text-secondary/80 mb-10 max-w-md">
              Premium street food crafted with our signature golden brioche buns.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onOrderClick}
                className="bg-secondary text-cream px-10 py-5 rounded-full font-black text-xl hover:bg-primary hover:text-secondary transition-all flex items-center justify-center gap-3 group"
              >
                VIEW MENU
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            {/* Main Hero Image */}
            <div className="relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.4)]">
              <img
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000"
                alt="Signature Brioche Burger"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decorative elements */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 bg-cream p-6 rounded-2xl shadow-2xl z-20 hidden md:block"
            >
              <span className="text-4xl font-black text-primary">100%</span>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary/60">Fresh Ingredients</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
