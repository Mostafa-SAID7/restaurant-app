import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../../core/models/menu-item.model';
import { IconComponent } from '../icon.component';

@Component({
  selector: 'app-menu-item-modal',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './menu-item-modal.component.html',
  styles: [`
    @keyframes fade-in {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scale-in {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    :host ::ng-deep .animate-fade-in {
      animation: fade-in 0.3s ease-out;
    }

    :host ::ng-deep .animate-scale-in {
      animation: scale-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
  `]
})
export class MenuItemModalComponent {
  @Input() item?: MenuItem;
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();
  @Output() addToCart = new EventEmitter<MenuItem>();

  Math = Math;

  onAddToCart(): void {
    if (this.item) {
      this.addToCart.emit(this.item);
      this.close.emit();
    }
  }
}
