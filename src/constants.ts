import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'The OG Brioche',
    description: 'Classic beef patty, melted cheddar, signature sauce, and pickles on a toasted brioche bun.',
    price: 12.99,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 'b2',
    name: 'Spicy Crispy Chicken',
    description: 'Buttermilk fried chicken, spicy mayo, slaw, and jalapeños on a soft brioche bun.',
    price: 11.49,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&q=80&w=800',
    featured: true,
  },
  {
    id: 'b3',
    name: 'Truffle Mushroom',
    description: 'Beef patty, sautéed mushrooms, truffle aioli, and swiss cheese.',
    price: 14.99,
    category: 'Burgers',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 's1',
    name: 'Philly Brioche',
    description: 'Thinly sliced steak, grilled onions, and peppers with melted provolone.',
    price: 13.49,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'sd1',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with cheese sauce, bacon bits, and chives.',
    price: 6.99,
    category: 'Sides',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'd1',
    name: 'Signature Lemonade',
    description: 'Freshly squeezed lemonade with a hint of mint.',
    price: 4.50,
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800',
  }
];

export const BRAND = {
  name: 'Brioche',
  tagline: 'Bite Into Flavor',
  colors: {
    primary: '#F5B016',
    secondary: '#111111',
    cream: '#F5F1E6',
  }
};
