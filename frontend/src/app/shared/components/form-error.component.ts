import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';

/**
 * Reusable Form Error Component
 * Eliminates duplication across: Checkout, Reservations, etc.
 * 
 * Usage:
 * <app-form-error 
 *   [error]="form.get('email')?.errors"
 *   [touched]="form.get('email')?.touched">
 * </app-form-error>
 */

@Component({
  selector: 'app-form-error',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    @if (shouldShow()) {
      <div class="form-error">
        <app-icon name="alertCircle" class="error-icon"></app-icon>
        <span class="error-message">{{ errorMessage }}</span>
      </div>
    }
  `,
  styles: [`
    :host {
      display: block;
    }

    .form-error {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.75rem 1rem;
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 0.375rem;
      color: #ef4444;
      font-size: 0.875rem;
      margin-top: 0.375rem;
    }

    .error-icon {
      width: 1rem;
      height: 1rem;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .error-message {
      line-height: 1.4;
    }
  `]
})
export class FormErrorComponent {
  @Input() error: any = null;
  @Input() touched: boolean = false;
  @Input() customMessage: string = '';

  get errorMessage(): string {
    if (this.customMessage) return this.customMessage;
    if (!this.error) return '';

    if (this.error['required']) return 'This field is required';
    if (this.error['email']) return 'Please enter a valid email address';
    if (this.error['minlength']) return `Minimum length is ${this.error['minlength'].requiredLength}`;
    if (this.error['maxlength']) return `Maximum length is ${this.error['maxlength'].requiredLength}`;
    if (this.error['pattern']) return 'Invalid format';
    if (this.error['min']) return `Minimum value is ${this.error['min'].min}`;
    if (this.error['max']) return `Maximum value is ${this.error['max'].max}`;

    return 'Invalid input';
  }

  shouldShow(): boolean {
    return this.touched && !!this.error;
  }
}
