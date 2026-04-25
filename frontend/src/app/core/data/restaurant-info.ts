/**
 * Restaurant Information - Centralized constant
 * Used across: Home, About, Footer, Contact, etc.
 */

export const RESTAURANT_INFO = {
  name: 'NooR',
  tagline: 'Where culinary artistry meets obsidian elegance',
  description: 'Michelin-recommended fine dining restaurant in Manhattan',
  established: 2019,
  location: {
    address: '18 West 29th Street, New York, NY 10001',
    city: 'New York',
    state: 'NY',
    zipCode: '10001',
    country: 'USA',
    coordinates: { lat: 40.7461, lng: -73.9896 }
  },
  contact: {
    phone: '+1 (555) 556-667',
    email: 'experience@noor.com',
    reservations: 'reservations@noor.com'
  },
  hours: [
    { days: 'Mon – Thu', time: '6:00 pm – 11:00 pm' },
    { days: 'Fri – Sat', time: '6:00 pm – 1:00 am' },
    { days: 'Sunday', time: '6:00 pm – 10:00 pm' },
    { days: 'Lunch', time: 'Fri – Sun from 12 pm' }
  ],
  social: {
    instagram: 'https://instagram.com/noor-restaurant',
    facebook: 'https://facebook.com/noor-restaurant',
    twitter: 'https://twitter.com/noor-restaurant'
  },
  stats: {
    chefs: 12,
    dishes: 48,
    wineLabels: 500,
    yearsExperience: 12,
    rating: 4.9
  },
  michelin: {
    recognized: true,
    since: 2022,
    status: 'Michelin Recommended'
  }
} as const;

export const RESTAURANT_HOURS_DISPLAY = RESTAURANT_INFO.hours;

export const RESTAURANT_CONTACT_DISPLAY = {
  phone: RESTAURANT_INFO.contact.phone,
  email: RESTAURANT_INFO.contact.email,
  address: RESTAURANT_INFO.location.address
} as const;
