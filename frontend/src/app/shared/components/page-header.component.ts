import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Page Header Component
 * Eliminates duplication across: Menu, Checkout, Reservations, About, Privacy, Terms
 * 
 * Usage:
 * <app-page-header 
 *   label="Our Story"
 *   title="About NooR"
 *   subtitle="Award-winning fine dining restaurant in NYC"
 *   [showDivider]="true">
 * </app-page-header>
 */

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-header">
      <div class="page-header-bg"></div>
      <div class="container p-header-section text-center">
        @if (label) {
          <span class="section-label">{{ label }}</span>
        }
        <h1 class="section-title title-lg">{{ title }}</h1>
        @if (showDivider) {
          <div class="divider"></div>
        }
        @if (subtitle) {
          <p class="section-subtitle mt-4 mx-auto mb-0">{{ subtitle }}</p>
        }
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class PageHeaderComponent {
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showDivider: boolean = true;
}
