# Restaurant App - Frontend

Modern fine dining restaurant app built with **Angular 19**, **TypeScript**, **Tailwind CSS**, and **Server-Side Rendering**.

## Quick Start

### Install
```bash
npm install
```

### Develop
```bash
npm start
```
Open http://localhost:4200

### Build
```bash
npm run build
```

### Test
```bash
npm test
npm test -- --code-coverage
```

## Structure

```
src/
├── app/
│   ├── features/          # Page components (home, menu, reservations, etc.)
│   ├── layout/            # Header, footer
│   ├── shared/            # Reusable components & services
│   ├── core/              # Models, services
│   ├── app.routes.ts      # Routing config
│   └── app.component.ts   # Root component
├── styles.scss            # Global styles with Tailwind
└── main.ts                # Entry point
```

## Key Features

- ✅ **Angular 19** - Latest framework with standalone components
- ✅ **SSR** - Server-side rendering for fast initial load
- ✅ **Tailwind CSS** - Custom dark theme with orange accents
- ✅ **PWA** - Offline support via Service Worker
- ✅ **Lazy Loading** - Route-level code splitting
- ✅ **Responsive** - Mobile-first design

## Pages

- `/` - Home
- `/menu` - Menu browsing
- `/reservations` - Table booking
- `/checkout` - Order management
- `/about` - About & contact
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Environment

Set in `.env`:
```
API_URL=http://localhost:3000
ENVIRONMENT=development
```

## Learn More

- [Angular Docs](https://angular.io)
- [Tailwind CSS](https://tailwindcss.com)
- [TypeScript](https://www.typescriptlang.org)
