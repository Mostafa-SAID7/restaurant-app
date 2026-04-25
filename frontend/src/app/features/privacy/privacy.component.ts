import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, PageHeaderComponent],
  template: `
    <!-- Page Header -->
    <app-page-header
      label="Security & Trust"
      title="Privacy Policy"
      subtitle="Last Updated: March 2026">
    </app-page-header>

    <!-- Content -->
    <section class="py-20">
      <div class="container max-w-4xl">
        <div class="prose prose-invert prose-accent max-w-none space-y-12">
          <div class="animate-fade-up" style="animation-delay: 400ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">01.</span>
              Information We Collect
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              When you visit NooR, make a reservation, or order online, we collect information that you voluntarily provide to us. This may include your name, email address, phone number, and payment information (handled securely by our payment processors).
            </p>
          </div>

          <div class="animate-fade-up" style="animation-delay: 500ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">02.</span>
              How We Use Your Information
            </h2>
            <p class="text-text-muted leading-relaxed text-lg mb-4">We use the information we collect to:</p>
            <ul class="list-disc list-inside text-text-muted space-y-2 text-lg ml-4">
              <li>Process and manage your reservations and online orders.</li>
              <li>Communicate with you regarding your dining experience.</li>
              <li>Send promotional offers (only if you have opted in).</li>
              <li>Improve our website and customer service.</li>
            </ul>
          </div>

          <div class="animate-fade-up" style="animation-delay: 600ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">03.</span>
              Information Sharing
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </div>

          <div class="animate-fade-up" style="animation-delay: 700ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">04.</span>
              Data Security
            </h2>
            <p class="text-text-muted leading-relaxed text-lg">
              We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
            </p>
          </div>

          <div class="animate-fade-up" style="animation-delay: 800ms">
            <h2 class="text-2xl font-serif text-white mb-4 flex items-center gap-3">
              <span class="text-accent text-lg">05.</span>
              Contact Us
            </h2>
            <p class="text-text-muted leading-relaxed text-lg mb-6">
              If you have any questions regarding this privacy policy, you may contact us using the information below:
            </p>
            <div class="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p class="text-white font-serif text-xl mb-2">NooR Restaurant</p>
              <p class="text-text-muted mb-4">
                18 West 29th Street<br>
                New York, NY 10001
              </p>
              <a href="mailto:privacy@noor.com" class="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors font-medium">
                <span>privacy&#64;noor.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class PrivacyComponent {}
