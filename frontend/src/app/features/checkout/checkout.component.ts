import { Component, inject, signal } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '../../core/services/cart.service';
import { OrderCheckout } from '../../core/models/order.model';
import { IconComponent } from '../../shared/components/icon.component';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { CategoryIconMapperService } from '../../shared/services/category-icon-mapper.service';

type OrderStep = 'cart' | 'details' | 'payment' | 'confirmed';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    DecimalPipe,
    IconComponent,
    PageHeaderComponent,
    EmptyStateComponent
  ],
  template: `
    <!-- Page Header -->
    <app-page-header
      label="Order Online"
      title="Your Order"
      [showDivider]="true">
      
      <!-- Steps indicator -->
      <div class="flex items-center justify-between max-w-2xl mx-auto mt-12 px-4">
        @for (s of steps; track s.key; let i = $index) {
          <div class="flex flex-col items-center gap-3 relative z-10">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500"
                 [ngClass]="{
                   'bg-accent text-white ring-4 ring-accent/20': currentStep() === s.key || isStepDone(s.key),
                   'bg-surface-2 text-text-muted': currentStep() !== s.key && !isStepDone(s.key)
                 }">
              @if (isStepDone(s.key)) { <app-icon name="check" strokeWidth="3" class="text-lg"></app-icon> }
              @else { {{ i + 1 }} }
            </div>
            <span class="text-[10px] uppercase tracking-widest font-bold whitespace-nowrap"
                  [class.text-accent]="currentStep() === s.key || isStepDone(s.key)"
                  [class.text-text-dim]="currentStep() !== s.key && !isStepDone(s.key)">
              {{ s.label }}
            </span>
          </div>
          
          @if (i < steps.length - 1) {
            <div class="flex-1 h-[2px] mx-2 -mt-7 bg-surface-2 relative overflow-hidden">
              <div class="absolute inset-0 bg-accent transition-all duration-700 ease-in-out origin-left"
                   [style.transform]="isStepDone(s.key) ? 'scaleX(1)' : 'scaleX(0)'">
              </div>
            </div>
          }
        }
      </div>
    </app-page-header>

    <div class="container py-16">

      <!-- STEP 1: Cart -->
      @if (currentStep() === 'cart') {
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="flex-1 w-full animate-fade-up">
            <div class="flex items-center justify-between mb-8 border-b border-border pb-4">
              <h2 class="text-2xl font-serif text-text">Your Selection</h2>
              <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-bold">
                <app-icon name="cart" class="text-xs" strokeWidth="2.5"></app-icon>
                {{ cartService.items().length }} {{ cartService.items().length === 1 ? 'item' : 'items' }}
              </span>
            </div>

            @if (cartService.isEmpty()) {
              <div class="bg-surface/30 rounded-3xl p-12 text-center border border-white/5">
                <app-empty-state
                  icon="cart"
                  title="Your cart is empty"
                  message="Add some dishes from the menu to get started."
                  [showAction]="true"
                  actionLabel="Browse Menu"
                  (action)="goToMenu()">
                </app-empty-state>
              </div>
            } @else {
              <div class="space-y-4">
                @for (item of cartService.items(); track item.menuItem.id) {
                  <div class="group flex flex-col sm:flex-row items-center gap-6 p-5 rounded-2xl bg-surface border border-border hover:border-accent/30 transition-all hover:shadow-xl hover:shadow-accent/5">
                    <div class="w-16 h-16 rounded-xl bg-accent/5 flex items-center justify-center text-accent text-2xl group-hover:scale-110 transition-transform">
                      <app-icon [name]="categoryIconMapper.getIcon(item.menuItem.category)"></app-icon>
                    </div>
                    
                    <div class="flex-1 text-center sm:text-left">
                      <h4 class="font-bold text-lg mb-0.5">{{ item.menuItem.name }}</h4>
                      <span class="text-xs uppercase tracking-wider text-text-dim">{{ item.menuItem.category }}</span>
                    </div>

                    <div class="flex items-center gap-4 bg-bg rounded-full p-1 border border-border">
                      <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-accent/10 hover:text-accent transition-colors disabled:opacity-30" 
                              [disabled]="item.quantity <= 1"
                              (click)="cartService.updateQuantity(item.menuItem.id, item.quantity - 1)">
                        <app-icon name="minus" strokeWidth="2.5" class="text-xs"></app-icon>
                      </button>
                      <span class="w-6 text-center font-bold text-sm">{{ item.quantity }}</span>
                      <button class="w-8 h-8 rounded-full flex items-center justify-center hover:bg-accent/10 hover:text-accent transition-colors"
                              (click)="cartService.updateQuantity(item.menuItem.id, item.quantity + 1)">
                        <app-icon name="plus" strokeWidth="2.5" class="text-xs"></app-icon>
                      </button>
                    </div>

                    <div class="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end">
                      <span class="font-serif text-xl font-bold text-accent">\${{ (item.menuItem.price * item.quantity) | number:'1.2-2' }}</span>
                      <button class="text-text-dim hover:text-error transition-colors p-2" (click)="cartService.removeItem(item.menuItem.id)">
                        <app-icon name="close" strokeWidth="2.5"></app-icon>
                      </button>
                    </div>
                  </div>
                }
              </div>

              <div class="flex items-center justify-between mt-10">
                <button class="text-sm font-bold text-text-dim hover:text-text transition-colors flex items-center gap-2" (click)="cartService.clearCart()">
                  <app-icon name="close" class="text-xs"></app-icon>
                  Clear Selection
                </button>
                <a routerLink="/menu" class="btn btn-outline btn-sm">Add More Items</a>
              </div>
            }
          </div>

          @if (!cartService.isEmpty()) {
            <div class="w-full lg:w-[380px] shrink-0 sticky top-24 animate-fade-up" style="animation-delay: 100ms">
              <div class="bg-surface border border-border rounded-3xl p-8 shadow-2xl relative overflow-hidden">
                <div class="absolute top-0 left-0 right-0 h-1 bg-accent"></div>
                
                <h3 class="text-xl font-serif mb-6 flex items-center gap-3">
                  <app-icon name="checkBadge" class="text-accent"></app-icon>
                  Complete Order
                </h3>
                
                <div class="space-y-6 mb-8">
                  <div class="flex justify-between text-sm">
                    <span class="text-text-muted">Subtotal</span>
                    <span class="text-text font-medium">\${{ cartService.totalAmount() | number:'1.2-2' }}</span>
                  </div>
                  <div class="flex justify-between text-sm">
                    <div class="flex items-center gap-2">
                      <span class="text-text-muted">Service Fee</span>
                      <span class="px-1.5 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-bold">10%</span>
                    </div>
                    <span class="text-text font-medium">\${{ (cartService.totalAmount() * 0.1) | number:'1.2-2' }}</span>
                  </div>
                  <div class="pt-4 border-t border-border flex justify-between items-end">
                    <span class="font-bold">Total</span>
                    <div class="text-right">
                      <span class="block text-3xl font-serif font-bold text-accent">\${{ (cartService.totalAmount() * 1.1) | number:'1.2-2' }}</span>
                    </div>
                  </div>
                </div>

                <button class="btn btn-primary btn-lg w-full justify-center group" (click)="goTo('details')">
                  Continue to Details
                  <app-icon name="arrow_right" strokeWidth="2" class="transition-transform group-hover:translate-x-1"></app-icon>
                </button>
                
                <p class="text-center text-[10px] text-text-dim mt-4 uppercase tracking-widest font-medium">
                  Taxes and fees included
                </p>
              </div>
            </div>
          }
        </div>
      }

      <!-- STEP 2: Customer Details -->
      @if (currentStep() === 'details') {
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="flex-1 w-full animate-fade-up">
            <h2 class="text-2xl font-serif mb-8">Delivery Information</h2>
            
            <form [formGroup]="detailsForm" (ngSubmit)="goTo('payment')" class="space-y-10">
              <div class="space-y-4">
                <label class="text-sm font-bold uppercase tracking-widest text-text-muted block">Order Type</label>
                <div class="grid sm:grid-cols-3 gap-4">
                  @for (type of orderTypes; track type.value) {
                    <label class="relative flex flex-col items-center gap-3 p-5 rounded-2xl bg-surface border transition-all cursor-pointer group" [ngClass]="{'border-accent bg-accent/5': detailsForm.value.orderType === type.value, 'border-border': detailsForm.value.orderType !== type.value}">
                      <input type="radio" formControlName="orderType" [value]="type.value" class="sr-only">
                      
                      <div class="w-10 h-10 rounded-xl flex items-center justify-center transition-all" [ngClass]="{'bg-accent text-white': detailsForm.value.orderType === type.value, 'bg-accent/5 text-accent': detailsForm.value.orderType !== type.value}">
                        <app-icon [name]="type.icon" strokeWidth="2"></app-icon>
                      </div>
                      
                      <div class="text-center">
                        <span class="block font-bold text-sm" [class.text-accent]="detailsForm.value.orderType === type.value">{{ type.label }}</span>
                        <span class="text-[10px] text-text-dim uppercase tracking-tighter">{{ type.desc }}</span>
                      </div>

                      @if (detailsForm.value.orderType === type.value) {
                        <div class="absolute top-2 right-2 w-4 h-4 rounded-full bg-accent text-white flex items-center justify-center animate-scale-in">
                          <app-icon name="check" strokeWidth="3" class="text-[8px]"></app-icon>
                        </div>
                      }
                    </label>
                  }
                </div>
              </div>

              <div class="grid sm:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-text-muted" for="cname">Full Name *</label>
                  <input id="cname" type="text" class="w-full bg-surface-2 border border-border rounded-xl px-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                         formControlName="name" placeholder="Enter your name">
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-text-muted" for="cemail">Email Address *</label>
                  <input id="cemail" type="email" class="w-full bg-surface-2 border border-border rounded-xl px-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                         formControlName="email" placeholder="email@example.com">
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-text-muted" for="cphone">Phone Number *</label>
                <div class="relative">
                  <div class="absolute left-5 top-1/2 -translate-y-1/2 text-text-dim">
                    <app-icon name="phone" class="text-sm"></app-icon>
                  </div>
                  <input id="cphone" type="tel" class="w-full bg-surface-2 border border-border rounded-xl pl-12 pr-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                         formControlName="phone" placeholder="+1 (555) 000-0000">
                </div>
              </div>

              @if (detailsForm.value.orderType === 'delivery') {
                <div class="space-y-2 animate-fade-down">
                  <label class="text-sm font-medium text-text-muted" for="caddress">Delivery Address *</label>
                  <div class="relative">
                    <div class="absolute left-5 top-1/2 -translate-y-1/2 text-text-dim">
                      <app-icon name="mapPin" class="text-sm"></app-icon>
                    </div>
                    <input id="caddress" type="text" class="w-full bg-surface-2 border border-border rounded-xl pl-12 pr-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                           formControlName="address" placeholder="123 Main St, New York, NY">
                  </div>
                </div>
              }

              <div class="space-y-2">
                <label class="text-sm font-medium text-text-muted" for="cinstructions">Special Instructions</label>
                <textarea id="cinstructions" class="w-full bg-surface-2 border border-border rounded-xl px-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all min-h-[120px]" 
                          formControlName="specialInstructions" placeholder="Any dietary requirements or delivery notes..."></textarea>
              </div>

              <div class="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <button type="button" class="w-full sm:w-auto btn btn-ghost px-8" (click)="goTo('cart')">
                  <app-icon name="arrow_left" strokeWidth="2" class="mr-2"></app-icon> 
                  Back
                </button>
                <button type="submit" class="w-full sm:flex-1 btn btn-primary btn-lg justify-center group" [disabled]="detailsForm.invalid">
                  Continue to Payment 
                  <app-icon name="arrow_right" strokeWidth="2" class="ml-2 transition-transform group-hover:translate-x-1"></app-icon>
                </button>
              </div>
            </form>
          </div>

          <ng-container [ngTemplateOutlet]="orderSummaryPanel"></ng-container>
        </div>
      }

      <!-- STEP 3: Payment -->
      @if (currentStep() === 'payment') {
        <div class="flex flex-col lg:flex-row gap-12 items-start">
          <div class="flex-1 w-full animate-fade-up">
            <h2 class="text-2xl font-serif mb-8">Secure Payment</h2>
            
            <div class="mb-12 perspective-[1000px] flex justify-center">
              <!-- Animated Credit Card Visual -->
              <div class="relative w-full max-w-[380px] aspect-[1.6/1] rounded-2xl p-8 bg-gradient-to-br from-accent to-accent-hover shadow-2xl text-white flex flex-col justify-between overflow-hidden group">
                <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
                
                <div class="flex justify-between items-start relative z-10">
                  <div class="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-lg overflow-hidden flex items-center justify-center border border-white/20">
                    <div class="w-full h-full opacity-30 bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,black_4px,black_5px)]"></div>
                  </div>
                  <app-icon name="sparkles" class="text-3xl opacity-50"></app-icon>
                </div>

                <div class="relative z-10 text-2xl font-mono tracking-[0.25em] py-4">
                  {{ paymentForm.value.cardNumber ? (paymentForm.value.cardNumber | slice:0:4) + ' ' + (paymentForm.value.cardNumber | slice:5:9) + ' **** ****' : '**** **** **** ****' }}
                </div>

                <div class="relative z-10 flex justify-between items-end">
                  <div class="flex flex-col">
                    <span class="text-[10px] uppercase tracking-widest opacity-60 mb-1">Card Holder</span>
                    <span class="font-bold tracking-wider uppercase truncate max-w-[180px]">{{ paymentForm.value.cardHolder || 'Your Name' }}</span>
                  </div>
                  <div class="flex flex-col items-end">
                    <span class="text-[10px] uppercase tracking-widest opacity-60 mb-1">Expires</span>
                    <span class="font-bold tracking-wider">{{ paymentForm.value.cardExpiry || 'MM/YY' }}</span>
                  </div>
                </div>
              </div>
            </div>

            <form [formGroup]="paymentForm" (ngSubmit)="placeOrder()" class="space-y-6">
              <div class="space-y-2">
                <label class="text-sm font-medium text-text-muted" for="cardnum">Card Number *</label>
                <div class="relative">
                  <div class="absolute left-5 top-1/2 -translate-y-1/2 text-text-dim">
                    <app-icon name="checkout" class="text-sm"></app-icon>
                  </div>
                  <input id="cardnum" type="text" class="w-full bg-surface-2 border border-border rounded-xl pl-12 pr-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                         formControlName="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19">
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-medium text-text-muted" for="cardholder">Card Holder Name *</label>
                <input id="cardholder" type="text" class="w-full bg-surface-2 border border-border rounded-xl px-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                       formControlName="cardHolder" placeholder="As it appears on card">
              </div>

              <div class="grid grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-sm font-medium text-text-muted" for="expiry">Expiry Date *</label>
                  <input id="expiry" type="text" class="w-full bg-surface-2 border border-border rounded-xl px-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                         formControlName="cardExpiry" placeholder="MM/YY" maxlength="5">
                </div>
                <div class="space-y-2">
                  <label class="text-sm font-medium text-text-muted" for="cvc">CVC *</label>
                  <input id="cvc" type="text" class="w-full bg-surface-2 border border-border rounded-xl px-5 py-3.5 text-text focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all" 
                         formControlName="cardCvc" placeholder="123" maxlength="3">
                </div>
              </div>

              <div class="p-4 rounded-xl bg-accent/5 border border-accent/20 flex items-center gap-3 text-xs text-text-muted">
                <app-icon name="lock" class="text-accent text-lg"></app-icon>
                <span>Your transaction is secured with 256-bit SSL encryption. We do not store your full card details on our servers.</span>
              </div>

              <div class="flex flex-col sm:flex-row items-center gap-4 pt-6">
                <button type="button" class="w-full sm:w-auto btn btn-ghost px-8" (click)="goTo('details')">
                  <app-icon name="arrow_left" strokeWidth="2" class="mr-2"></app-icon> 
                  Back
                </button>
                <button type="submit" class="w-full sm:flex-1 btn btn-primary btn-lg justify-center group" [disabled]="paymentForm.invalid || submitting()">
                  @if (submitting()) {
                    <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                    Processing Order...
                  } @else {
                    Place Order · \${{ (cartService.totalAmount() * 1.1) | number:'1.2-2' }}
                    <app-icon name="arrow_right" strokeWidth="2" class="ml-2 transition-transform group-hover:translate-x-1"></app-icon>
                  }
                </button>
              </div>
            </form>
          </div>

          <ng-container *ngTemplateOutlet="orderSummaryPanel"></ng-container>
        </div>
      }

      <!-- STEP 4: Confirmed -->
      @if (currentStep() === 'confirmed') {
        <div class="max-w-2xl mx-auto text-center py-12 animate-fade-up">
          <div class="w-24 h-24 rounded-full bg-success/10 border-2 border-success text-success flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-success/20 animate-bounce-in">
            <app-icon name="check" strokeWidth="3" class="text-4xl"></app-icon>
          </div>
          
          <h2 class="text-4xl font-serif mb-4">Order Confirmed</h2>
          <p class="text-xl text-text-muted mb-2 font-medium">Thank you, {{ detailsForm.value.name }}!</p>
          <p class="text-text-dim leading-relaxed mb-10 max-w-md mx-auto">{{ orderMessage() }}</p>

          <div class="bg-surface border border-border rounded-2xl p-6 flex flex-col items-center gap-2 mb-12 shadow-xl">
             <span class="text-[10px] text-text-dim font-bold uppercase tracking-widest">Tracking Reference</span>
             <span class="text-3xl font-mono font-bold text-accent">#{{ orderId() }}</span>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a routerLink="/" class="btn btn-primary btn-lg px-12">Return to Home</a>
            <button class="btn btn-outline btn-lg px-12" (click)="currentStep.set('cart'); cartService.clearCart()">Browse More</button>
          </div>
        </div>
      }
    </div>

    <!-- Order Summary Panel (reusable template) -->
    <ng-template #orderSummaryPanel>
      <div class="w-full lg:w-[380px] shrink-0 lg:sticky lg:top-24 animate-fade-up" style="animation-delay: 200ms">
        <div class="bg-surface-2 border border-border rounded-3xl p-8 shadow-sm">
          <h3 class="text-lg font-bold mb-6 flex items-center gap-2">
            <app-icon name="cart" class="text-accent"></app-icon>
            Order Summary
          </h3>
          
          <div class="space-y-4 mb-8">
            @for (item of cartService.items(); track item.menuItem.id) {
              <div class="flex justify-between items-start gap-4">
                <div class="flex-1">
                  <div class="flex items-center gap-2">
                    <span class="text-accent font-bold text-sm">{{ item.quantity }}×</span>
                    <span class="text-sm font-medium text-text">{{ item.menuItem.name }}</span>
                  </div>
                  <span class="text-[10px] text-text-dim uppercase tracking-wider block mt-0.5">{{ item.menuItem.category }}</span>
                </div>
                <span class="text-sm font-bold text-text-muted">\${{ (item.menuItem.price * item.quantity) | number:'1.2-2' }}</span>
              </div>
            }
          </div>
          
          <div class="space-y-4 pt-6 border-t border-border">
            <div class="flex justify-between text-sm">
              <span class="text-text-dim">Subtotal</span>
              <span class="text-text font-medium">\${{ cartService.totalAmount() | number:'1.2-2' }}</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-text-dim">Service Fee (10%)</span>
              <span class="text-text font-medium">\${{ (cartService.totalAmount() * 0.1) | number:'1.2-2' }}</span>
            </div>
            <div class="flex justify-between items-center pt-2">
              <span class="font-bold text-lg">Total</span>
              <span class="text-2xl font-serif font-bold text-accent">\${{ (cartService.totalAmount() * 1.1) | number:'1.2-2' }}</span>
            </div>
          </div>
        </div>
      </div>
    </ng-template>
  `
})
export class CheckoutComponent {
  cartService = inject(CartService);
  categoryIconMapper = inject(CategoryIconMapperService);
  private fb  = inject(FormBuilder);

