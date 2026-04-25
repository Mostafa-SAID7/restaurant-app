import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4 pointer-events-none">
      <!-- Chat Tooltip -->
      <div 
        *ngIf="showTooltip"
        class="bg-surface/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl mb-2 animate-in fade-in slide-in-from-bottom-4 duration-500 pointer-events-auto max-w-[200px]"
      >
        <p class="text-xs text-text-muted leading-relaxed">
          Questions? Chat with us directly on <span class="text-accent font-bold">WhatsApp</span>
        </p>
      </div>

      <!-- Floating Button -->
      <a 
        href="https://wa.me/1234567890" 
        target="_blank"
        (mouseenter)="showTooltip = true"
        (mouseleave)="showTooltip = false"
        class="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-white shadow-[0_0_20px_rgba(201,161,102,0.4)] hover:shadow-[0_0_30px_rgba(201,161,102,0.6)] hover:scale-110 transition-all duration-500 pointer-events-auto group"
      >
        <app-icon name="whatsapp" class="text-3xl group-hover:rotate-12 transition-transform"></app-icon>
        
        <!-- Pulse Effect -->
        <div class="absolute inset-0 rounded-full bg-accent animate-ping opacity-20"></div>
      </a>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class ChatWidgetComponent {
  showTooltip = false;
}
