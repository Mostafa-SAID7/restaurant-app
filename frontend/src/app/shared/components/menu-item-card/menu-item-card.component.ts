import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../../core/models/menu-item.model';
import { IconComponent } from '../icon.component';

/**
 * Reusable Menu Item Card Component
 * Eliminates duplication across: Home featured items + Menu all items
 */

@Component({
  selector: 'app-menu-item-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './menu-item-card.component.html'
})
export class MenuItemCardComponent {
  @Input() item!: MenuItem;
  @Input() categoryIcon: string = 'food';
  @Output() addToCart = new EventEmitter<MenuItem>();

  onAddClick(): void {
    this.addToCart.emit(this.item);
  }
}
