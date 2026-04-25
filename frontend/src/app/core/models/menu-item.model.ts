export type MenuCategory = 'Appetizers' | 'Mains' | 'Desserts' | 'Drinks' | 'Specials';

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image?: string;
  tags?: string[];          // e.g. ['vegan', 'gluten-free', 'chef-special']
  allergens?: string[];     // e.g. ['nuts', 'dairy', 'gluten']
  isAvailable: boolean;
  isFeatured?: boolean;
  rating?: number;          // 0-5 star rating
  calories?: number;        // kcal info
}
