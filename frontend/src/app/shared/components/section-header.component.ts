import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Section Header Component
 * Eliminates duplication across: Home (3x), Menu, Checkout, Reservations, About (4x)
 * 
 * Usage:
 * <app-section-header 
 *   label="What We Stand For"
 *   title="Our Fine Dining Philosophy"
 *   [showDivider]="true">
 * </app-section-header>
 */

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="section-header">
      @if (label) {
        <span class="section-label">{{ label }}</span>
      }
      <h2 class="section-title">{{ title }}</h2>
      @if (showDivider) {
        <div class="divider"></div>
      }
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class SectionHeaderComponent {
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() showDivider: boolean = true;
}