  steps = [
    { key: 'cart'      as OrderStep, label: 'Cart'     },
    { key: 'details'   as OrderStep, label: 'Details'  },
    { key: 'payment'   as OrderStep, label: 'Payment'  },
    { key: 'confirmed' as OrderStep, label: 'Confirmed'},
  ];

  stepOrder: OrderStep[] = ['cart', 'details', 'payment', 'confirmed'];
  currentStep = signal<OrderStep>('cart');
  submitting  = signal(false);
  orderId     = signal<number | null>(null);
  orderMessage = signal('');

  orderTypes = [
    { value: 'dine-in',  label: 'Dine In',  icon: 'dining', desc: 'Eat at the restaurant' },
    { value: 'takeaway', label: 'Takeaway',  icon: 'food', desc: 'Pick up your order'     },
    { value: 'delivery', label: 'Delivery',  icon: 'truck', desc: 'We deliver to your door' },
  ];

  detailsForm = this.fb.group({
    name:                ['', Validators.required],
    email:               ['', [Validators.required, Validators.email]],
    phone:               ['', Validators.required],
    orderType:           ['dine-in', Validators.required],
    address:             [''],
    specialInstructions: [''],
  });

  paymentForm = this.fb.group({
    cardNumber: ['', Validators.required],
    cardHolder: ['', Validators.required],
    cardExpiry: ['', Validators.required],
    cardCvc:    ['', Validators.required],
  });

  isStepDone(key: OrderStep): boolean {
    const cur = this.stepOrder.indexOf(this.currentStep());
    const idx = this.stepOrder.indexOf(key);
    return idx < cur;
  }

  goTo(step: OrderStep): void {
    if (step === 'payment' && this.detailsForm?.invalid) {
      this.detailsForm.markAllAsTouched();
      return;
    }
    this.currentStep.set(step);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  goToMenu(): void {
    // Navigate to menu - handled by empty state action
  }

  placeOrder(): void {
    if (this.paymentForm?.invalid) {
      this.paymentForm?.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    const checkout: OrderCheckout = {
      ...this.detailsForm?.value,
      cardNumber: this.paymentForm?.value?.cardNumber ?? undefined,
      cardExpiry: this.paymentForm?.value?.cardExpiry ?? undefined,
      cardCvc:    this.paymentForm?.value?.cardCvc ?? undefined,
    } as OrderCheckout;

    this.cartService.placeOrder(checkout).subscribe(res => {
      this.orderId.set(res.id);
      this.orderMessage.set(res.message);
      this.cartService.clearCart();
      this.submitting.set(false);
      this.currentStep.set('confirmed');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
