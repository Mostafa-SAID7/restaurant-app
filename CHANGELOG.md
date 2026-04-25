# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Tailwind CSS v3 integration with comprehensive theme configuration
- PostCSS configuration for Tailwind CSS v3 support
- Component refactoring: split 6 reusable components into separate TS/HTML/SCSS files
  - PageHeaderComponent
  - SectionHeaderComponent
  - MenuItemCardComponent
  - ReviewCardComponent
  - EmptyStateComponent
  - LoadingSpinnerComponent
- Tailwind CSS migration documentation and status tracking
- Quick start guide for development workflow
- Enhanced component architecture with standalone components
- Centralized data management with constants folder
- CategoryIconMapperService for icon mapping logic
- 9 reusable components for consistent UI patterns
- Comprehensive icon system with 60+ SVG icons
- Enhanced icon hover effects with animations
- Niche analysis and content optimization documentation
- Implementation status tracking documentation

### Changed
- Updated menu.component.ts: replaced ngModel binding with input event binding
- Removed FormsModule dependency from menu component
- Migrated all component SCSS files to use Tailwind CSS utilities with @apply directives
- Updated global styles.scss to use Tailwind v3 @tailwind directives
- Refactored component imports in home, menu, and checkout components
- Improved component organization with separate file structure
- Enhanced responsive design using Tailwind breakpoints

### Fixed
- Fixed menu component search input event handling
- Fixed component import paths after file reorganization
- Resolved TypeScript compilation issues with component imports
- Fixed DomSanitizer injection using modern Angular inject() pattern

### Removed
- Removed inline component definitions (now in separate files)
- Removed FormsModule from menu component imports
- Removed duplicate SCSS overrides

## [0.1.0] - 2026-04-25

### Added
- Initial project setup with Angular 19
- Express.js backend configuration
- Docker and Docker Compose setup
- GitHub Actions CI/CD workflows
  - CI pipeline with build, test, and security scanning
  - Deployment pipeline for Netlify
  - Security scanning with npm audit and Snyk
- Comprehensive documentation
  - Architecture guide
  - API documentation
  - Setup guide
  - Contributing guidelines
  - Deployment guide
  - Docker guide
- Project structure with feature-based organization
- Core services and models
  - MenuService
  - ReservationService
  - ReviewService
  - CartService
- Feature modules
  - Home page with hero section and featured items
  - Menu page with search and filtering
  - Reservations page with booking system
  - Checkout page with order summary
  - About page with restaurant information
  - Privacy policy page
  - Terms of service page
- Layout components
  - Header with navigation
  - Footer with links and information
- Shared components
  - Icon component with SVG support
  - Loading spinner
  - Empty state component
- Responsive design for mobile, tablet, and desktop
- Server-side rendering (SSR) support with Angular Universal
- Global styling with CSS custom properties
- Form components and validation
- Cart management system
- Reservation booking system

### Infrastructure
- Docker containerization
- Docker Compose for local development
- GitHub Actions workflows for CI/CD
- Netlify deployment configuration
- npm scripts for development and production builds

---

## Version History

### v0.1.0 (Initial Release)
- Project initialization
- Core features implementation
- Documentation and setup

### v0.2.0 (Tailwind CSS Migration - In Progress)
- Tailwind CSS v3 integration
- Component refactoring
- Enhanced styling system
- Improved component architecture

---

## Unreleased Features (Planned)

### Component Refactoring (Remaining)
- [ ] Split form-row component into separate files
- [ ] Split card component into separate files
- [ ] Split form-error component into separate files
- [ ] Split custom-calendar component into separate files
- [ ] Split custom-select component into separate files

### Feature Components Updates
- [ ] Update reservations component to use new reusable components
- [ ] Update about component to use new reusable components
- [ ] Update privacy component to use new reusable components
- [ ] Update terms component to use new reusable components
- [ ] Verify checkout component uses all new components

### Testing & Validation
- [ ] Full responsive design testing
- [ ] Animation and hover effects verification
- [ ] Accessibility audit (WCAG 2.2 AA)
- [ ] Performance optimization
- [ ] Cross-browser testing

### Documentation
- [ ] Tailwind CSS customization guide
- [ ] Component usage guide
- [ ] Styling best practices
- [ ] Performance optimization guide

### Performance
- [ ] Bundle size optimization
- [ ] Code splitting improvements
- [ ] Lazy loading implementation
- [ ] Image optimization

### Accessibility
- [ ] WCAG 2.2 AA compliance
- [ ] Screen reader testing
- [ ] Keyboard navigation
- [ ] Color contrast verification

---

## How to Contribute

See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Support

For support, please open an issue on [GitHub](https://github.com/Mostafa-SAID7/restaurant-app/issues).

---

**Last Updated:** April 25, 2026
