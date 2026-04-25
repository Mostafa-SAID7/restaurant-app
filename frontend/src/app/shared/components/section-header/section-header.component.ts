import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Section Header Component
 * Eliminates duplication across: Home (3x), Menu, Checkout, Reservations, About (4x)
 */

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent {
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showDivider: boolean = true;
  @Input() alignment: 'center' | 'left' = 'center';
}
