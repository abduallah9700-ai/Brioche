import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-cream pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <span className="text-4xl font-black tracking-tighter">
              B<span className="text-primary">rioche</span>
            </span>
            <p className="text-cream/60 font-medium leading-relaxed">
              Elevating street food culture through premium ingredients and artisanal brioche bread.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="bg-cream/10 p-3 rounded-full hover:bg-primary hover:text-secondary transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4 font-bold text-cream/60">
              <li><a href="#" className="hover:text-primary transition-colors">Menu</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Locations</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Franchise</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6 font-bold text-cream/60">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0" size={20} />
                <span>123 Burger Lane, Foodie District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={20} />
                <span>+1 (555) BRIOCHE</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-black mb-8 uppercase tracking-widest">Hours</h4>
            <ul className="space-y-6 font-bold text-cream/60">
              <li className="flex items-start gap-3">
                <Clock className="text-primary shrink-0" size={20} />
                <div>
                  <p>Mon - Thu: 11am - 10pm</p>
                  <p>Fri - Sun: 11am - 12am</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-cream/10 text-center text-cream/40 font-bold text-sm">
          <p>© 2026 BRIOCHE RESTAURANTS GROUP. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
}
