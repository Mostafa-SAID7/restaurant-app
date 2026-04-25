/**
 * Team Members - Centralized constant
 * Used across: About, Home, etc.
 */

export const TEAM_MEMBERS = [
  {
    id: 'marcus-voss',
    name: 'Marcus Voss',
    role: 'Executive Chef',
    icon: 'chef',
    bio: 'Executive Chef Marcus Voss brings 20 years of Michelin-starred culinary excellence from prestigious European fine dining establishments. His innovative approach to farm-to-table cuisine and theatrical presentation has earned NooR Michelin recognition since 2022. Chef Voss leads a team of 12 expert chefs in crafting 48+ signature dishes that tell a story with every plate.',
    expertise: ['Michelin-Starred', 'Farm-to-Table', 'Contemporary Fine Dining', 'Culinary Storytelling']
  },
  {
    id: 'julian-reed',
    name: 'Julian Reed',
    role: 'Head Sommelier',
    icon: 'wine',
    bio: 'Head Sommelier Julian Reed is the curator of our award-winning wine cellar featuring 500+ labels from 30+ countries. With expertise in wine pairing and sommelier-led experiences, Julian creates the perfect narrative in every bottle, elevating our farm-to-table cuisine with expertly matched wines.',
    expertise: ['Wine Pairing', 'Sommelier', 'Wine Curation', 'Beverage Program']
  },
  {
    id: 'evelyn-noir',
    name: 'Evelyn Noir',
    role: 'Creative Director',
    icon: 'sparkles',
    bio: 'Creative Director Evelyn Noir is the architect of the NooR aesthetic, ensuring every guest experience is visually stunning and immersive. Her theatrical presentation philosophy transforms each dining experience into a culinary storytelling event that guests never forget.',
    expertise: ['Theatrical Presentation', 'Immersive Experience', 'Culinary Storytelling', 'Design']
  }
] as const;

export type TeamMember = typeof TEAM_MEMBERS[number];
