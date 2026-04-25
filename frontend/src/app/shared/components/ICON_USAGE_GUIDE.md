# Icon System Usage Guide

## Overview

The Restaurant App uses a custom SVG-based icon system with 50+ icons. All icons are defined in `icon.component.ts` and styled with utility classes in `icons.scss`.

## Quick Start

### Basic Icon Usage

```html
<!-- Simple icon -->
<app-icon name="star"></app-icon>

<!-- Icon with custom size -->
<app-icon name="cart" class="icon-lg"></app-icon>

<!-- Icon with custom color -->
<app-icon name="check" class="icon-success"></app-icon>

<!-- Icon with text -->
<span class="icon-with-text">
  <app-icon name="mapPin" class="icon-accent"></app-icon>
  <span>123 Main Street</span>
</span>
```

## Icon Component API

### Inputs

| Input | Type | Default | Description |
|-------|------|---------|-------------|
| `name` | string | required | Icon name (see Icon List below) |
| `fill` | string | 'none' | SVG fill attribute |
| `stroke` | string | 'currentColor' | SVG stroke attribute |
| `strokeWidth` | string | '1.5' | SVG stroke-width attribute |
| `viewBox` | string | '0 0 24 24' | SVG viewBox attribute |

### Examples

```html
<!-- Default (outline style) -->
<app-icon name="star"></app-icon>

<!-- Filled style -->
<app-icon name="star" fill="currentColor"></app-icon>

<!-- Custom stroke width -->
<app-icon name="star" strokeWidth="2"></app-icon>

<!-- Custom colors -->
<app-icon name="star" stroke="#FF6B6B"></app-icon>
```

## Icon List

### Navigation & Misc (12 icons)
- `search` - Search icon
- `close` - Close/X icon
- `check` - Checkmark icon
- `checkBadge` - Checkmark with badge
- `lock` - Lock icon
- `award` - Award/trophy icon
- `star` - Star outline
- `starFill` - Star filled
- `diamond` - Diamond outline
- `diamondFill` - Diamond filled
- `noorLogo` - NooR logo
- `minus` - Minus/subtract icon

### Directional (5 icons)
- `plus` - Plus/add icon
- `arrow_right` - Right arrow
- `arrow_left` - Left arrow
- `chevronDown` - Down chevron
- `chevronLeft` - Left chevron
- `chevronRight` - Right chevron

### Decorative (8 icons)
- `candle` - Candle icon
- `trophy` - Trophy icon
- `checkout` - Checkout icon
- `takeout` - Takeout/delivery icon
- `bike` - Bike/delivery icon
- `seedling` - Seedling/plant icon
- `gift` - Gift icon
- `mapPinFill` - Map pin filled

### Concepts (8 icons)
- `leaf` - Leaf icon
- `wine` - Wine glass icon
- `chef` - Chef/person icon
- `handshake` - Handshake icon
- `sparkles` - Sparkles/magic icon
- `instagram` - Instagram logo
- `facebook` - Facebook logo
- `twitter` - Twitter logo

### Contact & Details (7 icons)
- `mapPin` - Map pin outline
- `phone` - Phone icon
- `envelope` - Email/envelope icon
- `calendar` - Calendar icon
- `clock` - Clock/time icon
- `users` - Users/people icon
- `cart` - Shopping cart icon

### Food & Drink (9 icons)
- `food` - Food/plate icon
- `fire` - Fire/spicy icon
- `truck` - Delivery truck icon
- `dining` - Dining/restaurant icon
- `category_specials` - Specials category
- `category_appetizers` - Appetizers category
- `category_mains` - Main courses category
- `category_desserts` - Desserts category
- `category_drinks` - Drinks category

## Size Utilities

Use these classes to control icon size:

```html
<!-- Size options -->
<app-icon name="star" class="icon-xs"></app-icon>   <!-- 0.75rem -->
<app-icon name="star" class="icon-sm"></app-icon>   <!-- 1rem -->
<app-icon name="star" class="icon-md"></app-icon>   <!-- 1.25rem -->
<app-icon name="star" class="icon-lg"></app-icon>   <!-- 1.5rem -->
<app-icon name="star" class="icon-xl"></app-icon>   <!-- 2rem -->
<app-icon name="star" class="icon-2xl"></app-icon>  <!-- 2.5rem -->
<app-icon name="star" class="icon-3xl"></app-icon>  <!-- 3rem -->
<app-icon name="star" class="icon-4xl"></app-icon>  <!-- 4rem -->
<app-icon name="star" class="icon-5xl"></app-icon>  <!-- 5rem -->
```

## Color Utilities

Use these classes to control icon color:

```html
<!-- Color options -->
<app-icon name="star" class="icon-accent"></app-icon>    <!-- Primary accent color -->
<app-icon name="star" class="icon-success"></app-icon>   <!-- Success green -->
<app-icon name="star" class="icon-error"></app-icon>     <!-- Error red -->
<app-icon name="star" class="icon-warning"></app-icon>   <!-- Warning yellow -->
<app-icon name="star" class="icon-muted"></app-icon>     <!-- Muted gray -->
<app-icon name="star" class="icon-light"></app-icon>     <!-- Light text color -->
```

## Spacing Utilities

```html
<!-- Inline with text -->
<span class="icon-inline">
  <app-icon name="star"></app-icon>
  Rating
</span>

<!-- Inline with left margin -->
<span class="icon-inline-left">
  <app-icon name="star"></app-icon>
  Rating
</span>

<!-- Inline with right margin -->
<span class="icon-inline-right">
  Rating
  <app-icon name="star"></app-icon>
</span>

<!-- Block display (centered) -->
<app-icon name="star" class="icon-block"></app-icon>
```

