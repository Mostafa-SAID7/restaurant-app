import { Component, OnInit, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../core/services/menu.service';
import { CartService } from '../../core/services/cart.service';
import { MenuItem, MenuCategory } from '../../core/models/menu-item.model';
import { IconComponent } from '../../shared/components/icon.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { MenuItemCardComponent } from '../../shared/components/menu-item-card/menu-item-card.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { CategoryIconMapperService } from '../../shared/services/category-icon-mapper.service';

type FilterCategory = 'All' | MenuCategory;

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    IconComponent,
    PageHeaderComponent,
    MenuItemCardComponent,
    EmptyStateComponent,
    LoadingSpinnerComponent
  ],
  template: `
    <!-- Page Header -->
    <app-page-header
      label="Our Culinary Offerings"
      title="The Full Menu"
      subtitle="Every dish is composed with seasonal ingredients, artisan techniques, and a deep passion for flavour."
      [showDivider]="true">
    </app-page-header>

    <div class="container mt-12 pb-32">

      <!-- Search & Filter Bar -->
      <div class="flex flex-col gap-8 mb-12">
        <div class="relative max-w-2xl mx-auto w-full group">
          <div class="absolute left-5 top-1/2 -translate-y-1/2 text-text-muted group-focus-within:text-accent transition-colors">
            <app-icon name="search" strokeWidth="2" class="text-xl"></app-icon>
          </div>
          <input
            type="text"
            class="w-full bg-surface/50 border border-white/10 rounded-2xl py-4 pl-14 pr-12 text-white placeholder:text-text-dim focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent/50 transition-all backdrop-blur-sm"
            placeholder="Search dishes, ingredients, categories..."
            [value]="searchQuery()"
            (input)="onSearch($event)"
          />
          @if (searchQuery()) {
            <button class="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-text-muted hover:text-white transition-colors" (click)="clearSearch()">
              <app-icon name="close"></app-icon>
            </button>
          }
          
        </div>

        <div class="flex gap-3 overflow-x-auto pb-4 no-scrollbar justify-center">
          @for (cat of categories; track cat) {
            <button
              class="px-6 py-2.5 rounded-full border text-sm font-medium transition-all whitespace-nowrap flex items-center gap-2"
              [class]="selectedCategory() === cat 
                ? 'bg-accent border-accent text-white shadow-lg shadow-accent/20' 
                : 'bg-surface/50 border-white/5 text-text-muted hover:border-white/20 hover:text-white'"
              (click)="setCategory(cat)"
            >
              <app-icon [name]="categoryIconMapper.getIcon(cat)" class="text-base"></app-icon>
              {{ cat }}
            </button>
          }
        </div>
      </div>

      <!-- Results count & Info -->
      <div class="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
        <div class="flex items-center gap-2 text-sm">
          <span class="font-bold text-white">{{ filteredItems().length }}</span>
          <span class="text-text-muted">dishes available</span>
          @if (searchQuery()) {
            <span class="text-text-dim mx-1">·</span>
            <span class="text-accent">Searching for "{{ searchQuery() }}"</span>
          }
        </div>
        <div class="hidden md:flex items-center gap-4 text-[10px] uppercase tracking-widest text-text-dim">
          <span>Seasonal Selection</span>
          <span class="w-1.5 h-1.5 rounded-full bg-accent"></span>
          <span>Chef Marcus Voss</span>
        </div>
      </div>

      <!-- Loading State -->
      @if (loading()) {
        <div class="py-20">
          <app-loading-spinner></app-loading-spinner>
        </div>
      } @else {

        <!-- Menu Content -->
        @if (selectedCategory() === 'All' && !searchQuery()) {
          @for (cat of menuCategories; track cat; let i = $index) {
            @if (getItemsByCategory(cat).length > 0) {
              <section class="mb-20 last:mb-0">
                <div class="flex items-center gap-6 mb-10 animate-fade-up" [style.animation-delay]="i * 0.1 + 's'">
                  <div class="flex items-center gap-3">
                    <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent">
                      <app-icon [name]="categoryIconMapper.getIcon(cat)" class="text-xl"></app-icon>
                    </div>
                    <h3 class="text-2xl font-serif text-white tracking-wide">{{ cat }}</h3>
                  </div>
                  <div class="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent"></div>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  @for (item of getItemsByCategory(cat); track item.id) {
                    <app-menu-item-card
                      [item]="item"
                      [categoryIcon]="categoryIconMapper.getIcon(item.category)"
                      (addToCart)="addToCart($event)">
                    </app-menu-item-card>
                  }
                </div>
              </section>
            }
          }
        } @else {
          <!-- Filtered Grid View -->
          @if (filteredItems().length === 0) {
            <div class="py-20">
              <app-empty-state
                icon="search"
                title="No culinary matches"
                [message]="noMatchesMessage()"
                [showAction]="true"
                actionLabel="Reset Filters"
                (action)="clearSearch()">
              </app-empty-state>
            </div>
          } @else {
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
              @for (item of filteredItems(); track item.id) {
                <app-menu-item-card
                  [item]="item"
                  [categoryIcon]="categoryIconMapper.getIcon(item.category)"
                  (addToCart)="addToCart($event)">
                </app-menu-item-card>
              }
            </div>
          }
        }
      }

      <!-- Cart Summary Sticky Overlay -->
      @if (cartCount() > 0) {
        <div class="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 animate-bounce-in">
          <div class="bg-surface/80 backdrop-blur-xl border border-accent/30 rounded-full py-3 pl-6 pr-3 flex items-center gap-8 shadow-2xl shadow-accent/20">
            <div class="flex items-center gap-4">
              <div class="relative">
                <app-icon name="cart" class="text-xl text-accent"></app-icon>
                <span class="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-white text-bg text-[10px] font-bold flex items-center justify-center">
                  {{ cartCount() }}
                </span>
              </div>
              <div class="flex flex-col">
                <span class="text-[10px] uppercase tracking-widest text-text-dim leading-none mb-1">Your Order</span>
                <span class="text-sm font-bold text-white leading-none">\${{ cartTotal() | number:'1.2-2' }}</span>
              </div>
            </div>
            <a routerLink="/checkout" class="btn btn-primary rounded-full px-8 py-2.5 text-sm">
              Checkout
            </a>
          </div>
        </div>
      }
    </div>
  `
})
export class MenuComponent implements OnInit {
  private menuService = inject(MenuService);
  private cartService = inject(CartService);
  categoryIconMapper = inject(CategoryIconMapperService);

