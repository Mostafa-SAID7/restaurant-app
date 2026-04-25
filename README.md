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
- [Docker](#docker)
- [Testing](#testing)
- [Documentation](#documentation)
- [Screenshots](#screenshots)
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
- **Angular 19.2.0** - Modern web framework
- **TypeScript 5.7** - Type-safe JavaScript
- **RxJS 7.8** - Reactive programming
- **SCSS** - Advanced styling
- **Angular SSR** - Server-side rendering

### Backend
- **Express.js 4.18** - Node.js web framework
- **Node.js** - JavaScript runtime

### DevOps
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline
- **Netlify** - Deployment platform

## 📁 Project Structure

```
restaurant-app/
├── frontend/                    # Angular frontend application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/           # Core services and models
│   │   │   ├── features/       # Feature modules
│   │   │   │   ├── home/
│   │   │   │   ├── menu/
│   │   │   │   ├── reservations/
│   │   │   │   ├── checkout/
│   │   │   │   ├── about/
│   │   │   │   ├── privacy/
│   │   │   │   └── terms/
│   │   │   ├── layout/         # Layout components
│   │   │   ├── shared/         # Shared components
│   │   │   └── app.routes.ts   # Application routes
│   │   ├── styles.scss         # Global styles
│   │   └── main.ts             # Application entry point
│   ├── package.json            # Dependencies
│   ├── angular.json            # Angular configuration
│   └── tsconfig.json           # TypeScript configuration
├── docs/                        # Documentation
├── .github/                     # GitHub workflows
├── screenshots/                 # Application screenshots
├── Dockerfile                   # Docker configuration
├── docker-compose.yml           # Docker Compose configuration
└── README.md                    # This file
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

### Run Tests

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

- [Architecture Guide](docs/ARCHITECTURE.md) - System design and architecture
- [API Documentation](docs/API.md) - API endpoints and usage
- [Setup Guide](docs/SETUP.md) - Detailed setup instructions
- [Contributing Guide](docs/CONTRIBUTING.md) - How to contribute
- [Deployment Guide](docs/DEPLOYMENT.md) - Deployment instructions
- [Docker Guide](docs/DOCKER.md) - Docker setup and usage

## 📸 Screenshots

Screenshots of the application are available in the `screenshots/` folder:

- Home page
- Menu page
- Reservations page
- Checkout page
- Mobile views

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

## 🔗 Links

- [GitHub Repository](https://github.com/Mostafa-SAID7/restaurant-app)
- [Live Demo](https://restaurant-app.netlify.app)
- [Documentation](docs/)

---

**Last Updated:** April 2026
