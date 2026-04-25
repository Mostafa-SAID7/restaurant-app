import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Form Row Component (2-column layout)
 * Eliminates duplication across: Checkout (2x), Reservations, About
 * 
 * Usage:
 * <app-form-row>
 *   <div class="form-group">
 *     <label class="form-label">First Name</label>
 *     <input class="form-input" type="text">
 *   </div>
 *   <div class="form-group">
 *     <label class="form-label">Last Name</label>
 *     <input class="form-input" type="text">
 *   </div>
 * </app-form-row>
 */

@Component({
  selector: 'app-form-row',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="form-row-2">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class FormRowComponent {
  @Input() gap: string = 'var(--space-4)';
}
