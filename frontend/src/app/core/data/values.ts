/**
 * Restaurant Values & Philosophy - Centralized constant
 * Used across: About, Home, etc.
 */

export const RESTAURANT_VALUES = [
  {
    id: 'farm-to-table',
    title: 'Farm-to-Table Excellence',
    icon: 'seedling',
    description: 'We partner exclusively with certified organic farms and local producers, maintaining a zero-food-waste kitchen policy. Our seasonal menu celebrates locally sourced ingredients and sustainable practices.'
  },
  {
    id: 'culinary-storytelling',
    title: 'Culinary Storytelling',
    icon: 'sparkles',
    description: 'Every dish is a narrative. Our theatrical presentation and immersive dining experience transform meals into unforgettable culinary journeys that engage all senses.'
  },
  {
    id: 'genuine-hospitality',
    title: 'Genuine Hospitality',
    icon: 'handshake',
    description: 'We believe great food is made even better by genuine warmth and attentive service. Every guest is treated as a partner in our culinary story.'
  }
] as const;

export type RestaurantValue = typeof RESTAURANT_VALUES[number];

export const RESTAURANT_AWARDS = [
  {
    id: 'michelin-recommended',
    title: 'Michelin Recommended',
    icon: 'trophy',
    description: 'Recognized by Michelin Guide since 2022 for our innovative approach to fine dining and commitment to culinary excellence.'
  },
  {
    id: 'chef-driven',
    title: 'Chef-Driven Cuisine',
    icon: 'star',
    description: 'Led by Executive Chef Marcus Voss with 20 years of Michelin-starred experience, our kitchen represents the pinnacle of contemporary fine dining.'
  },
  {
    id: 'wine-cellar',
    title: 'Award-Winning Wine Cellar',
    icon: 'wine',
    description: 'Our sommelier-curated collection of 500+ wine labels from 30+ countries has earned recognition for excellence in wine pairing and curation.'
  }
] as const;

export type RestaurantAward = typeof RESTAURANT_AWARDS[number];
