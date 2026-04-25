import { MenuItem, MenuCategory } from '../models/menu-item.model';
import { getImagePath } from './images';

export const MOCK_MENU: MenuItem[] = [
  { id: 1, name: 'Charred Octopus', description: 'Perfectly charred octopus with smoked paprika aioli, pickled peppers, and micro herbs', price: 22, category: 'Appetizers', image: getImagePath('Charred Octopus'), isAvailable: true, isFeatured: true, tags: ['chef-special'] },
  { id: 2, name: 'Truffle Arancini', description: 'Crispy risotto balls filled with black truffle and fontina, served with saffron aioli', price: 18, category: 'Appetizers', image: getImagePath('Truffle Arancini'), isAvailable: true, tags: ['vegetarian'] },
  { id: 3, name: 'Steak Tartare', description: 'Hand-cut prime tenderloin, egg yolk, capers, cornichons, and toasted brioche', price: 24, category: 'Appetizers', image: getImagePath('Steak Tartare'), isAvailable: true },
  { id: 4, name: 'Wagyu Beef Tenderloin', description: 'A5 Wagyu striploin, bone marrow butter, seasonal vegetables and truffle jus', price: 85, category: 'Mains', image: getImagePath('Wagyu Beef Tenderloin'), isAvailable: true, isFeatured: true, tags: ['chef-special'] },
  { id: 5, name: 'Pan-Seared Halibut', description: 'Wild-caught halibut with saffron beurre blanc, artichoke, and crispy capers', price: 54, category: 'Mains', image: getImagePath('Pan-Seared Halibut'), isAvailable: true, isFeatured: true },
  { id: 6, name: 'Duck Confit', description: '48-hour duck leg confit, cherry gastrique, celery root purée, and roasted figs', price: 48, category: 'Mains', image: getImagePath('Duck Confit'), isAvailable: true, tags: ['chef-special'] },
  { id: 7, name: 'Mushroom Risotto', description: 'Wild mushroom and porcini risotto with aged parmesan and truffle oil', price: 36, category: 'Mains', image: getImagePath('Mushroom Risotto'), isAvailable: true, tags: ['vegetarian'] },
  { id: 8, name: 'Chocolate Noir', description: 'Dark chocolate fondant with orange gel, gold leaf, and vanilla bean ice cream', price: 16, category: 'Desserts', image: getImagePath('Chocolate Noir'), isAvailable: true, isFeatured: true, tags: ['vegetarian'] },
  { id: 9, name: 'Crème Brûlée', description: 'Classic vanilla crème brûlée with seasonal berry compote and tuile', price: 13, category: 'Desserts', image: getImagePath('Crème Brûlée'), isAvailable: true, tags: ['vegetarian'] },
  { id: 10, name: 'Passion Fruit Tart', description: 'Citrus tart with passion fruit curd, coconut cream and tropical flowers', price: 14, category: 'Desserts', image: getImagePath('Passion Fruit Tart'), isAvailable: true, tags: ['vegetarian'] },
  { id: 11, name: 'Noir Negroni', description: 'Campari, aged gin, sweet vermouth, with a charred orange peel', price: 18, category: 'Drinks', image: getImagePath('Noir Negroni'), isAvailable: true, isFeatured: true },
  { id: 12, name: 'Smoked Old Fashioned', description: 'Bourbon whiskey, smoked maple syrup, Angostura bitters, applewood smoke', price: 20, category: 'Drinks', image: getImagePath('Smoked Old Fashioned'), isAvailable: true },
  { id: 13, name: 'French 75', description: 'Gin, lemon juice, simple syrup, topped with chilled Champagne', price: 16, category: 'Drinks', image: getImagePath('French 75'), isAvailable: true },
  { id: 14, name: 'Wagyu Sliders (Special)', description: 'Mini wagyu beef sliders with aged cheddar, black truffle mayo and pickled shallots', price: 38, category: 'Specials', image: getImagePath('Wagyu Sliders (Special)'), isAvailable: true, isFeatured: true, tags: ['chef-special'] },
];