  categories: FilterCategory[] = ['All', 'Appetizers', 'Mains', 'Desserts', 'Drinks', 'Specials'];
  menuCategories: MenuCategory[] = ['Appetizers', 'Mains', 'Desserts', 'Drinks', 'Specials'];

  allItems        = signal<MenuItem[]>([]);
  filteredItems   = signal<MenuItem[]>([]);
  selectedCategory = signal<FilterCategory>('All');
  loading         = signal(true);
  searchQuery     = signal('');
  
  noMatchesMessage = computed(() => {
    const q = this.searchQuery();
    return q ? `We couldn't find any dishes matching "${q}". Please try a different term.` : "No dishes found.";
  });

  cartCount = this.cartService.totalItems;
  cartTotal = this.cartService.totalAmount;

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(items => {
      this.allItems.set(items);
      this.filteredItems.set(items);
      this.loading.set(false);
    });
  }

  setCategory(cat: FilterCategory): void {
    this.selectedCategory.set(cat);
    this.searchQuery.set('');
    this.applyFilter();
  }

  onSearch(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchQuery.set(target.value);
    this.selectedCategory.set('All');
    this.applyFilter();
  }

  clearSearch(): void {
    this.searchQuery.set('');
    this.applyFilter();
  }

  private applyFilter(): void {
    let items = this.allItems();
    const query = this.searchQuery().trim();
    if (query) {
      const q = query.toLowerCase();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
      );
    } else if (this.selectedCategory() !== 'All') {
      items = items.filter(i => i.category === this.selectedCategory());
    }
    this.filteredItems.set(items);
  }

  getItemsByCategory(cat: MenuCategory): MenuItem[] {
    return this.allItems().filter(i => i.category === cat);
  }

  addToCart(item: MenuItem): void {
    this.cartService.addItem(item);
  }
}
