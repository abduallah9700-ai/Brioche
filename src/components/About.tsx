import { motion } from 'motion/react';

export default function About() {
  return (
    <section className="py-24 bg-secondary text-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
              THE <span className="text-primary">BRIOCHE</span> <br /> STORY
            </h2>
            <div className="space-y-8 text-xl font-medium text-cream/80">
              <p>
                Founded in 2024, Brioche was born from a simple obsession: creating the perfect burger experience. We believe that the foundation of every great burger starts with the bread.
              </p>
              <p>
                Our signature golden brioche buns are baked fresh daily, using a secret recipe that ensures the perfect balance of buttery softness and structural integrity.
              </p>
              <p>
                We source only the finest grass-fed beef and locally-grown produce to complement our artisanal bread, creating a premium street food experience that's both playful and luxurious.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-8">
              <div>
                <span className="text-5xl font-black text-primary block mb-2">100%</span>
                <p className="text-sm font-bold uppercase tracking-widest text-cream/40">Artisanal Bread</p>
              </div>
              <div>
                <span className="text-5xl font-black text-primary block mb-2">24h</span>
                <p className="text-sm font-bold uppercase tracking-widest text-cream/40">Freshly Baked</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3 hover:rotate-0 transition-transform duration-700">
              <img
                src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1000"
                alt="Our Kitchen"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary text-secondary p-12 rounded-full font-black text-2xl -rotate-12">
              SINCE 2024
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
