import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Loading Spinner Component
 * Consolidates loading states across: Home, Menu, Checkout
 * 
 * Usage:
 * <app-loading-spinner [message]="'Loading menu...'"></app-loading-spinner>
 */

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loading-container">
      <div class="spinner spinner-lg"></div>
      @if (message) {
        <p class="loading-message">{{ message }}</p>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .loading-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: var(--space-12);
      gap: var(--space-4);
    }

    .loading-message {
      color: var(--color-text-muted);
      font-size: 0.95rem;
      margin: 0;
    }
  `]
})
export class LoadingSpinnerComponent {
  @Input() message: string = '';
}
