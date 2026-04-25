/**
 * Image Mapping Constants
 * Maps menu item names to their corresponding image files in /public folder
 */

export const IMAGE_MAP: Record<string, string> = {
  // Appetizers
  'Charred Octopus': 'CharredOctopus.jpg',
  'Truffle Arancini': 'TruffleArancini.jpg',
  'Steak Tartare': 'SteakTartare.jpg',

  // Mains
  'Wagyu Beef Tenderloin': 'WagyuBeefTenderloin.jpg',
  'Pan-Seared Halibut': 'Pan-SearedHalibut.jpg',
  'Duck Confit': 'DuckConfit.jpg',
  'Mushroom Risotto': 'MushroomRisotto.jpg',

  // Desserts
  'Chocolate Noir': 'ChocolateNoir.jpg',
  'Crème Brûlée': 'CrèmeBrûlée.jpg',
  'Passion Fruit Tart': 'PassionFruitTart.jpg',

  // Drinks
  'Noir Negroni': 'NoirNegroni.jpg',
  'Smoked Old Fashioned': 'SmokedOldFashioned.jpg',
  'French 75': 'French75.jpg',

  // Specials
  'Wagyu Sliders (Special)': 'WagyuSliders.jpg',
};

/**
 * Get image path for a menu item by name
 * Returns the image path if found, otherwise returns undefined
 */
export function getImagePath(itemName: string): string | undefined {
  return IMAGE_MAP[itemName];
}
