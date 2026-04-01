import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black text-secondary uppercase tracking-tighter mb-8"
          >
            FIND <span className="text-primary">US</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-12 rounded-[3rem] shadow-2xl"
          >
            <h3 className="text-3xl font-black text-secondary mb-12 uppercase tracking-tight">Get in Touch</h3>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <div className="bg-primary p-4 rounded-2xl text-secondary">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-secondary mb-2">Location</h4>
                  <p className="text-secondary/60 font-bold text-lg">123 Burger Lane, Foodie District, NY 10001</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary p-4 rounded-2xl text-secondary">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-secondary mb-2">Phone</h4>
                  <p className="text-secondary/60 font-bold text-lg">+1 (555) BRIOCHE</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="bg-primary p-4 rounded-2xl text-secondary">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-black text-secondary mb-2">Hours</h4>
                  <p className="text-secondary/60 font-bold text-lg">Mon - Thu: 11am - 10pm</p>
                  <p className="text-secondary/60 font-bold text-lg">Fri - Sun: 11am - 12am</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="h-full min-h-[500px] bg-secondary rounded-[3rem] overflow-hidden relative"
          >
            {/* Mock Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin size={64} className="text-primary mx-auto mb-6 animate-bounce" />
                <p className="text-cream font-black text-2xl uppercase tracking-widest">Interactive Map</p>
                <p className="text-cream/40 font-bold">Coming Soon to your neighborhood</p>
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000" 
              alt="Map Background"
              className="w-full h-full object-cover opacity-20 grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
