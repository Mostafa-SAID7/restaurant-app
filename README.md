# Restaurant App

A modern, full-featured restaurant web application built with Angular 19 and Express.js. This application provides a complete dining experience including menu browsing, reservations, checkout, and more.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Styling](#styling)
- [Docker](#docker)
- [Testing](#testing)
- [Documentation](#documentation)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Menu Management** - Browse and explore restaurant menu items
- **Reservations** - Book tables with an intuitive reservation system
- **Shopping Cart** - Add items to cart and manage orders
- **Checkout** - Secure checkout process
- **User Information** - About and privacy pages
- **Responsive Design** - Mobile-friendly interface
- **Server-Side Rendering** - SSR support with Angular Universal
- **Modern UI** - Built with Angular 19 latest features

## 🛠 Tech Stack

### Frontend
- **Angular 19.2.0** - Modern web framework with standalone components
- **TypeScript 5.7** - Type-safe JavaScript
- **RxJS 7.8** - Reactive programming
- **Tailwind CSS v3** - Utility-first CSS framework with custom theme
- **SCSS** - Advanced styling with Tailwind integration
- **Angular SSR** - Server-side rendering

### Backend
- **Express.js 4.18** - Node.js web framework
- **Node.js** - JavaScript runtime

### DevOps & Tools
- **Docker** - Containerization
- **Docker Compose** - Multi-container orchestration
- **GitHub Actions** - CI/CD pipeline
- **Netlify** - Deployment platform
- **PostCSS** - CSS processing for Tailwind
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
restaurant-app/
├── frontend/                        # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/               # Core services and models
│   │   │   │   ├── models/
│   │   │   │   └── services/
│   │   │   ├── data/               # Centralized constants
│   │   │   │   └── constants/
│   │   │   ├── features/           # Feature modules
│   │   │   │   ├── home/
│   │   │   │   ├── menu/
│   │   │   │   ├── reservations/
│   │   │   │   ├── checkout/
│   │   │   │   ├── about/
│   │   │   │   ├── privacy/
│   │   │   │   └── terms/
│   │   │   ├── layout/             # Layout components
│   │   │   │   ├── header/
│   │   │   │   └── footer/
│   │   │   ├── shared/             # Shared components and services
│   │   │   │   ├── components/     # Reusable UI components
│   │   │   │   ├── services/
│   │   │   │   └── styles/
│   │   │   ├── app.routes.ts       # Application routes
│   │   │   └── app.config.ts       # Application configuration
│   │   ├── styles.scss             # Global styles with Tailwind
│   │   └── main.ts                 # Application entry point
│   ├── public/                      # Static assets
│   ├── package.json                # Dependencies
│   ├── angular.json                # Angular configuration
│   ├── tailwind.config.ts          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS configuration
│   ├── tsconfig.json               # TypeScript configuration
│   └── README.md                   # Frontend README
├── docs/                            # Documentation
│   ├── ARCHITECTURE.md             # Architecture guide
│   ├── API.md                      # API documentation
│   ├── SETUP.md                    # Setup instructions
│   ├── CONTRIBUTING.md             # Contributing guidelines
│   ├── DEPLOYMENT.md               # Deployment guide
│   └── DOCKER.md                   # Docker guide
├── .github/                         # GitHub configuration
│   ├── workflows/                  # CI/CD workflows
│   │   ├── ci.yml                 # Build and test pipeline
│   │   ├── deploy.yml             # Deployment pipeline
│   │   └── security.yml           # Security scanning
│   ├── ISSUE_TEMPLATE/            # Issue templates
│   └── PULL_REQUEST_TEMPLATE.md   # PR template
├── Dockerfile                       # Docker configuration
├── docker-compose.yml               # Docker Compose configuration
├── CHANGELOG.md                     # Version history and changes
├── TAILWIND_MIGRATION_STATUS.md    # Tailwind CSS migration status
├── QUICK_START_NEXT_STEPS.md       # Quick start guide
├── README.md                        # This file
└── LICENSE                          # MIT License
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Docker** (optional, for containerized deployment)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Mostafa-SAID7/restaurant-app.git
   cd restaurant-app
   ```

2. **Navigate to frontend directory**
   ```bash
   cd frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

## 💻 Development

### Start Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200`

### Build for Production

```bash
npm run build
```

### Watch Mode

```bash
npm run watch
```

Automatically rebuilds the application when files change.

## 🎨 Styling

The application uses **Tailwind CSS v3** for styling with a custom dark theme:

### Tailwind CSS Configuration

- **File**: `tailwind.config.ts` - Comprehensive theme configuration
- **PostCSS**: `postcss.config.js` - Processes Tailwind directives
- **Global Styles**: `src/styles.scss` - Imports Tailwind and defines utilities

### Custom Theme

- **Colors**: Dark background (#0A0A0A) with orange accents (#E67E22)
- **Spacing**: Custom scale from 0.25rem to 6rem
- **Shadows**: Multiple levels with accent variants
- **Transitions**: Fast (150ms), base (250ms), slow (400ms)
- **Responsive**: sm, md, lg, xl breakpoints

### Component Styling

Each component uses Tailwind utilities with `@apply` directives in SCSS:

```scss
.component-class {
  @apply flex items-center justify-between gap-4 p-6 rounded-lg;
  @apply bg-surface border border-border transition-all duration-250;
  
  &:hover {
    @apply bg-surface-2 border-accent;
  }
}
```

### Running Tests

```bash
npm test
```

## 🏗 Building

### Development Build
```bash
npm run build
```

### Production Build with SSR
```bash
npm run build -- --configuration production
```

### Serve SSR Application
```bash
npm run serve:ssr:restaurant-app
```

## 🐳 Docker

### Build Docker Image

```bash
docker build -t restaurant-app:latest .
```

### Run Docker Container

```bash
docker run -p 4200:4200 restaurant-app:latest
```

### Using Docker Compose

```bash
docker-compose up
```

For more details, see [Docker Documentation](docs/DOCKER.md)

## 🧪 Testing

### Run Unit Tests

```bash
npm test
```

### Run Tests with Coverage

```bash
npm test -- --code-coverage
```

## 📚 Documentation

Comprehensive documentation is available in the `docs/` folder:

- [Architecture Guide](docs/ARCHITECTURE.md) - System design, component structure, and styling
- [API Documentation](docs/API.md) - API endpoints and usage
- [Setup Guide](docs/SETUP.md) - Detailed setup instructions with Tailwind CSS info
- [Contributing Guide](docs/CONTRIBUTING.md) - How to contribute
- [Deployment Guide](docs/DEPLOYMENT.md) - Deployment instructions
- [Docker Guide](docs/DOCKER.md) - Docker setup and usage

### Additional Resources

- [CHANGELOG.md](CHANGELOG.md) - Version history and recent changes
- [TAILWIND_MIGRATION_STATUS.md](TAILWIND_MIGRATION_STATUS.md) - Tailwind CSS migration details
- [QUICK_START_NEXT_STEPS.md](QUICK_START_NEXT_STEPS.md) - Quick reference for development
- [IMAGE_SYSTEM_SETUP.md](IMAGE_SYSTEM_SETUP.md) - Image mapping system for menu items
- [DOCUMENTATION_SUMMARY.md](DOCUMENTATION_SUMMARY.md) - Complete documentation index

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for detailed version history and recent changes.

### Latest Changes (v0.2.0 - In Progress)

- ✅ Tailwind CSS v3 integration with comprehensive theme
- ✅ Component refactoring: 6 components split into separate files
- ✅ PostCSS configuration for Tailwind support
- ✅ Enhanced component architecture with standalone components
- ✅ Centralized data management with constants
- ✅ 9 reusable components for consistent UI patterns
- ✅ Comprehensive icon system with 60+ SVG icons
- 🔄 Build verification and testing in progress
- ⏳ Remaining component refactoring (5 more components)
- ⏳ Feature component updates
- ⏳ Full responsive and animation testing

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

### Development Workflow

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Support

For support, email support@restaurant-app.com or open an issue on GitHub.

## 🔗 Quick Links

- [GitHub Repository](https://github.com/Mostafa-SAID7/restaurant-app)
- [Live Demo](https://restaurant-app.netlify.app)
- [Documentation](docs/)
- [Changelog](CHANGELOG.md)
- [Tailwind Migration Status](TAILWIND_MIGRATION_STATUS.md)
- [Quick Start Guide](QUICK_START_NEXT_STEPS.md)

## 📊 Project Status

**Current Version**: 0.2.0 (In Progress)

**Recent Milestones**:
- ✅ Tailwind CSS v3 integration
- ✅ Component refactoring (6/11 components)
- ✅ Centralized data management
- ✅ Enhanced icon system
- 🔄 Build verification
- ⏳ Full responsive testing
- ⏳ Accessibility audit

See [CHANGELOG.md](CHANGELOG.md) for complete version history.

---

**Last Updated:** April 25, 2026