## Animation Utilities

```html
<!-- Pulse animation -->
<app-icon name="star" class="icon-pulse"></app-icon>

<!-- Spin animation -->
<app-icon name="star" class="icon-spin"></app-icon>

<!-- Bounce animation -->
<app-icon name="star" class="icon-bounce"></app-icon>
```

## Component Patterns

### Icon Button

```html
<button class="icon-button">
  <app-icon name="close"></app-icon>
</button>

<!-- Small button -->
<button class="icon-button icon-button-sm">
  <app-icon name="close"></app-icon>
</button>

<!-- Large button -->
<button class="icon-button icon-button-lg">
  <app-icon name="close"></app-icon>
</button>
```

### Icon Badge

```html
<span class="icon-badge">
  <app-icon name="cart" class="icon-lg"></app-icon>
</span>
```

### Icon with Text

```html
<div class="icon-with-text">
  <app-icon name="mapPin" class="icon-accent"></app-icon>
  <span>123 Main Street</span>
</div>
```

### Icon List

```html
<div class="icon-list">
  <div class="icon-list-item">
    <app-icon name="check" class="icon-accent"></app-icon>
    <span>Feature 1</span>
  </div>
  <div class="icon-list-item">
    <app-icon name="check" class="icon-accent"></app-icon>
    <span>Feature 2</span>
  </div>
</div>
```

### Icon Grid

```html
<div class="icon-grid">
  <div class="icon-grid-item">
    <app-icon name="star" class="icon-2xl"></app-icon>
  </div>
  <div class="icon-grid-item">
    <app-icon name="heart" class="icon-2xl"></app-icon>
  </div>
</div>
```

## Accessibility

### Icon-Only Buttons

Always add aria-label to icon-only buttons:

```html
<button class="icon-button" aria-label="Close menu">
  <app-icon name="close"></app-icon>
</button>
```

### Decorative Icons

For purely decorative icons, add aria-hidden:

```html
<span aria-hidden="true">
  <app-icon name="sparkles"></app-icon>
</span>
```

### Icon with Text

When icon is with text, no additional aria attributes needed:

```html
<span class="icon-with-text">
  <app-icon name="mapPin"></app-icon>
  <span>Location</span>
</span>
```

## Best Practices

### ✅ DO

- Use semantic icon names (e.g., `close` for close button)
- Combine icons with text for clarity
- Use size utilities for consistency
- Add aria-labels to icon-only buttons
- Use `currentColor` for color inheritance

### ❌ DON'T

- Use icons without context (unless aria-label provided)
- Mix different icon styles in same component
- Use hardcoded colors instead of utility classes
- Forget accessibility attributes
- Use icons for purely decorative purposes without aria-hidden

## Common Patterns

### Search Input

```html
<div style="position: relative;">
  <app-icon name="search" class="search-icon"></app-icon>
  <input type="text" placeholder="Search..." style="padding-left: 40px;">
</div>
```

### Dropdown Select

```html
<div style="position: relative;">
  <select>
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
  <app-icon name="chevronDown" class="select-arrow"></app-icon>
</div>
```

### Loading State

```html
<div>
  <app-icon name="star" class="icon-spin"></app-icon>
  <span>Loading...</span>
</div>
```

### Empty State

```html
<div style="text-align: center;">
  <app-icon name="cart" class="empty-icon"></app-icon>
  <p>Your cart is empty</p>
</div>
```

### Confirmation Message

```html
<div>
  <app-icon name="check" class="confirm-icon"></app-icon>
  <p>Order confirmed!</p>
</div>
```

## Troubleshooting

### Icon Not Showing

1. Check icon name is correct (case-sensitive)
2. Verify icon is defined in `icon.component.ts`
3. Check component is imported in your module
4. Verify SVG viewBox is correct

### Icon Color Not Changing

1. Use `stroke="currentColor"` for outline icons
2. Use `fill="currentColor"` for filled icons
3. Check CSS color utilities are applied
4. Verify CSS variables are defined

### Icon Size Not Changing

1. Use size utility classes (icon-sm, icon-lg, etc.)
2. Check font-size is not overridden by parent
3. Verify vertical-align is set correctly
4. Check SVG viewBox is correct

## Performance Tips

1. Use SVG icons (already optimized)
2. Avoid unnecessary animations
3. Use CSS variables for colors
4. Lazy-load icon definitions if needed
5. Cache icon components

## Migration Guide

### From Font Icons

```html
<!-- Old (Font Awesome) -->
<i class="fas fa-star"></i>

<!-- New (SVG Icons) -->
<app-icon name="star"></app-icon>
```

### From Material Icons

```html
<!-- Old (Material Icons) -->
<mat-icon>star</mat-icon>

<!-- New (SVG Icons) -->
<app-icon name="star"></app-icon>
```

## Contributing

To add new icons:

1. Add SVG path to `SVG_ICONS` in `icon.component.ts`
2. Use consistent stroke-linecap="round" and stroke-linejoin="round"
3. Test with different sizes and colors
4. Update this documentation
5. Add to appropriate category in icon list

## Resources

- [Icon Component](./icon.component.ts)
- [Icon Styles](../styles/icons.scss)
- [Icon Audit Report](../../ICON_AUDIT_REPORT.md)
- [Heroicons Reference](https://heroicons.com/)

## Support

For issues or questions about icons:

1. Check this guide
2. Review icon.component.ts
3. Check ICON_AUDIT_REPORT.md
4. Open an issue on GitHub
