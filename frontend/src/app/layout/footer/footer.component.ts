import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';

import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-surface pt-20 pb-10">
      <div class="container">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">
          <!-- Brand -->
          <div class="space-y-6">
            <div class="flex items-center gap-2 font-serif text-2xl font-bold text-text">
              <app-icon name="noorLogo" class="text-accent text-xl"></app-icon>
              <span class="tracking-tight">NooR</span>
            </div>
            <p class="text-sm text-text-muted leading-relaxed max-w-xs">
              Where every meal is a masterpiece. Experience contemporary fine dining in a noir setting, meticulously crafted for the discerning palate.
            </p>
            <div class="flex gap-3">
              @for (social of [
                { name: 'instagram', label: 'Instagram' },
                { name: 'facebook', label: 'Facebook' },
                { name: 'twitter', label: 'Twitter' }
              ]; track social.name) {
                <a href="#" [attr.aria-label]="social.label" class="flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-text-muted hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300">
                  <app-icon [name]="social.name" strokeWidth="2" class="w-5 h-5"></app-icon>
                </a>
              }
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h4 class="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-8">Navigate</h4>
            <ul class="space-y-4">
              @for (link of [
                { path: '/', label: 'Home' },
                { path: '/menu', label: 'Our Menu' },
                { path: '/reservations', label: 'Reservations' },
                { path: '/checkout', label: 'Order Online' },
                { path: '/about', label: 'About Us' }
              ]; track link.path) {
                <li>
                  <a [routerLink]="link.path" class="text-sm text-text-muted hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                    <span class="w-1.5 h-1.5 rounded-full bg-accent/0 group-hover:bg-accent transition-all"></span>
                    {{ link.label }}
                  </a>
                </li>
              }
            </ul>
          </div>

          <!-- Hours -->
          <div>
            <h4 class="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-8">Hours</h4>
            <ul class="space-y-4">
              @for (item of [
                { days: 'Mon – Thu', time: '6pm – 11pm' },
                { days: 'Fri – Sat', time: '6pm – 1am' },
                { days: 'Sunday', time: '6pm – 10pm' },
                { days: 'Lunch', time: 'Fri – Sun 12pm' }
              ]; track item.days) {
                <li class="flex justify-between text-sm text-text-muted border-b border-white/5 pb-2 last:border-0">
                  <span>{{ item.days }}</span>
                  <span class="text-text font-medium">{{ item.time }}</span>
                </li>
              }
            </ul>
          </div>

          <!-- Contact -->
          <div class="space-y-8">
            <div>
              <h4 class="font-sans text-[11px] font-bold uppercase tracking-[0.2em] text-accent mb-6">Contact</h4>
              <ul class="space-y-5">
                <li class="flex gap-4 items-start group">
                  <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-accent group-hover:bg-accent/10 transition-colors">
                    <app-icon name="mapPin" class="w-5 h-5"></app-icon>
                  </div>
                  <span class="text-sm text-text-muted leading-relaxed">18 West 29th Street<br>New York, NY 10001</span>
                </li>
                <li class="flex gap-4 items-start group">
                  <div class="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 text-accent group-hover:bg-accent/10 transition-colors">
                    <app-icon name="phone" class="w-5 h-5"></app-icon>
                  </div>
                  <a href="tel:+15556667" class="text-sm text-text-muted hover:text-text transition-colors mt-2.5">+(155) 556-667</a>
                </li>
              </ul>
            </div>
            <a routerLink="/reservations" class="w-full flex items-center justify-center gap-2 px-6 py-4 bg-accent text-white font-bold rounded-xl hover:bg-accent-hover transition-all shadow-lg shadow-accent/20">
              Reserve a Table
            </a>
          </div>
        </div>

        <div class="flex flex-col md:flex-row items-center justify-between pt-10 gap-6">
          <p class="text-xs text-text-dim">© 2026 NooR. All rights reserved. Meticulously crafted for excellence.</p>
          <div class="flex gap-8">
            <a routerLink="/privacy" class="text-xs text-text-dim hover:text-accent transition-colors">Privacy Policy</a>
            <a routerLink="/terms" class="text-xs text-text-dim hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {}
