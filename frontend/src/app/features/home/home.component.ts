import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../core/services/menu.service';
import { ReviewService } from '../../core/services/review.service';
import { CartService } from '../../core/services/cart.service';
import { SeoService } from '../../core/services/seo.service';
import { StructuredDataService } from '../../core/services/structured-data.service';
import { MenuItem } from '../../core/models/menu-item.model';
import { Review } from '../../core/models/review.model';
import { IconComponent } from '../../shared/components/icon.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { MenuItemCardComponent } from '../../shared/components/menu-item-card/menu-item-card.component';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card.component';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { CategoryIconMapperService } from '../../shared/services/category-icon-mapper.service';
import { fadeUp, staggerFadeUp, scaleIn } from '../../shared/animations/fade.animations';
import { SEO_CONFIG } from '../../core/config/seo-config';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    IconComponent,
    SectionHeaderComponent,
    MenuItemCardComponent,
    ReviewCardComponent,
    LoadingSpinnerComponent
  ],
  animations: [fadeUp, staggerFadeUp, scaleIn],
  template: `
    <!-- Hero Section -->
    <section class="relative h-screen flex flex-col justify-center overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 bg-[url('/hero-premium.png')] bg-cover bg-center bg-no-repeat bg-bg transition-all duration-1000"></div>
      <div class="absolute inset-0 bg-radial-gradient(circle_at_50%_50%,rgba(18,18,18,0.2)_0%,rgba(18,18,18,0.7)_100%)"></div>
      <div class="absolute inset-0 bg-black/30"></div>
      
      <div class="container relative z-20 grid lg:grid-cols-5 gap-12 items-center pt-24 lg:pt-32 pb-20">
        <!-- Hero Content -->
        <div class="lg:col-span-3 max-w-2xl lg:text-left text-center" @fadeUp>
          <span class="inline-block px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-widest uppercase mb-6">
            Est. 2019 · New York City
          </span>
          <h1 class="text-6xl lg:text-8xl font-serif leading-[1.05] mb-8 text-white">
            A Symphony of<br>
            <span class="text-accent italic font-light">NooR</span>
          </h1>
          <p class="text-xl text-text-muted leading-relaxed mb-12 max-w-xl mx-auto lg:mx-0 font-light">
            Where culinary artistry meets obsidian elegance. Every dish is a narrative,
            every evening an unforgettable experience.
          </p>
          <div class="flex flex-wrap gap-5 lg:justify-start justify-center">
            <a routerLink="/reservations" class="btn btn-primary btn-lg px-10 group shadow-xl shadow-accent/20">
              Reserve Your Table
              <app-icon name="arrow_right" class="transition-transform group-hover:translate-x-2"></app-icon>
            </a>
            <a routerLink="/menu" class="btn btn-outline btn-lg px-10 border-white/20 hover:bg-white/5">Explore Menu</a>
          </div>
        </div>

        <!-- Hero Stats -->
        <div class="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-5 lg:gap-8 lg:justify-items-end mt-16 lg:mt-0" @staggerFadeUp>
          <!-- Stat 1 -->
          <div class="flex items-center gap-6 bg-surface/40 backdrop-blur-3xl border border-white/10 p-7 rounded-[2.5rem] w-full lg:max-w-[320px] transition-all hover:border-accent/40 hover:bg-white/10 group shadow-2xl">
            <div class="w-16 h-16 rounded-3xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
              <app-icon name="award" strokeWidth="2" class="text-3xl"></app-icon>
            </div>
            <div>
              <span class="block text-4xl font-serif font-bold text-white leading-none mb-1">12+</span>
              <span class="text-[10px] text-text-dim uppercase tracking-[0.25em] font-bold">Years of Excellence</span>
            </div>
          </div>

          <!-- Stat 2 -->
          <div class="flex items-center gap-6 bg-surface/40 backdrop-blur-3xl border border-white/10 p-7 rounded-[2.5rem] w-full lg:max-w-[320px] transition-all hover:border-accent/40 hover:bg-white/10 group shadow-2xl">
            <div class="w-16 h-16 rounded-3xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-inner">
              <app-icon name="sparkles" strokeWidth="2" class="text-3xl"></app-icon>
            </div>
            <div>
              <span class="block text-4xl font-serif font-bold text-white leading-none mb-1">48</span>
              <span class="text-[10px] text-text-dim uppercase tracking-[0.25em] font-bold">Curated Dishes</span>
            </div>
          </div>

          <!-- Stat 3 -->
          <div class="flex items-center gap-6 bg-surface/40 backdrop-blur-3xl border border-white/10 p-7 rounded-[2.5rem] w-full lg:max-w-[320px] transition-all hover:border-accent/40 hover:bg-white/10 group shadow-2xl md:col-span-1 col-span-2 mx-auto md:mx-0">
            <div class="w-16 h-16 rounded-3xl bg-accent/15 flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-inner">
              <app-icon name="starFill" strokeWidth="0" class="text-3xl"></app-icon>
            </div>
            <div>
              <span class="block text-4xl font-serif font-bold text-white leading-none mb-1">4.9</span>
              <span class="text-[10px] text-text-dim uppercase tracking-[0.25em] font-bold">Guest Rating</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Hero Scroll Indicator -->
      <div class="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-[10px] text-text-dim uppercase tracking-[0.3em] z-20">
        <div class="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent animate-pulse"></div>
        <span class="opacity-50">Scroll to explore</span>
      </div>
      
      <!-- Premium Transition Fade-out with Deeper Blur -->
      <div class="absolute bottom-0 left-0 right-0 h-80 pointer-events-none z-10">
        <div class="absolute inset-0 backdrop-blur-2xl [mask-image:linear-gradient(to_top,black_50%,transparent)] z-0"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-transparent z-10"></div>
      </div>
    </section>

    <!-- Featured Items Section -->
    <section class="py-24">
      <div class="container">
        <app-section-header
          label="Hand-picked by our Chef"
          title="Tonight's Highlights"
          subtitle="A curated selection of signature dishes that define the NooR experience."
          [showDivider]="true">
        </app-section-header>

        @if (loading()) {
          <app-loading-spinner></app-loading-spinner>
        } @else {
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" @staggerFadeUp>
            @for (item of featuredItems(); track item.id) {
              <app-menu-item-card
                [item]="item"
                [categoryIcon]="categoryIconMapper.getIcon(item.category)"
                (addToCart)="addToCart($event)">
              </app-menu-item-card>
            }
          </div>

          <div class="text-center mt-16">
            <a routerLink="/menu" class="btn btn-outline btn-lg min-w-[200px]">View Full Menu</a>
          </div>
        }
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-24 bg-surface/30">
      <div class="container">
        <div class="grid lg:grid-cols-2 gap-16 items-center" @fadeUp>
          <div class="flex flex-col">
            <span class="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">Our Philosophy</span>
            <h2 class="text-4xl lg:text-5xl font-serif mb-6 leading-tight">The Art of<br><span class="text-accent">Fine Dining</span></h2>
            <div class="w-16 h-1 bg-accent rounded-full mb-8"></div>
            
            <div class="space-y-8">
              <div class="flex gap-5 group">
                <div class="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 transition-colors">
                  <app-icon name="leaf" strokeWidth="2"></app-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-1">Farm to Table</h4>
                  <p class="text-text-muted leading-relaxed">Locally sourced, seasonal ingredients from trusted purveyors.</p>
                </div>
              </div>

              <div class="flex gap-5 group">
                <div class="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 transition-colors">
                  <app-icon name="wine" strokeWidth="2"></app-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-1">Curated Wine Cellar</h4>
                  <p class="text-text-muted leading-relaxed">500+ premium labels from the world's finest vineyards.</p>
                </div>
              </div>

              <div class="flex gap-5 group">
                <div class="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent/10 transition-colors">
                  <app-icon name="trophy" strokeWidth="2"></app-icon>
                </div>
                <div>
                  <h4 class="text-lg font-bold mb-1">Award-Winning</h4>
                  <p class="text-text-muted leading-relaxed">Michelin recommended for exceptional quality and service.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="relative lg:mt-0 mt-12 group">
            <!-- Experience Image -->
            <div class="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative border border-white/5 mask-gradient-to-b">
              <img src="/philosophy-final.png" alt="The Art of Fine Dining" 
                   class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent"></div>
              <div class="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[4rem]"></div>
            </div>
            
            <!-- Tasting Menu Overlay Card -->
            <div class="absolute -bottom-10 -left-10 md:-left-20 p-10 rounded-[2.5rem] bg-surface/90 backdrop-blur-2xl border border-white/10 shadow-3xl max-w-[320px] transition-all duration-500 group-hover:-translate-y-2" @scaleIn>
              <div class="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center text-accent mb-6">
                <app-icon name="sparkles" class="text-3xl"></app-icon>
              </div>
              <h3 class="text-2xl font-serif mb-3">Tasting Menu</h3>
              <p class="text-text-muted mb-6 text-sm leading-relaxed">A 7-course curated journey through<br>our signature flavors.</p>
              <div class="flex items-center justify-between">
                <div class="text-2xl font-bold text-accent">$185 <span class="text-xs text-text-dim font-normal uppercase tracking-widest">pp</span></div>
                <a routerLink="/reservations" class="btn btn-primary btn-sm rounded-full">Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="py-24">
      <div class="container">
        <app-section-header
          label="What Our Guests Say"
          title="Stories of Excellence"
          [showDivider]="true">
        </app-section-header>

        @if (reviews().length > 0) {
          <div class="grid md:grid-cols-2 gap-8" @staggerFadeUp>
            @for (review of reviews(); track review.id) {
              <app-review-card [review]="review" class="h-full"></app-review-card>
            }
          </div>
        }
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 relative overflow-hidden">
      <!-- Smoke Transition -->
      <div class="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg to-transparent z-10"></div>
      
      <div class="absolute inset-0 bg-gradient-to-br from-surface to-accent/5"></div>
      <div class="container relative z-20 text-center" @fadeUp>
        <h2 class="text-4xl lg:text-5xl font-serif mb-6">Ready for an Unforgettable Evening?</h2>
        <p class="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">Reserve your table now and let us craft an experience tailored to you.</p>
        <div class="flex gap-6 justify-center flex-wrap">
          <a routerLink="/reservations" class="btn btn-primary btn-lg px-12 group">
            Make a Reservation
            <app-icon name="calendar" class="ml-2 transition-transform group-hover:scale-110"></app-icon>
          </a>
          <a routerLink="/menu" class="btn btn-outline btn-lg px-12">Browse Our Menu</a>
        </div>
      </div>
    </section>

  `
})
export class HomeComponent implements OnInit {
  private menuService   = inject(MenuService);
  private reviewService = inject(ReviewService);
  private cartService   = inject(CartService);
  private seoService    = inject(SeoService);
  private structuredDataService = inject(StructuredDataService);
  categoryIconMapper    = inject(CategoryIconMapperService);

  featuredItems = signal<MenuItem[]>([]);
  reviews       = signal<Review[]>([]);
  loading       = signal(true);

  ngOnInit(): void {
    // Set SEO metadata
    this.seoService.setSeoMetadata(SEO_CONFIG.pages.home);

    // Add structured data
    this.structuredDataService.addRestaurantSchema(SEO_CONFIG.restaurant);
    this.structuredDataService.addBreadcrumbSchema([
      { name: 'Home', url: this.seoService.getBaseUrl() }
    ]);

    this.menuService.getFeaturedItems().subscribe(items => {
      this.featuredItems.set(items.slice(0, 3));
      this.loading.set(false);
    });
    this.reviewService.getReviews().subscribe(r => this.reviews.set(r));
  }

  addToCart(item: MenuItem): void {
    this.cartService.addItem(item);
  }
}
