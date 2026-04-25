/**
 * Menu Categories - Centralized constant
 * Used across: Menu, Checkout, Home, etc.
 */

export const MENU_CATEGORIES = [
  'Appetizers',
  'Mains',
  'Desserts',
  'Drinks',
  'Specials'
] as const;

export type MenuCategory = typeof MENU_CATEGORIES[number];

export const CATEGORY_ICONS: Record<MenuCategory, string> = {
  'Appetizers': 'category_appetizers',
  'Mains': 'category_mains',
  'Desserts': 'category_desserts',
  'Drinks': 'category_drinks',
  'Specials': 'category_specials'
};

export const CATEGORY_LABELS: Record<MenuCategory, string> = {
  'Appetizers': 'Appetizers',
  'Mains': 'Main Courses',
  'Desserts': 'Desserts',
  'Drinks': 'Beverages',
  'Specials': 'Chef\'s Specials'
};

export const CATEGORY_DESCRIPTIONS: Record<MenuCategory, string> = {
  'Appetizers': 'Start your culinary journey with our carefully crafted starters',
  'Mains': 'Our signature dishes, prepared with precision and passion',
  'Desserts': 'Sweet finales to complete your dining experience',
  'Drinks': 'Craft cocktails and premium beverages',
  'Specials': 'Limited-time creations from our executive chef'
};
