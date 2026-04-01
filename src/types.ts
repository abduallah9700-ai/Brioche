export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Burgers' | 'Sandwiches' | 'Sides' | 'Drinks';
  image: string;
  featured?: boolean;
}

export type Page = 'home' | 'menu' | 'about' | 'contact' | 'product';
