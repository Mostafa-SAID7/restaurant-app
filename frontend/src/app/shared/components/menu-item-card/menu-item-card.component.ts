import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-item-card.component.html'
})
export class MenuItemCardComponent {
  @Input() item?: MenuItem;
  @Input() categoryIcon: string = 'food';
  @Input() isLoading: boolean = false;
  @Output() addToCart = new EventEmitter<MenuItem>();

  onAddClick(): void {
    if (this.item) {
      this.addToCart.emit(this.item);
    }
  }
}
