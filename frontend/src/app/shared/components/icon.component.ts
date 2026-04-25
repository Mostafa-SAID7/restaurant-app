import { Component, Input, OnChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

const SVG_ICONS: Record<string, string> = {
  // Navigation / Misc
  search: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />',
  close: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />',
  check: '<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />',
  checkBadge: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />',
  lock: '<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />',
  award: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 15l-2 5l2-1l2 1l-2-5zM12 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10zM12 7l1 2h2l-1.5 1.5l.5 2.5l-2-1.5l-2 1.5l.5-2.5l-1.5-1.5h2z" />',
  star: '<path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />',
  diamond: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 12l10 10 10-10L12 2z" />',
  diamondFill: '<path stroke-linecap="round" stroke-linejoin="round" fill="currentColor" d="M12 2L2 12l10 10 10-10L12 2z" />',
  noorLogo: "<path d='M6 4h12M6 20h12M8 4l8 16M16 4l-8 16' stroke-linecap='round' stroke-linejoin='round' />",
  minus: '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />',
  plus: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />',
  candle: '<path d="M12 10V21M12 10a2 2 0 100-4 2 2 0 000 4zM10 21h4M12 6c0-1 1-2 1-3s-1-2-1-3-1 1-1 2 1 2 1 3z" stroke-linecap="round" stroke-linejoin="round"/>',
  trophy: '<path d="M8 21h8M12 17v4M7 4h10M17 4v8c0 2.8-2.2 5-5 5s-5-2.2-5-5V4M3 6h4M21 6h-4" stroke-linecap="round" stroke-linejoin="round"/>',
  checkout: '<path d="M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" stroke-linecap="round" stroke-linejoin="round"/>',
  takeout: '<path d="M6 8V6a6 6 0 0 1 12 0v2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h2zM8 8h8V6a4 4 0 0 0-8 0v2z" stroke-linecap="round" stroke-linejoin="round"/>',
  bike: '<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M12 17H9M12 17v-4l-4-4h4M12 13l4-4h4M18 17h-2.5" stroke-linecap="round" stroke-linejoin="round"/>',
  seedling: '<path d="M12 22V12M12 12c-3 0-5-2-5-5s2-5 5-5 5 2 5 5-2 5-5 5zM12 12c3 0 5-2 5-5s-2-5-5-5-5 2-5 5 2 5 5 5z" stroke-linecap="round" stroke-linejoin="round"/>',
  gift: '<path d="M20 12v10H4V12M2 7h20v5H2V7zM12 22V7M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z" stroke-linecap="round" stroke-linejoin="round"/>',
  mapPinFill: '<path d="M12 2c-3.3 0-6 2.7-6 6 0 4.4 6 12 6 12s6-7.6 6-12c0-3.3-2.7-6-6-6zM12 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z" fill="currentColor"/>',
  
  // Specific Concepts
  leaf: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />',
  wine: '<path d="M8 22h8M12 11v11M7 3c0 4.4 2.2 8 5 8s5-3.6 5-8H7z" stroke-linecap="round" stroke-linejoin="round"/>',
  chef: '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18h12M12 10v8M9 4h6a3 3 0 0 1 3 3v3H6V7a3 3 0 0 1 3-3z" />',
  handshake: '<path stroke-linecap="round" stroke-linejoin="round" d="M7 7l3 3l-3 3M17 7l-3 3l3 3M2 12h20" />', 
  sparkles: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />',
  instagram: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  twitter: '<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>',
  arrow_right: '<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />',
  arrow_left: '<path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />',
  chevronDown: '<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />',
  chevronLeft: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />',
  chevronRight: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5L15.75 12l-7.5 7.5" />',
  
  // Contact & Details
  mapPin: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />',
  phone: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.896-1.596-5.48-4.18-7.076-7.076l1.293-.97c.362-.271.527-.733.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />',
  envelope: '<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />',
  calendar: '<path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />',
  clock: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />',
  users: '<path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />',
  cart: '<path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />',
  
  // Food & Drink generic
  food: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 17h18c0-4.97-4.03-9-9-9s-9 4.03-9 9zM12 4c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2zM2 17h20v2H2z" />',
  fire: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />',
  truck: '<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.25a2.25 2.25 0 00-2.25 2.25v1.5c0 .621.504 1.125 1.125 1.125h1.5M12 18.75v-11.25A2.25 2.25 0 009.75 5.25H4.5A2.25 2.25 0 002.25 7.5v8.25c0 .621.504 1.125 1.125 1.125h.375" />',
  dining: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 11c0-1.1.9-2 2-2h14a2 2 0 01 2 2v6H3v-6zM12 2a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3z" />',
  category_specials: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 15l-2 5l2-1l2 1l-2-5zM12 13a5 5 0 1 0 0-10a5 5 0 0 0 0 10z" />',
  category_appetizers: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 17h18c0-4.97-4.03-9-9-9s-9 4.03-9 9z" />',
  category_mains: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5" />',
  category_desserts: '<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7l1.5 3.5l3.5 1.5l-3.5 1.5l-1.5 3.5l-1.5-3.5l-3.5-1.5l3.5-1.5L12 7z" />',
  cake: '<path d="M20 21v-8a2 2 0 00-2-2H6a2 2 0 00-2 2v8M2 21h20M7 8V5a2 2 0 012-2h6a2 2 0 012 2v3M12 11V3" stroke-linecap="round" stroke-linejoin="round"/>',
  bookOpen: '<path d="M2 3h6a4 4 0 0 1 4 4v14a4 4 0 0 0-4-4H2zM22 3h-6a4 4 0 0 0-4 4v14a4 4 0 0 1 4-4h6z" stroke-linecap="round" stroke-linejoin="round"/>',
  medal: '<path d="M8 2v10l4 2 4-2V2M12 12c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" stroke-linecap="round" stroke-linejoin="round"/>',
  heart: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />',
  starFill: '<path stroke-linecap="round" stroke-linejoin="round" fill="currentColor" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />',
  whatsapp: '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.032c0 2.12.554 4.189 1.604 6.009L0 24l6.115-1.605a11.787 11.787 0 005.93 1.585h.005c6.634 0 12.032-5.396 12.035-12.032a11.762 11.762 0 00-3.441-8.518" fill="currentColor"/>',
};

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg xmlns="http://www.w3.org/2000/svg" 
         [attr.viewBox]="viewBox" 
         [attr.fill]="fill" 
         [attr.stroke]="stroke" 
         [attr.stroke-width]="strokeWidth"
         [innerHTML]="safeHtml" 
         class="ui-icon"
         role="img"
         [attr.aria-hidden]="true">
    </svg>
  `,
  styles: [`
    :host {
      display: inline-block;
      vertical-align: middle;
    }
    
    svg {
      display: inline-block;
      vertical-align: middle;
      width: 1em;
      height: 1em;
      transition: transform 250ms ease, filter 250ms ease;
      will-change: transform;
    }
  `]
})
export class IconComponent implements OnChanges {
  @Input({ required: true }) name!: string;
  @Input() fill: string = 'none';
  @Input() stroke: string = 'currentColor';
  @Input() strokeWidth: string = '1.5';
  @Input() viewBox: string = '0 0 24 24';

  safeHtml: SafeHtml = '';
  private sanitizer = inject(DomSanitizer);

  ngOnChanges(): void {
    const path = SVG_ICONS[this.name] || SVG_ICONS['star'];
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(path);
  }
}
