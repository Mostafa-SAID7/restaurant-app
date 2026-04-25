import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { TEAM_MEMBERS } from '../../core/data/team';
import { RESTAURANT_VALUES } from '../../core/data/values';
import { RESTAURANT_INFO } from '../../core/data/restaurant-info';
import { fadeUp, staggerFadeUp, scaleIn } from '../../shared/animations/fade.animations';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, IconComponent, PageHeaderComponent],
  animations: [fadeUp, staggerFadeUp, scaleIn],
  template: `
    <app-page-header 
      label="Our Story" 
      title="Michelin-Recommended Fine Dining in Manhattan"
      subtitle="Award-winning farm-to-table cuisine, 500+ wine labels, and culinary storytelling in the heart of NYC since {{ restaurantInfo.established }}.">
    </app-page-header>

    <!-- Story Section -->
    <section class="py-24 bg-bg relative overflow-hidden">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="relative group" @fadeUp>
            <div class="relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80" 
                   alt="Restaurant Atmosphere" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
              
              <div class="absolute bottom-8 left-8 right-8 z-20 flex items-center gap-4">
                <div class="w-12 h-12 rounded-full bg-accent/90 backdrop-blur-md flex items-center justify-center text-white">
                  <app-icon name="candle" strokeWidth="2" class="w-6 h-6"></app-icon>
                </div>
                <div class="text-white">
                  <p class="text-sm font-serif opacity-80">Established</p>
                  <p class="text-lg font-bold">2019 Manhattan</p>
                </div>
              </div>
            </div>

            <!-- Floating Badge -->
            <div class="absolute -top-6 -right-6 md:-right-12 p-6 rounded-3xl bg-surface/80 backdrop-blur-xl border border-border shadow-2xl max-w-[200px] animate-bounce-subtle" @scaleIn>
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                  <app-icon name="trophy" strokeWidth="2"></app-icon>
                </div>
                <div>
                  <div class="text-sm font-bold text-text">2026 Culinary Award</div>
                  <div class="text-[10px] text-text-muted uppercase tracking-wider font-medium">Innovation Excellence</div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col" @fadeUp>
            <span class="text-accent text-sm font-bold uppercase tracking-widest mb-4">Our Beginning</span>
            <h2 class="text-3xl md:text-4xl font-serif text-text mb-8 leading-snug">
              From Michelin Kitchens to Manhattan Fine Dining
            </h2>
            <div class="space-y-6 text-text-muted leading-relaxed text-lg">
              <p>
                NooR was born from a single obsession: creating food that tells a story. Founded in 2019 by Executive Chef Marcus Voss and Head Sommelier Julian Reed, NooR has become a Michelin-recommended fine dining destination in Manhattan.
              </p>
              <p>
                Our philosophy combines farm-to-table commitment with artistic presentation, creating an immersive dining experience that celebrates both innovation and tradition. Every detail, from the cocktail programme to the obsidian-tiled dining room, is designed to be immersive.
              </p>
            </div>

            <div class="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/50" [@staggerFadeUp]="3">
              <div>
                <span class="block text-3xl font-serif text-accent mb-1">48+</span>
                <span class="text-xs text-text-muted uppercase tracking-widest font-bold">Signature Dishes</span>
              </div>
              <div>
                <span class="block text-3xl font-serif text-accent mb-1">12</span>
                <span class="text-xs text-text-muted uppercase tracking-widest font-bold">Expert Chefs</span>
              </div>
              <div>
                <span class="block text-3xl font-serif text-accent mb-1">500+</span>
                <span class="text-xs text-text-muted uppercase tracking-widest font-bold">Wine Labels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-24 bg-surface/30">
      <div class="container">
        <div class="text-center mb-20" @fadeUp>
          <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4">Our Talent</span>
          <h2 class="text-3xl md:text-5xl font-serif text-text">Meet Our Award-Winning Team</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-8" [@staggerFadeUp]="team.length">
          @for (member of team; track member.name) {
            <div class="group relative p-8 rounded-[3rem] bg-surface border border-border/50 hover:border-accent/30 transition-all duration-500 hover:-translate-y-2">
              <div class="w-20 h-20 rounded-2xl bg-accent/5 flex items-center justify-center text-accent mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                <app-icon [name]="member.icon" strokeWidth="1.5" class="w-10 h-10"></app-icon>
              </div>
              <h3 class="text-2xl font-serif text-text mb-1">{{ member.name }}</h3>
              <div class="text-accent text-xs font-bold uppercase tracking-widest mb-4">{{ member.role }}</div>
              <p class="text-text-muted leading-relaxed font-light">{{ member.bio }}</p>
              
              <div class="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="w-8 h-8 rounded-full border border-accent/30 flex items-center justify-center text-accent">
                  <app-icon name="arrow_right" class="w-4 h-4"></app-icon>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="py-24 bg-bg">
      <div class="container">
        <div class="text-center mb-20" @fadeUp>
          <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-widest mb-4">Our DNA</span>
          <h2 class="text-3xl md:text-5xl font-serif text-text">The Philosophy of NooR</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-12" [@staggerFadeUp]="values.length">
          @for (value of values; track value.title) {
            <div class="flex flex-col gap-6 text-center">
              <div class="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mx-auto text-accent shadow-sm">
                <app-icon [name]="value.icon" strokeWidth="2" class="w-7 h-7"></app-icon>
              </div>
              <div class="space-y-3">
                <h3 class="text-xl font-serif text-text">{{ value.title }}</h3>
                <p class="text-text-muted leading-relaxed font-light px-4">{{ value.description }}</p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-24 bg-surface/50 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,126,34,0.05),transparent_50%)]"></div>
      <div class="container relative z-10">
        <div class="grid lg:grid-cols-2 gap-16">
          <div @fadeUp>
            <span class="text-accent text-sm font-bold uppercase tracking-widest mb-4 block">Get In Touch</span>
            <h2 class="text-3xl md:text-5xl font-serif text-text mb-8 leading-tight">We Love to Hear From Our Guests</h2>
            
            <div class="space-y-8 mt-12">
              @for (detail of contactDetails; track detail.label) {
                <div class="flex items-start gap-6 group">
                  <div class="w-12 h-12 rounded-2xl bg-surface border border-border flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <app-icon [name]="detail.icon" strokeWidth="2"></app-icon>
                  </div>
                  <div>
                    <span class="block text-[10px] text-text-dim uppercase tracking-widest font-bold mb-1">{{ detail.label }}</span>
                    <span class="text-lg text-text">{{ detail.value }}</span>
                  </div>
                </div>
              }
            </div>

            <div class="mt-12 p-8 rounded-[2rem] bg-surface border border-border shadow-sm">
              <h4 class="text-xl font-serif mb-6 flex items-center gap-3">
                <app-icon name="clock" class="text-accent"></app-icon>
                Opening Hours
              </h4>
              <div class="space-y-4">
                @for (h of hours; track h.days) {
                  <div class="flex justify-between items-center text-sm">
                    <span class="text-text-muted">{{ h.days }}</span>
                    <span class="font-bold text-text">{{ h.time }}</span>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="p-10 rounded-[3rem] bg-surface border border-border shadow-2xl relative" @fadeUp>
            <h3 class="text-2xl font-serif mb-8">Send a Message</h3>
            <form [formGroup]="contactForm" (ngSubmit)="sendMessage()" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-xs font-bold text-text-dim uppercase tracking-wider ml-1" for="cname">Name</label>
                  <input id="cname" type="text" class="w-full bg-surface-2 border border-border rounded-2xl px-6 py-4 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                         formControlName="name" placeholder="John Doe">
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-bold text-text-dim uppercase tracking-wider ml-1" for="cemail">Email</label>
                  <input id="cemail" type="email" class="w-full bg-surface-2 border border-border rounded-2xl px-6 py-4 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                         formControlName="email" placeholder="john@example.com">
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold text-text-dim uppercase tracking-wider ml-1" for="csubject">Subject</label>
                <input id="csubject" type="text" class="w-full bg-surface-2 border border-border rounded-2xl px-6 py-4 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                       formControlName="subject" placeholder="How can we help?">
              </div>
              <div class="space-y-2">
                <label class="text-xs font-bold text-text-dim uppercase tracking-wider ml-1" for="cmessage">Message</label>
                <textarea id="cmessage" class="w-full bg-surface-2 border border-border rounded-2xl px-6 py-4 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                          formControlName="message" rows="4" placeholder="Tell us more about your request..."></textarea>
              </div>

              @if (messageSent()) {
                <div class="flex items-center gap-3 p-4 rounded-xl bg-success/10 text-success text-sm border border-success/20 animate-scale-in">
                  <app-icon name="check" strokeWidth="3"></app-icon>
                  Message sent successfully! We'll reply within 24 hours.
                </div>
              }

              <button type="submit" class="w-full btn btn-primary btn-lg py-5 justify-center rounded-2xl shadow-accent/20" [disabled]="contactForm.invalid || sending()">
                @if (sending()) {
                  <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                  Sending...
                } @else {
                  Send Message
                  <app-icon name="arrow_right" class="ml-2"></app-icon>
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  private fb = inject(FormBuilder);

  sending     = signal(false);
  messageSent = signal(false);

  contactForm = this.fb.group({
    name:    ['', Validators.required],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', Validators.required],
  });

  restaurantInfo = RESTAURANT_INFO;
  team = TEAM_MEMBERS;
  values = RESTAURANT_VALUES;
  
  contactDetails = [
    { icon: 'map_pin',  label: 'Address', value: RESTAURANT_INFO.location.address },
    { icon: 'phone',    label: 'Phone',   value: RESTAURANT_INFO.contact.phone },
    { icon: 'envelope', label: 'Email',   value: RESTAURANT_INFO.contact.email },
  ];

  hours = RESTAURANT_INFO.hours;

  sendMessage(): void {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.sending.set(true);
    setTimeout(() => {
      this.messageSent.set(true);
      this.sending.set(false);
      this.contactForm.reset();
      setTimeout(() => this.messageSent.set(false), 5000);
    }, 1500);
  }
}
