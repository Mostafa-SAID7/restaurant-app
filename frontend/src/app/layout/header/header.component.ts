import { Component, inject, signal, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header 
      class="fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-500"
      [ngClass]="{
        'bg-black/40 backdrop-blur-md': !isScrolled(),
        'bg-black/95 shadow-2xl shadow-black/50': isScrolled()
      }"
    >
      <!-- Animated Shimmer Background -->
      <div 
        class="absolute inset-0 opacity-20 pointer-events-none transition-opacity duration-1000"
        [class.opacity-40]="isScrolled()"
      >
        <div class="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent -translate-x-full animate-shimmer"></div>
      </div>

      <div class="container h-full flex items-center justify-between gap-6 relative z-10">
        <!-- Logo -->
        <a routerLink="/" class="flex items-center gap-2 font-serif text-xl font-bold text-text no-underline hover:opacity-85 transition-opacity group">
          <app-icon name="noorLogo" class="text-accent text-lg animate-pulse group-hover:scale-110 transition-transform"></app-icon>
          <span class="tracking-tight">NooR</span>
        </a>

        <!-- Desktop Nav -->
        <nav class="hidden md:flex items-center gap-1">
          @for (link of navLinks; track link.path) {
            <a 
              [routerLink]="link.path" 
              routerLinkActive="text-accent" 
              [routerLinkActiveOptions]="{exact: link.exact ?? false}" 
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
              <span class="absolute -top-1.5 -right-1.5 bg-accent text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg shadow-accent/20 animate-fade-in">
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
            class="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10 rounded-md bg-white/5 border border-white/10" 
            (click)="toggleMenu()" 
            [attr.aria-expanded]="menuOpen()"
            aria-label="Toggle menu"
          >
            <span class="block w-5 h-0.5 bg-text rounded-full transition-all duration-300 origin-center"
                  [class.rotate-45]="menuOpen()"
                  [class.translate-y-[7px]]="menuOpen()"></span>
            <span class="block w-5 h-0.5 bg-text rounded-full transition-all duration-300"
                  [class.opacity-0]="menuOpen()"
                  [class.scale-x-0]="menuOpen()"></span>
            <span class="block w-5 h-0.5 bg-text rounded-full transition-all duration-300 origin-center"
                  [class.-rotate-45]="menuOpen()"
                  [class.-translate-y-[7px]]="menuOpen()"></span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown (positioned relative to header, uses shadow to separate) -->
      <div 
        class="md:hidden absolute top-full left-0 right-0 bg-gradient-to-b from-black/80 via-black/90 to-black/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl shadow-black/40 transition-all duration-500 ease-out overflow-hidden z-40"
        [style.maxHeight]="menuOpen() ? '500px' : '0px'"
        [style.opacity]="menuOpen() ? '1' : '0'"
      >
        <nav class="flex flex-col px-5 py-4 gap-1">
          @for (link of navLinks; track link.path) {
            <a 
              [routerLink]="link.path" 
              routerLinkActive="active-nav-link"
              [routerLinkActiveOptions]="{exact: link.exact ?? false}"
              class="flex items-center justify-between px-4 py-3.5 rounded-xl text-base font-medium text-text-muted hover:text-text hover:bg-white/5 transition-all group"
              (click)="menuOpen.set(false)"
              #rla="routerLinkActive"
            >
              <span [class.text-accent]="rla.isActive">{{ link.label }}</span>
              <span class="w-5 h-5 flex items-center justify-center rounded-full transition-all"
                    [class.bg-accent]="rla.isActive"
                    [class.text-white]="rla.isActive"
                    [class.opacity-0]="!rla.isActive">
                <app-icon name="chevronRight" class="text-xs"></app-icon>
              </span>
            </a>
          }
          <div class="pt-3 pb-2">
            <a routerLink="/reservations" 
               class="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all shadow-lg shadow-accent/20" 
               (click)="menuOpen.set(false)">
              Reserve a Table
            </a>
          </div>
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

  readonly navLinks = [
    { path: '/', label: 'Home', exact: true },
    { path: '/menu', label: 'Menu' },
    { path: '/reservations', label: 'Reserve' },
    { path: '/checkout', label: 'Order Online' },
    { path: '/about', label: 'About' },
  ];

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 20);
  }
}
