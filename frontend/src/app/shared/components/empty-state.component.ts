import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';

/**
 * Reusable Empty State Component
 * Eliminates duplication across: Menu search, Checkout cart, etc.
 * 
 * Usage:
 * <app-empty-state 
 *   icon="search"
 *   title="No dishes found"
 *   message="Try adjusting your search terms"
 *   [showAction]="true"
 *   actionLabel="Clear Search"
 *   (action)="onClearSearch()">
 * </app-empty-state>
 */

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="empty-state">
      <div class="empty-state-icon">
        <app-icon [name]="icon" class="icon-lg"></app-icon>
      </div>
      <h3 class="empty-state-title">{{ title }}</h3>
      @if (message) {
        <p class="empty-state-message">{{ message }}</p>
      }
      @if (showAction) {
        <button class="btn btn-ghost" (click)="onActionClick()">
          {{ actionLabel }}
        </button>
      }
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      padding: 3rem 1.5rem;
      text-align: center;
      min-height: 300px;
    }

    .empty-state-icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      background: var(--color-surface);
      color: var(--color-text-muted);
    }

    .icon-lg {
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .empty-state-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--color-text);
      margin: 0;
    }

    .empty-state-message {
      font-size: 0.95rem;
      color: var(--color-text-muted);
      margin: 0;
      max-width: 400px;
    }

    .btn {
      margin-top: 0.5rem;
    }
  `]
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
