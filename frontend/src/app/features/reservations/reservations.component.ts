import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../core/services/reservation.service';
import { ReservationResponse } from '../../core/models/reservation.model';
import { IconComponent } from '../../shared/components/icon.component';
import { CustomSelectComponent } from '../../shared/components/custom-select.component';
import { CustomCalendarComponent } from '../../shared/components/custom-calendar.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, IconComponent, CustomSelectComponent, CustomCalendarComponent, PageHeaderComponent],
  template: `
    <app-page-header
      label="Your Table Awaits"
      title="Reserve a Table"
      subtitle="A seamless reservation experience for an evening you'll never forget."
      backgroundImage="/assets/images/reservations-bg.jpg">
    </app-page-header>


    <div class="container py-24 px-6 relative">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        <!-- Reservation Form -->
        <div class="lg:col-span-2">
          @if (!confirmed()) {
            <div class="bg-surface-2/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-up">
              <h2 class="text-3xl font-serif text-white mb-8 flex items-center gap-4">
                <span class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                   <app-icon name="calendar" strokeWidth="1.5"></app-icon>
                </span>
                Your Details
              </h2>
              
              <form [formGroup]="form" (ngSubmit)="onSubmit()" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-muted" for="name">Full Name *</label>
                    <input id="name" type="text" formControlName="name" placeholder="John Doe"
                      class="w-full bg-bg border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/5 transition-all"
                      [class.border-error]="isInvalid('name')">
                    @if (isInvalid('name')) { <span class="text-xs text-error">Full name is required</span> }
                  </div>
                  <div class="space-y-2">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-muted" for="email">Email Address *</label>
                    <input id="email" type="email" formControlName="email" placeholder="john@example.com"
                      class="w-full bg-bg border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/5 transition-all"
                      [class.border-error]="isInvalid('email')">
                    @if (isInvalid('email')) { <span class="text-xs text-error">Valid email required</span> }
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-muted" for="phone">Phone Number *</label>
                    <input id="phone" type="tel" formControlName="phone" placeholder="+1 (555) 000-0000"
                      class="w-full bg-bg border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/5 transition-all"
                      [class.border-error]="isInvalid('phone')">
                    @if (isInvalid('phone')) { <span class="text-xs text-error">Phone number required</span> }
                  </div>
                  <div class="space-y-2">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-muted" for="guests">Number of Guests *</label>
                    <app-custom-select 
                      id="guests"
                      formControlName="guests"
                      [options]="guestOptions"
                      placeholder="Select Guests">
                    </app-custom-select>
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-muted" for="date">Date *</label>
                    <app-custom-calendar
                      id="date"
                      formControlName="date"
                      [minDate]="minDate"
                      placeholder="Select Date">
                    </app-custom-calendar>
                    @if (isInvalid('date')) { <span class="text-xs text-error">Date is required</span> }
                  </div>
                  <div class="space-y-2">
                    <label class="text-[10px] font-bold uppercase tracking-widest text-muted" for="time">Preferred Time *</label>
                    <app-custom-select
                      id="time"
                      formControlName="time"
                      [options]="timeSlots"
                      placeholder="Select Time">
                    </app-custom-select>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-[10px] font-bold uppercase tracking-widest text-muted" for="special">Special Requests</label>
                  <textarea id="special" formControlName="specialRequests" rows="3"
                    placeholder="Allergies, dietary requirements, special occasion..."
                    class="w-full bg-bg border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-accent/50 focus:ring-4 focus:ring-accent/5 transition-all resize-none"></textarea>
                </div>

                @if (serverError()) {
                  <p class="p-4 bg-error/10 border border-error/20 rounded-xl text-error text-sm">{{ serverError() }}</p>
                }

                <button type="submit" [disabled]="submitting()"
                  class="w-full px-10 py-4 bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-accent transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                  @if (submitting()) {
                    <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Processing...
                  } @else {
                    Confirm Reservation
                    <app-icon name="check" strokeWidth="2" class="w-5 h-5"></app-icon>
                  }
                </button>
              </form>
            </div>
          } @else {
            <!-- Confirmation -->
            <div class="bg-surface-2/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 text-center shadow-2xl animate-fade-up">
              <div class="w-20 h-20 rounded-full bg-success/10 border-2 border-success text-success flex items-center justify-center mx-auto mb-8 animate-pulse-glow">
                <app-icon name="check" strokeWidth="2.5" class="w-10 h-10"></app-icon>
              </div>
              <h2 class="text-3xl font-serif text-white mb-4">Reservation Confirmed!</h2>
              <p class="text-muted mb-8 leading-relaxed max-w-md mx-auto">{{ response()?.message }}</p>
              
              <div class="bg-bg/50 border border-white/5 rounded-2xl p-8 mb-10 max-w-md mx-auto space-y-4 text-left">
                <div class="flex justify-between items-center pb-4 border-b border-white/5">
                  <span class="text-xs font-bold uppercase tracking-widest text-muted">Confirmation #</span>
                  <span class="text-accent font-mono font-bold">{{ response()?.id }}</span>
                </div>
                @if (response()?.queuePosition) {
                  <div class="flex justify-between items-center pb-4 border-b border-white/5">
                    <span class="text-xs font-bold uppercase tracking-widest text-muted">Queue Position</span>
                    <span class="text-white font-bold">#{{ response()?.queuePosition }}</span>
                  </div>
                }
                <div class="flex justify-between items-center pb-4 border-b border-white/5">
                  <span class="text-xs font-bold uppercase tracking-widest text-muted">Date</span>
                  <span class="text-white">{{ form.value.date | date:'EEEE, MMMM d, y' }}</span>
                </div>
                <div class="flex justify-between items-center pb-4 border-b border-white/5">
                  <span class="text-xs font-bold uppercase tracking-widest text-muted">Time</span>
                  <span class="text-white font-bold">{{ form.value.time }}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="text-xs font-bold uppercase tracking-widest text-muted">Guests</span>
                  <span class="text-white font-bold">{{ form.value.guests }} Persons</span>
                </div>
              </div>
              
              <button class="px-8 py-3 border border-white/10 hover:bg-white/5 text-white font-bold rounded-xl transition-all" (click)="reset()">
                Make Another Reservation
              </button>
            </div>
          }
        </div>

        <!-- Info Sidebar -->
        <div class="space-y-8">
          <div class="bg-surface-2 border border-white/10 rounded-3xl p-8 shadow-xl">
            <h3 class="text-xl font-serif text-white mb-8 border-b border-white/5 pb-4">Dining Information</h3>
            <ul class="space-y-8">
              <li class="flex gap-4">
                <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <app-icon name="clock" strokeWidth="1.5"></app-icon>
                </div>
                <div>
                  <strong class="text-white text-sm block mb-1">Opening Hours</strong>
                  <p class="text-muted text-xs leading-relaxed">Mon–Thu: 6pm–11pm</p>
                  <p class="text-muted text-xs leading-relaxed">Fri–Sat: 6pm–1am</p>
                  <p class="text-muted text-xs leading-relaxed">Sunday: 6pm–10pm</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <app-icon name="checkBadge" strokeWidth="1.5"></app-icon>
                </div>
                <div>
                  <strong class="text-white text-sm block mb-1">Dress Code</strong>
                  <p class="text-muted text-xs leading-relaxed">Smart casual. We ask guests to refrain from sportswear.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <app-icon name="clock" strokeWidth="1.5"></app-icon>
                </div>
                <div>
                  <strong class="text-white text-sm block mb-1">Reservation Hold</strong>
                  <p class="text-muted text-xs leading-relaxed">Tables are held for 15 minutes past reservation time.</p>
                </div>
              </li>
              <li class="flex gap-4">
                <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <app-icon name="sparkles" strokeWidth="1.5"></app-icon>
                </div>
                <div>
                  <strong class="text-white text-sm block mb-1">Special Occasions</strong>
                  <p class="text-muted text-xs leading-relaxed">Mention your occasion in requests and we'll make it memorable.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-surface-2/50 border border-white/5 rounded-3xl p-8">
             <h3 class="text-lg font-serif text-white mb-6 flex items-center gap-3">
               <app-icon name="mapPin" strokeWidth="1.5" class="text-accent"></app-icon>
               Location
             </h3>
             <p class="text-muted text-sm leading-relaxed mb-4">18 West 29th Street,<br>New York, NY 10001</p>
             <p class="text-muted text-xs italic">Near Penn Station. Valet parking available on weekends.</p>
          </div>
        </div>
      </div>
    </div>
  `

})
export class ReservationsComponent {
  private fb          = inject(FormBuilder);
  private resService  = inject(ReservationService);

  form       = this.fb.group({
    name:            ['', Validators.required],
    email:           ['', [Validators.required, Validators.email]],
    phone:           ['', Validators.required],
    guests:          [2, Validators.required],
    date:            ['', Validators.required],
    time:            ['19:00'],
    specialRequests: [''],
  });

  guestOptions = [1,2,3,4,5,6,7,8,9,10];
  timeSlots    = ['12:00','12:30','13:00','13:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'];
  minDate      = new Date().toISOString().split('T')[0];

  submitting  = signal(false);
  confirmed   = signal(false);
  response    = signal<ReservationResponse | null>(null);
  serverError = signal<string | null>(null);

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl?.invalid && ctrl.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.submitting.set(true);
    this.serverError.set(null);
    this.resService.makeReservation(this.form.value as any).subscribe({
      next: res => {
        this.response.set(res);
        this.confirmed.set(true);
        this.submitting.set(false);
      },
      error: () => {
        this.serverError.set('Something went wrong. Please try again.');
        this.submitting.set(false);
      }
    });
  }

  reset(): void {
    this.form.reset({ guests: 2, time: '19:00' });
    this.confirmed.set(false);
    this.response.set(null);
  }
}
