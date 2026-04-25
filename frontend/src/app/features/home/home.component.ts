import { Component, OnInit, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../core/services/menu.service';
import { ReviewService } from '../../core/services/review.service';
import { CartService } from '../../core/services/cart.service';
import { MenuItem } from '../../core/models/menu-item.model';
import { Review } from '../../core/models/review.model';
import { IconComponent } from '../../shared/components/icon.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { MenuItemCardComponent } from '../../shared/components/menu-item-card/menu-item-card.component';
import { ReviewCardComponent } from '../../shared/components/review-card/review-card.component';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { CategoryIconMapperService } from '../../shared/services/category-icon-mapper.service';

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
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg"></div>
      <div class="hero-overlay"></div>
      <div class="container hero-content">
        <div class="hero-text animate-fade-up">
          <span class="badge badge-accent">Est. 2019 · New York City</span>
          <h1 class="hero-title">
            A Symphony of<br>
            <span class="text-accent">NooR</span>
          </h1>
          <p class="hero-subtitle">
            Where culinary artistry meets obsidian elegance. Every dish is a narrative,
            every evening an unforgettable experience.
          </p>
          <div class="hero-actions">
            <a routerLink="/reservations" class="btn btn-primary btn-lg">
              Reserve Your Table
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a routerLink="/menu" class="btn btn-ghost btn-lg">Explore Menu</a>
          </div>
        </div>
        <div class="hero-stats">
          <div class="stat-card">
            <span class="stat-number">12+</span>
            <span class="stat-label">Years of Excellence</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">48</span>
            <span class="stat-label">Curated Dishes</span>
          </div>
          <div class="stat-card">
            <span class="stat-number flex items-center justify-center gap-1"><app-icon name="star" fill="currentColor" strokeWidth="0"></app-icon> 4.9</span>
            <span class="stat-label">Guest Rating</span>
          </div>
        </div>
      </div>
      <div class="hero-scroll-indicator">
        <div class="scroll-line"></div>
        <span>Scroll to explore</span>
      </div>
    </section>

    <!-- Featured Items Section -->
    <section class="section">
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
          <div class="featured-grid">
            @for (item of featuredItems(); track item.id) {
              <app-menu-item-card
                [item]="item"
                [categoryIcon]="categoryIconMapper.getIcon(item.category)"
                (addToCart)="addToCart($event)">
              </app-menu-item-card>
            }
          </div>

          <div class="text-center mt-10">
            <a routerLink="/menu" class="btn btn-outline btn-lg">View Full Menu</a>
          </div>
        }
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience-section section">
      <div class="container">
        <div class="experience-grid">
          <div class="experience-text">
            <span class="section-label">Our Philosophy</span>
            <h2 class="section-title text-left">The Art of<br><span class="text-accent">Fine Dining</span></h2>
            <div class="divider my-4 ml-0"></div>
            <p class="text-muted mb-4 leading-relaxed">
              At NooR, we believe that dining is more than sustenance — it's a complete sensory journey. Our kitchen brigade, led by Chef Marcus Voss, sources only the finest seasonal ingredients from trusted local farms and international purveyors.
            </p>
            <p class="text-muted mb-8 leading-relaxed">
              Every dish is composed with the care of a painter, the precision of a sculptor, and the heart of a storyteller.
            </p>
            <div class="experience-features">
              <div class="experience-feature">
                <app-icon name="leaf" class="feature-icon"></app-icon>
                <div>
                  <strong>Farm to Table</strong>
                  <p>Locally sourced, seasonal ingredients</p>
                </div>
              </div>
              <div class="experience-feature">
                <app-icon name="wine" class="feature-icon"></app-icon>
                <div>
                  <strong>Curated Wine Cellar</strong>
                  <p>500+ labels from 30+ countries</p>
                </div>
              </div>
              <div class="experience-feature">
                <app-icon name="award" class="feature-icon"></app-icon>
                <div>
                  <strong>Award-Winning</strong>
                  <p>Michelin recommended since 2022</p>
                </div>
              </div>
            </div>
          </div>
          <div class="experience-visual">
            <div class="visual-card">
              <div class="visual-inner">
                <app-icon name="diamondFill" class="visual-text"></app-icon>
                <h3>Tasting Menu</h3>
                <p>7-Course Experience</p>
                <p class="price text-xl mt-3">$185 pp</p>
              </div>
            </div>
            <div class="visual-tag">
              <span>Chef's Table Available</span>
              <a routerLink="/reservations" class="btn btn-primary btn-sm">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="section bg-surface">
      <div class="container">
        <app-section-header
          label="What Our Guests Say"
          title="Stories of Excellence"
          [showDivider]="true">
        </app-section-header>

        @if (reviews().length > 0) {
          <div class="reviews-grid">
            @for (review of reviews(); track review.id) {
              <app-review-card [review]="review"></app-review-card>
            }
          </div>
        }
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container cta-content">
        <h2 class="section-title">Ready for an Unforgettable Evening?</h2>
        <p class="section-subtitle">Reserve your table now and let us craft an experience tailored to you.</p>
        <div class="flex gap-4 justify-center flex-wrap mt-8">
          <a routerLink="/reservations" class="btn btn-primary btn-lg">Make a Reservation</a>
          <a routerLink="/menu" class="btn btn-outline btn-lg">Browse Our Menu</a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent implements OnInit {
  private menuService   = inject(MenuService);
  private reviewService = inject(ReviewService);
  private cartService   = inject(CartService);
  categoryIconMapper    = inject(CategoryIconMapperService);

  featuredItems = signal<MenuItem[]>([]);
  reviews       = signal<Review[]>([]);
  loading       = signal(true);

  ngOnInit(): void {
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
