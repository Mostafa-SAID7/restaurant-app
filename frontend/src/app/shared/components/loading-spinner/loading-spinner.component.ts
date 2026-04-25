import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Loading Spinner Component
 * Consolidates loading states across: Home, Menu, Checkout
 */

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loading-spinner.component.html',
  styleUrls: ['./loading-spinner.component.scss']
})
export class LoadingSpinnerComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() message: string = '';
}
