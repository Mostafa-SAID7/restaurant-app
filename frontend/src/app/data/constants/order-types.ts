/**
 * Order Types - Centralized constant
 * Used across: Checkout, Reservations, etc.
 */

export const ORDER_TYPES = [
  { id: 'dining', label: 'Dine In', icon: 'checkout', description: 'Enjoy your meal at our restaurant' },
  { id: 'takeout', label: 'Takeout', icon: 'takeout', description: 'Pick up your order' },
  { id: 'delivery', label: 'Delivery', icon: 'bike', description: 'We deliver to your location' }
] as const;

export type OrderType = typeof ORDER_TYPES[number]['id'];

export const ORDER_TYPE_MAP = {
  dining: 'Dine In',
  takeout: 'Takeout',
  delivery: 'Delivery'
} as const;

export const ORDER_TYPE_ICONS = {
  dining: 'checkout',
  takeout: 'takeout',
  delivery: 'bike'
} as const;
