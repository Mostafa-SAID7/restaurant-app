import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Card Component
 * Generic wrapper for: featured items, menu items, reviews, team cards, award cards
 * 
 * Usage:
 * <app-card [featured]="true" [hoverable]="true">
 *   <div class="card-content">
 *     <!-- Your content here -->
 *   </div>
 * </app-card>
 */

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="card"
      [class.featured]="featured"
      [class.hoverable]="hoverable"
      [class.shadow-accent]="shadowAccent">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class CardComponent {
  @Input() featured: boolean = false;
  @Input() hoverable: boolean = true;
  @Input() shadowAccent: boolean = false;
}
