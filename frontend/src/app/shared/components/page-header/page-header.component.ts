import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Reusable Page Header Component
 * Eliminates duplication across: Menu, Checkout, Reservations, About, Privacy, Terms
 */

@Component({
  selector: 'app-page-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() showDivider: boolean = true;
}
