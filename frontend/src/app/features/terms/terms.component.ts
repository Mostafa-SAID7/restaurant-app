import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  template: `
    <!-- Page Header -->
    <app-page-header
      label="Legal Documentation"
      title="Terms of Service"
      subtitle="Last Updated: March 2026">
    </app-page-header>

    <!-- Content -->
    <section class="py-20">
      <div class="container max-w-4xl">
        <div class="prose prose-invert prose-accent max-w-none space-y-12">
          <div class="animate-fade-up" style="animation-delay: 400ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">01.</span>
              Agreement to Terms
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              By accessing or using the NooR website (the "Site"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you do not have permission to access the Service.
            </p>
          </div>

          <div class="animate-fade-up" style="animation-delay: 500ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">02.</span>
              Reservations and Cancellations
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              Reservations are subject to availability. We kindly ask that you cancel your reservation at least 24 hours in advance. Failure to do so may result in a cancellation fee, as outlined during the booking process.
            </p>
          </div>

          <div class="animate-fade-up" style="animation-delay: 600ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">03.</span>
              Online Orders
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              All orders placed through our online ordering system are subject to acceptance by NooR. Prices and availability are subject to change without notice. We reserve the right to refuse or cancel any order for any reason.
            </p>
          </div>

          <div class="animate-fade-up" style="animation-delay: 700ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">04.</span>
              Dietary Requirements and Allergies
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              While we make every effort to accommodate dietary restrictions and allergies, we cannot guarantee that any of our dishes are completely free of allergens, as our kitchen handles nuts, gluten, dairy, and other common allergens.
            </p>
          </div>

          <div class="animate-fade-up" style="animation-delay: 800ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">05.</span>
              Intellectual Property
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              The Site and its original content, features, and functionality are and will remain the exclusive property of NooR and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NooR.
            </p>
          </div>

          <div class="animate-fade-up" style="animation-delay: 900ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">06.</span>
              Changes to Terms
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  `
})
export class TermsComponent {}
