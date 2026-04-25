import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../../core/models/review.model';
import { IconComponent } from '../icon.component';

/**
 * Reusable Review Card Component
 * Eliminates duplication across: Home reviews section
 */

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './review-card.component.html'
})
export class ReviewCardComponent {
  @Input() review!: Review;
}
