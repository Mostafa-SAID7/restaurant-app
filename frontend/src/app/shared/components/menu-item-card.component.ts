import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../core/models/menu-item.model';
import { IconComponent } from './icon.component';

/**
 * Reusable Menu Item Card Component
 * Eliminates duplication across: Home featured items + Menu all items
 * 
 * Usage:
 * <app-menu-item-card 
 *   [item]="menuItem"
 *   [categoryIcon]="'category_mains'"
 *   (addToCart)="onAddToCart($event)">
 * </app-menu-item-card>
 */

@Component({
  selector: 'app-menu-item-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <article class="menu-item-card card">
      <div class="menu-item-image">
        <div class="image-placeholder">
          <app-icon [name]="categoryIcon" strokeWidth="1"></app-icon>
        </div>
        <div class="card-overlay">
          <span class="badge badge-accent">{{ item.category }}</span>
          @if (item.tags?.includes('chef-special')) {
            <span class="chef-badge">Chef's Special</span>
          }
          @if (item.tags?.includes('vegetarian')) {
            <span class="veg-badge"><app-icon name="leaf" class="mr-1"></app-icon>Vegetarian</span>
          }
        </div>
      </div>
      <div class="menu-item-body">
        <h3 class="menu-item-name">{{ item.name }}</h3>
        <p class="menu-item-description text-muted">{{ item.description }}</p>
        @if (item.allergens && item.allergens.length > 0) {
          <div class="allergens">
            <small class="text-muted">Allergens: {{ item.allergens.join(', ') }}</small>
          </div>
        }
        <div class="menu-item-footer">
          <span class="price">\${{ item.price }}</span>
          <button class="btn btn-primary btn-sm" (click)="onAddClick()">
            Add to Order
          </button>
        </div>
      </div>
    </article>
  `,
  styles: [`
    :host {
      display: block;
    }

    .menu-item-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: hidden;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-4px);
        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
      }
    }

    .menu-item-image {
      position: relative;
      width: 100%;
      aspect-ratio: 1;
      overflow: hidden;
      background: var(--color-surface);
    }

    .image-placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-surface-alt) 100%);
      color: var(--color-text-muted);
      font-size: 3rem;
    }

    .card-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1rem;
      opacity: 0;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 1;
      }
    }

    .badge {
      align-self: flex-start;
      padding: 0.375rem 0.75rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .badge-accent {
      background: var(--color-accent);
      color: white;
    }

    .chef-badge,
    .veg-badge {
      align-self: flex-start;
      padding: 0.375rem 0.75rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 600;
      background: rgba(255, 255, 255, 0.2);
      color: white;
      display: flex;
      align-items: center;
    }

    .menu-item-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      padding: 1.5rem;
      gap: 0.75rem;
    }

    .menu-item-name {
      font-size: 1.125rem;
      font-weight: 600;
      margin: 0;
      color: var(--color-text);
    }

    .menu-item-description {
      font-size: 0.875rem;
      line-height: 1.5;
      margin: 0;
      flex: 1;
    }

    .allergens {
      margin-top: 0.5rem;
    }

    .menu-item-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      margin-top: auto;
      padding-top: 1rem;
      border-top: 1px solid var(--color-border);
    }

    .price {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--color-accent);
    }

    .btn {
      flex: 1;
    }
  `]
})
export class MenuItemCardComponent {
  @Input() item!: MenuItem;
  @Input() categoryIcon: string = 'food';
  @Output() addToCart = new EventEmitter<MenuItem>();

  onAddClick(): void {
    this.addToCart.emit(this.item);
  }
}
