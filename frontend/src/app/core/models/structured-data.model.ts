export interface RestaurantSchema {
  name: string;
  description: string;
  image: string;
  url: string;
  telephone: string;
  email?: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  openingHoursSpecification?: Array<{
    dayOfWeek: string;
    opens: string;
    closes: string;
  }>;
  priceRange: string;
  servesCuisine: string | string[];
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export interface MenuItemSchema {
  name: string;
  description: string;
  image: string;
  price: number;
  priceCurrency: string;
}

export interface ReviewSchema {
  author: string;
  reviewRating: number;
  reviewBody: string;
  datePublished: string;
}
