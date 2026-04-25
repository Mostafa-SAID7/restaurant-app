import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IconComponent } from '../../shared/components/icon.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, IconComponent],
  template: `
    <!-- Page Header -->
    <div class="page-header">
      <div class="page-header-bg"></div>
      <div class="container p-header-section text-center">
        <span class="section-label">Our Story</span>
        <h1 class="section-title title-lg">About NooR - Michelin-Recommended Fine Dining in Manhattan</h1>
        <div class="divider"></div>
        <p class="section-subtitle mt-4 mx-auto mb-0">Award-winning fine dining restaurant in NYC. Farm-to-table cuisine, 500+ wine labels, and culinary storytelling since 2019.</p>
      </div>
    </div>

    <!-- Story Section -->
    <section class="section">
      <div class="container">
        <div class="story-grid">
          <div class="story-visual animate-fade-right">
            <div class="story-image-card card">
              <app-icon name="candle" class="story-icon"></app-icon>
              <div class="story-badge-card card shadow-accent">
                <app-icon name="trophy" class="badge-icon"></app-icon>
                <div>
                  <div class="text-accent font-bold">2023 Culinary Award</div>
                  <div class="text-xs text-muted">Excellence in Innovation</div>
                </div>
              </div>
            </div>
          </div>

          <div class="story-content animate-fade-left">
            <span class="section-label text-left block">Our Beginning</span>
            <h2 class="text-3xl mb-5">From Michelin Kitchens to Manhattan Fine Dining</h2>
            <p class="text-muted mb-4 leading-relaxed">
              NooR was born from a single obsession: creating food that tells a story. Founded in 2019 by Executive Chef Marcus Voss and Head Sommelier Julian Reed, NooR has become a Michelin-recommended fine dining destination in Manhattan, recognized for its innovative approach to farm-to-table cuisine and theatrical culinary presentation.
            </p>
            <p class="text-muted mb-4 leading-relaxed">
              Chef Marcus Voss brings 20 years of Michelin-starred culinary excellence from prestigious European fine dining establishments. His philosophy combines farm-to-table commitment with artistic presentation, creating an immersive dining experience that celebrates both innovation and tradition.
            </p>
            <p class="text-muted mb-6">
              Inspired by the chiaroscuro of classic jazz and the bold palette of late-night New York, we designed every detail of NooR to be an immersive experience — from the hand-crafted cocktail programme to the obsidian-tiled dining room. Our 12 expert chefs craft 48+ signature dishes, while our sommelier curates 500+ wine labels from 30+ countries.
            </p>
            <div class="story-stats">
              <div class="story-stat">
                <span class="stat-number text-accent">48+</span>
                <span class="text-muted text-sm">Signature Dishes</span>
              </div>
              <div class="story-stat">
                <span class="stat-number text-accent">12</span>
                <span class="text-muted text-sm">Expert Chefs</span>
              </div>
              <div class="story-stat">
                <span class="stat-number text-accent">500+</span>
                <span class="text-muted text-sm">Wine Labels</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-header">
          <span class="section-label">The Talent Behind the Magic</span>
          <h2 class="section-title">Meet Our Award-Winning Culinary Team</h2>
          <div class="divider"></div>
        </div>
        <div class="team-grid">
          <div class="team-card card animate-fade-up" style="animation-delay: 0.1s">
            <div class="team-avatar"><app-icon name="chef" strokeWidth="2"></app-icon></div>
            <h3 class="team-name">Marcus Voss</h3>
            <div class="text-accent text-xs font-bold uppercase tracking-wider mb-2">Executive Chef</div>
            <p class="team-bio text-muted font-light">Executive Chef Marcus Voss brings 20 years of Michelin-starred culinary excellence from prestigious European fine dining establishments. His innovative approach to farm-to-table cuisine and theatrical presentation has earned NooR Michelin recognition since 2022. Chef Voss leads our team of 12 expert chefs in crafting 48+ signature dishes that tell a story with every plate.</p>
          </div>
          <div class="team-card card animate-fade-up" style="animation-delay: 0.2s">
            <div class="team-avatar"><app-icon name="wine" strokeWidth="2"></app-icon></div>
            <h3 class="team-name">Julian Reed</h3>
            <div class="text-accent text-xs font-bold uppercase tracking-wider mb-2">Head Sommelier</div>
            <p class="team-bio text-muted font-light">Head Sommelier Julian Reed is the curator of our award-winning wine cellar featuring 500+ labels from 30+ countries. With expertise in wine pairing and sommelier-led experiences, Julian creates the perfect narrative in every bottle, elevating our farm-to-table cuisine with expertly matched wines.</p>
          </div>
          <div class="team-card card animate-fade-up" style="animation-delay: 0.3s">
            <div class="team-avatar"><app-icon name="sparkles" strokeWidth="2"></app-icon></div>
            <h3 class="team-name">Evelyn Noir</h3>
            <div class="text-accent text-xs font-bold uppercase tracking-wider mb-2">Creative Director</div>
            <p class="team-bio text-muted font-light">Creative Director Evelyn Noir is the architect of the NooR aesthetic, ensuring every guest experience is visually stunning and immersive. Her theatrical presentation philosophy transforms each dining experience into a culinary storytelling event that guests never forget.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">What We Stand For</span>
          <h2 class="section-title">Our Fine Dining Philosophy</h2>
          <div class="divider"></div>
        </div>
        <div class="values-grid">
          <div class="value-card card">
            <app-icon name="seedling" class="value-icon text-accent"></app-icon>
            <h3>Farm-to-Table Excellence</h3>
            <p class="text-muted text-sm font-light">We partner exclusively with certified organic farms and local producers, maintaining a zero-food-waste kitchen policy. Our seasonal menu celebrates locally sourced ingredients and sustainable practices.</p>
          </div>
          <div class="value-card card">
            <app-icon name="sparkles" class="value-icon text-accent"></app-icon>
            <h3>Culinary Storytelling</h3>
            <p class="text-muted text-sm font-light">Every dish is a narrative. Our theatrical presentation and immersive dining experience transform meals into unforgettable culinary journeys that engage all senses.</p>
          </div>
          <div class="value-card card">
            <app-icon name="handshake" class="value-icon text-accent"></app-icon>
            <h3>Genuine Hospitality</h3>
            <p class="text-muted text-sm font-light">We believe great food is made even better by genuine warmth and attentive service. Every guest is treated as a partner in our culinary story.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Michelin Recognition Section -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Recognition & Awards</span>
          <h2 class="section-title">Michelin-Recommended Excellence</h2>
          <div class="divider"></div>
        </div>
        <div class="awards-grid">
          <div class="award-card card">
            <app-icon name="trophy" class="award-icon text-accent"></app-icon>
            <h3>Michelin Recommended</h3>
            <p class="text-muted text-sm font-light">Recognized by Michelin Guide since 2022 for our innovative approach to fine dining and commitment to culinary excellence.</p>
          </div>
          <div class="award-card card">
            <app-icon name="star" class="award-icon text-accent"></app-icon>
            <h3>Chef-Driven Cuisine</h3>
            <p class="text-muted text-sm font-light">Led by Executive Chef Marcus Voss with 20 years of Michelin-starred experience, our kitchen represents the pinnacle of contemporary fine dining.</p>
          </div>
          <div class="award-card card">
            <app-icon name="wine" class="award-icon text-accent"></app-icon>
            <h3>Award-Winning Wine Cellar</h3>
            <p class="text-muted text-sm font-light">Our sommelier-curated collection of 500+ wine labels from 30+ countries has earned recognition for excellence in wine pairing and curation.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact & Map Section -->
    <section class="section bg-surface">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Get In Touch</span>
          <h2 class="section-title">Contact Us</h2>
          <div class="divider"></div>
        </div>

        <div class="contact-layout">
          <!-- Contact Form -->
          <div class="contact-form-wrap card p-8">
            <h3 class="mb-6">Send a Message</h3>
            <form [formGroup]="contactForm" (ngSubmit)="sendMessage()" class="flex flex-col gap-4">
              <div class="form-row-2">
                <div class="form-group">
                  <label class="form-label" for="cname">Your Name *</label>
                  <input id="cname" type="text" class="form-input" formControlName="name" placeholder="John Doe">
                </div>
                <div class="form-group">
                  <label class="form-label" for="cemail">Email Address *</label>
                  <input id="cemail" type="email" class="form-input" formControlName="email" placeholder="john@example.com">
                </div>
              </div>
              <div class="form-group">
                <label class="form-label" for="csubject">Subject *</label>
                <input id="csubject" type="text" class="form-input" formControlName="subject" placeholder="How can we help?">
              </div>
              <div class="form-group">
                <label class="form-label" for="cmessage">Message *</label>
                <textarea id="cmessage" class="form-input" formControlName="message" rows="5" placeholder="Tell us more..."></textarea>
              </div>

              @if (messageSent()) {
                <div class="success-msg"><app-icon name="check" strokeWidth="2" class="mr-1"></app-icon> Message sent! We'll get back to you within 24 hours.</div>
              }

              <button type="submit" class="btn btn-primary btn-lg justify-center" [disabled]="contactForm.invalid || sending()">
                @if (sending()) { <span class="spinner spinner-sm"></span> Sending... }
                @else { Send Message }
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="contact-detail-card card">
              <div class="contact-details">
                <div class="contact-detail">
                  <app-icon name="mapPin" class="contact-icon text-accent"></app-icon>
                  <div>
                    <span class="contact-label">Location</span>
                    <span class="contact-value">18 West 29th Street, New York, NY 10001</span>
                  </div>
                </div>
                <div class="contact-detail">
                  <app-icon name="phone" class="contact-icon text-accent"></app-icon>
                  <div>
                    <span class="contact-label">Phone</span>
                    <span class="contact-value">+(155) 556-667</span>
                  </div>
                </div>
                <div class="contact-detail">
                  <app-icon name="envelope" class="contact-icon text-accent"></app-icon>
                  <div>
                    <span class="contact-label">Email</span>
                    <span class="contact-value">experience&#64;noor.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="hours-card card">
              <h4 class="mb-4">Opening Hours</h4>
              <div class="hours-list">
                @for (h of hours; track h.days) {
                  <div class="hours-row-item">
                    <span class="text-muted">{{ h.days }}</span>
                    <span>{{ h.time }}</span>
                  </div>
                }
              </div>
            </div>

            <a routerLink="/reservations" class="btn btn-primary btn-lg w-full justify-center mt-4">
              Reserve a Table
            </a>
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

  team = [
    { name: 'Marcus Voss',    role: 'Executive Chef',    icon: 'chef', bio: 'Trained in Lyon and Tokyo, Chef Marcus brings two decades of Michelin-starred experience to every plate he creates at NooR.' },
    { name: 'Lucia Chen',     role: 'Head Sommelier',    icon: 'wine', bio: 'With a Masters in Viticulture from Bordeaux, Lucia curates our 500-label wine cellar and crafts the perfect pairing for every dish.' },
    { name: 'Sofia Renault',  role: 'Pastry Chef',       icon: 'category_desserts', bio: 'Sofia\'s dessert philosophy — precision meets poetry. Her chocolate noir has been featured in Bon Appétit and Food & Wine magazines.' },
  ];

  values = [
    { icon: 'leaf', title: 'Sustainability',      description: 'We source from certified organic farms and maintain a zero-food-waste kitchen policy.' },
    { icon: 'sparkles', title: 'Excellence',           description: 'Every dish that leaves our kitchen represents our relentless pursuit of perfection.' },
    { icon: 'handshake', title: 'Genuine Hospitality', description: 'We believe great food is made even better by genuine warmth and attentive service.' },
  ];

  contactDetails = [
    { icon: 'mapPin', label: 'Address', value: '18 West 29th Street, New York, NY 10001' },
    { icon: 'phone', label: 'Phone',   value: '+1 (555) NOOR-NYC' },
    { icon: 'envelope', label: 'Email',   value: 'reservations@noor.com' },
  ];

  hours = [
    { days: 'Mon – Thu', time: '6:00 pm – 11:00 pm' },
    { days: 'Fri – Sat', time: '6:00 pm – 1:00 am'  },
    { days: 'Sunday',    time: '6:00 pm – 10:00 pm' },
    { days: 'Lunch',     time: 'Fri – Sun from 12 pm' },
  ];

  sendMessage(): void {
    if (this.contactForm.invalid) { this.contactForm.markAllAsTouched(); return; }
    this.sending.set(true);
    setTimeout(() => {
      this.messageSent.set(true);
      this.sending.set(false);
      this.contactForm.reset();
    }, 1000);
  }
}
