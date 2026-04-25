# Architecture Guide

## Overview

The Restaurant App follows a modern Angular architecture with clear separation of concerns and scalable patterns.

## Architecture Layers

### 1. Core Layer (`src/app/core/`)

Contains singleton services and core functionality:

- **Services** - Business logic and API communication
- **Models** - TypeScript interfaces and types
- **Guards** - Route protection and authentication

### 2. Features Layer (`src/app/features/`)

Feature modules organized by business domain:

- **Home** - Landing page and main dashboard
- **Menu** - Menu browsing and item details
- **Reservations** - Table booking system
- **Checkout** - Order processing
- **About** - Restaurant information
- **Privacy** - Privacy policy
- **Terms** - Terms of service

### 3. Shared Layer (`src/app/shared/`)

Reusable components and utilities:

- **Components** - Shared UI components
- **Pipes** - Custom Angular pipes
- **Directives** - Custom directives

### 4. Layout Layer (`src/app/layout/`)

Application shell components:

- **Header** - Navigation and branding
- **Footer** - Footer information

## Design Patterns

### Standalone Components

The application uses Angular 19's standalone components for better tree-shaking and reduced bundle size.

### Reactive Programming

RxJS observables are used throughout for:
- HTTP requests
- State management
- Event handling

### Server-Side Rendering (SSR)

Angular Universal is configured for:
- Improved SEO
- Faster initial page load
- Better performance metrics

## Data Flow

```
User Interaction
    ↓
Component
    ↓
Service (Core)
    ↓
HTTP Request
    ↓
Backend API
    ↓
Response
    ↓
Observable Stream
    ↓
Component Update
    ↓
View Render
```

## File Organization

```
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   │   ├── restaurant.model.ts
│   │   │   ├── menu.model.ts
│   │   │   └── reservation.model.ts
│   │   └── services/
│   │       ├── restaurant.service.ts
│   │       ├── menu.service.ts
│   │       └── reservation.service.ts
│   ├── features/
│   │   ├── home/
│   │   ├── menu/
│   │   ├── reservations/
│   │   ├── checkout/
│   │   ├── about/
│   │   ├── privacy/
│   │   └── terms/
│   ├── layout/
│   │   ├── header/
│   │   └── footer/
│   ├── shared/
│   │   └── components/
│   ├── app.routes.ts
│   └── app.config.ts
├── styles.scss
└── main.ts
```

## Routing

The application uses Angular's standalone routing with lazy loading:

```typescript
// Feature routes are lazy-loaded for better performance
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'checkout', component: CheckoutComponent },
  // ... more routes
];
```

## State Management

Currently using:
- Component-level state with RxJS
- Service-based state management
- Future: Consider NgRx for complex state

## Performance Considerations

1. **Lazy Loading** - Feature modules loaded on demand
2. **Change Detection** - OnPush strategy where applicable
3. **Tree Shaking** - Standalone components reduce bundle
4. **SSR** - Faster initial render
5. **Code Splitting** - Automatic with Angular CLI

## Security

- **XSS Protection** - Angular's built-in sanitization
- **CSRF Protection** - HTTP interceptors
- **Input Validation** - Form validation and sanitization
- **Environment Variables** - Sensitive data in environment files

## Testing Strategy

- **Unit Tests** - Jasmine/Karma for component and service tests
- **E2E Tests** - Protractor or Cypress (to be configured)
- **Coverage Target** - 80%+ code coverage

## Deployment Architecture

```
GitHub Repository
    ↓
GitHub Actions (CI/CD)
    ↓
Build & Test
    ↓
Docker Image
    ↓
Netlify / Docker Registry
    ↓
Production Environment
```

## Future Improvements

1. Implement NgRx for complex state management
2. Add E2E testing framework
3. Implement service workers for PWA
4. Add internationalization (i18n)
5. Performance monitoring and analytics
