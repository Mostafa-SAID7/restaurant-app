import { Injectable } from '@angular/core';
import { CATEGORY_ICONS } from '../../data/constants/categories';

/**
 * Category Icon Mapper Service
 * Consolidates icon mapping logic used across: Home, Menu, Checkout
 * Eliminates duplicate getCategoryIcon() methods
 */

@Injectable({
  providedIn: 'root'
})
export class CategoryIconMapperService {
  /**
   * Get icon name for a given category
   * @param category Menu category name
   * @returns Icon name from centralized constants
   */
  getIcon(category: string): string {
    return CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS] ?? 'food';
  }

  /**
   * Get all category icons
   * @returns Record of all category-to-icon mappings
   */
  getAllIcons() {
    return CATEGORY_ICONS;
  }
}
