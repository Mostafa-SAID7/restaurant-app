import { animate, state, style, transition, trigger, query, stagger } from '@angular/animations';

export const fadeUp = trigger('fadeUp', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(20px)' }),
    animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
  ])
]);

export const staggerFadeUp = trigger('staggerFadeUp', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0, transform: 'translateY(20px)' }),
      stagger('0.1s', [
        animate('0.6s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ], { optional: true })
  ])
]);

export const scaleIn = trigger('scaleIn', [
  transition(':enter', [
    style({ opacity: 0, scale: 0.95 }),
    animate('0.5s ease-out', style({ opacity: 1, scale: 1 }))
  ])
]);

export const fadeIn = trigger('fadeIn', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('0.5s ease-in', style({ opacity: 1 }))
  ])
]);
