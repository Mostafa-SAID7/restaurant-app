import { SeoMetadata } from '../services/seo.service';

export const SEO_CONFIG = {
  baseUrl: 'https://noor73.netlify.app',
  siteName: 'NooR — Fine Dining',
  defaultImage: 'https://noor73.netlify.app/assets/og-image.jpg',
  
  pages: {
    home: {
      title: 'NooR — Fine Dining | Contemporary Restaurant',
      description: 'Experience contemporary fine dining at its finest. Reserve your table, explore our curated menu, and indulge in culinary excellence at NooR.',
      keywords: 'fine dining, restaurant, contemporary cuisine, fine dining restaurant, book table, reservations',
      ogType: 'website',
      canonical: 'https://noor73.netlify.app/'
    } as SeoMetadata,

    menu: {
      title: 'Our Menu — NooR Fine Dining',
      description: 'Explore our curated menu featuring contemporary dishes crafted with premium ingredients. Discover our seasonal specials and signature creations.',
      keywords: 'menu, fine dining menu, contemporary cuisine, dishes, seasonal specials, tasting menu',
      ogType: 'website',
      canonical: 'https://noor73.netlify.app/menu'
    } as SeoMetadata,

    reservations: {
      title: 'Reserve a Table — NooR Fine Dining',
      description: 'Book your table at NooR. Reserve your spot for an unforgettable fine dining experience. Easy online reservations available.',
      keywords: 'reservations, book table, reserve table, fine dining reservations, restaurant booking',
      ogType: 'website',
      canonical: 'https://noor73.netlify.app/reservations'
    } as SeoMetadata,

    checkout: {
      title: 'Order Online — NooR Fine Dining',
      description: 'Order online from NooR. Choose from our menu for dine-in, takeout, or delivery. Quick and easy checkout process.',
      keywords: 'order online, food delivery, takeout, dine-in, online ordering, restaurant delivery',
      ogType: 'website',
      canonical: 'https://noor73.netlify.app/checkout'
    } as SeoMetadata,

    about: {
      title: 'About & Contact — NooR Fine Dining',
      description: 'Learn about NooR\'s story, our culinary philosophy, and meet our team. Contact us for inquiries, events, or special occasions.',
      keywords: 'about us, restaurant story, culinary philosophy, contact, fine dining experience',
      ogType: 'website',
      canonical: 'https://noor73.netlify.app/about'
    } as SeoMetadata,

    privacy: {
      title: 'Privacy Policy — NooR',
      description: 'Read NooR\'s privacy policy to understand how we collect, use, and protect your personal information.',
      keywords: 'privacy policy, data protection, personal information',
      ogType: 'website',
      canonical: 'https://noor73.netlify.app/privacy',
      robots: 'noindex, follow'
    } as SeoMetadata,

    terms: {
      title: 'Terms of Service — NooR',
      description: 'Review NooR\'s terms of service and conditions for using our website and services.',
      keywords: 'terms of service, terms and conditions, legal',
      ogType: 'website',
      canonical: 'https://noor73.netlify.app/terms',
      robots: 'noindex, follow'
    } as SeoMetadata
  },

  restaurant: {
    name: 'NooR',
    description: 'Contemporary fine dining with a noir aesthetic',
    image: 'https://noor73.netlify.app/assets/restaurant-hero.jpg',
    url: 'https://noor73.netlify.app',
    telephone: '+1-555-NOOR',
    email: 'info@noor-restaurant.com',
    address: {
      streetAddress: '123 Culinary Lane',
      addressLocality: 'New York',
      addressRegion: 'NY',
      postalCode: '10001',
      addressCountry: 'US'
    },
    openingHours: [
      { dayOfWeek: 'Monday', opens: '17:00', closes: '23:00' },
      { dayOfWeek: 'Tuesday', opens: '17:00', closes: '23:00' },
      { dayOfWeek: 'Wednesday', opens: '17:00', closes: '23:00' },
      { dayOfWeek: 'Thursday', opens: '17:00', closes: '23:00' },
      { dayOfWeek: 'Friday', opens: '17:00', closes: '00:00' },
      { dayOfWeek: 'Saturday', opens: '17:00', closes: '00:00' },
      { dayOfWeek: 'Sunday', opens: '17:00', closes: '22:00' }
    ],
    priceRange: '$$$',
    servesCuisine: ['Contemporary', 'French', 'Modern'],
    aggregateRating: {
      ratingValue: 4.8,
      reviewCount: 127
    }
  }
};
