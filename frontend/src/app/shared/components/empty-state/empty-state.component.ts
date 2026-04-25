import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon.component';

/**
 * Reusable Empty State Component
 * Eliminates duplication across: Menu search, Checkout cart, etc.
 */

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {
  @Input() icon: string = 'inbox';
  @Input() title: string = 'No items found';
  @Input() message: string = '';
  @Input() showAction: boolean = false;
  @Input() actionLabel: string = 'Try Again';
  @Output() action = new EventEmitter<void>();

  onActionClick(): void {
    this.action.emit();
  }
}
