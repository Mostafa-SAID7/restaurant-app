import { Component, inject, signal, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IconComponent],
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300"
      [ngClass]="{
        'bg-black/60 backdrop-blur-xl': !isScrolled(),
        'bg-black/95 border-b border-white/10 shadow-2xl': isScrolled()
      }"
    >
      <div class="container h-full flex items-center justify-between gap-6">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-2 font-serif text-xl font-bold text-text no-underline hover:opacity-85 transition-opacity group">
          <app-icon name="noorLogo" class="text-accent text-lg animate-pulse group-hover:scale-110 transition-transform"></app-icon>
          <span class="tracking-tight">NooR</span>
        </a>

        <!-- Desktop Nav -->
        <nav 
          class="hidden md:flex items-center gap-1 transition-all duration-300"
          [class.md:flex]="true"
        >
          @for (link of [
            { path: '/', label: 'Home', exact: true },
            { path: '/menu', label: 'Menu' },
            { path: '/reservations', label: 'Reserve' },
            { path: '/checkout', label: 'Order Online' },
            { path: '/about', label: 'About' }
          ]; track link.path) {
            <a 
              [routerLink]="link.path" 
              routerLinkActive="text-accent" 
              [routerLinkActiveOptions]="{exact: link.exact || false}" 
              class="px-4 py-2 rounded-sm text-[13px] font-semibold text-text-muted no-underline hover:text-text hover:bg-white/5 transition-all relative group"
            >
              {{ link.label }}
              <span 
                class="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent rounded-full transition-all duration-300 group-[.text-accent]:w-4"
              ></span>
            </a>
          }
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-4">
          <!-- Cart Button -->
          <a routerLink="/checkout" class="relative flex items-center justify-center w-10 h-10 rounded-md text-text-muted bg-white/5 border border-white/10 hover:text-accent hover:border-accent hover:bg-accent/5 transition-all" aria-label="View cart">
            <app-icon name="cart" strokeWidth="2" class="w-5 h-5"></app-icon>
            @if (cartCount() > 0) {
              <span class="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-lg shadow-accent/20 animate-fade-in">
                {{ cartCount() }}
              </span>
            }
          </a>

          <!-- Reserve CTA (Desktop only) -->
          <a routerLink="/reservations" class="hidden lg:flex items-center gap-2 px-5 py-2.5 bg-accent text-white text-[13px] font-bold rounded-full hover:bg-accent-hover hover:-translate-y-0.5 transition-all shadow-lg shadow-accent/20">
            Reserve a Table
          </a>

          <!-- Mobile hamburger -->
          <button 
            class="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-md bg-white/5 border border-white/10" 
            (click)="menuOpen.set(!menuOpen())" 
            aria-label="Toggle menu"
          >
            <span class="block w-5 h-0.5 bg-text transition-all duration-300" [class.rotate-45]="menuOpen()" [class.translate-y-2]="menuOpen()"></span>
            <span class="block w-5 h-0.5 bg-text transition-all duration-300" [class.opacity-0]="menuOpen()"></span>
            <span class="block w-5 h-0.5 bg-text transition-all duration-300" [class.-rotate-45]="menuOpen()" [class.-translate-y-2]="menuOpen()"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Overlay -->
      <div 
        class="md:hidden absolute top-[72px] left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-500 overflow-hidden"
        [class.max-h-0]="!menuOpen()"
        [class.max-h-96]="menuOpen()"
        [class.opacity-0]="!menuOpen()"
        [class.opacity-100]="menuOpen()"
      >
        <nav class="flex flex-col p-6 gap-2">
          @for (link of [
            { path: '/', label: 'Home' },
            { path: '/menu', label: 'Menu' },
            { path: '/reservations', label: 'Reserve' },
            { path: '/checkout', label: 'Order Online' },
            { path: '/about', label: 'About' }
          ]; track link.path) {
            <a 
              [routerLink]="link.path" 
              routerLinkActive="text-accent bg-white/5" 
              class="px-4 py-3 rounded-md text-base font-medium text-text-muted hover:text-text hover:bg-white/5 transition-all flex items-center justify-between"
              (click)="menuOpen.set(false)"
            >
              {{ link.label }}
              <app-icon name="chevronRight" class="w-4 h-4 opacity-0 group-[.text-accent]:opacity-100"></app-icon>
            </a>
          }
          <a routerLink="/reservations" class="mt-4 w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-xl" (click)="menuOpen.set(false)">
            Reserve a Table
          </a>
        </nav>
      </div>
    </header>
  `
})
export class HeaderComponent {
  private cart = inject(CartService);

  cartCount  = this.cart.totalItems;
  isScrolled = signal(false);
  menuOpen   = signal(false);

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }
}
