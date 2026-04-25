import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Review } from '../../core/models/review.model';
import { IconComponent } from './icon.component';

/**
 * Reusable Review Card Component
 * Eliminates duplication across: Home reviews section
 * 
 * Usage:
 * <app-review-card [review]="review"></app-review-card>
 */

@Component({
  selector: 'app-review-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="review-card card">
      <div class="review-header">
        <div class="reviewer-avatar">{{ review.customerName[0] }}</div>
        <div class="reviewer-info">
          <strong class="reviewer-name">{{ review.customerName }}</strong>
          <div class="stars">
            @for (s of [1,2,3,4,5]; track s) {
              @if (s <= review.rating) {
                <app-icon name="starFill" class="star text-accent"></app-icon>
              } @else {
                <app-icon name="star" class="star text-muted"></app-icon>
              }
            }
          </div>
        </div>
        @if (review.verified) {
          <span class="verified-badge">
            <app-icon name="check" strokeWidth="2.5" class="mr-1"></app-icon>
            Verified
          </span>
        }
      </div>
      <p class="review-text">"{{ review.comment }}"</p>
      <span class="review-date text-muted">{{ review.date | date:'MMMM d, yyyy' }}</span>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }

    .review-card {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
      }
    }

    .review-header {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
    }

    .reviewer-avatar {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-accent), var(--color-accent-alt));
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.125rem;
      flex-shrink: 0;
    }

    .reviewer-info {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    .reviewer-name {
      font-size: 0.95rem;
      color: var(--color-text);
    }

    .stars {
      display: flex;
      gap: 0.25rem;
    }

    .star {
      width: 1rem;
      height: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .verified-badge {
      display: flex;
      align-items: center;
      gap: 0.25rem;
      padding: 0.375rem 0.75rem;
      background: rgba(34, 197, 94, 0.1);
      color: #22c55e;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      font-weight: 600;
      white-space: nowrap;
    }

    .review-text {
      font-size: 0.95rem;
      line-height: 1.6;
      color: var(--color-text);
      margin: 0;
      font-style: italic;
    }

    .review-date {
      font-size: 0.8rem;
    }

    .mr-1 {
      margin-right: 0.25rem;
    }

    .text-accent {
      color: var(--color-accent);
    }

    .text-muted {
      color: var(--color-text-muted);
    }
  `]
})
export class ReviewCardComponent {
  @Input() review!: Review;
}
