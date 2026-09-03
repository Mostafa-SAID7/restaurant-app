# Restaurant App - NooR

A modern, full-featured fine dining restaurant web application. Built with **Angular 19**, **Express.js**, **TypeScript**, **Tailwind CSS**, and **Server-Side Rendering**.

## ✨ Features

- **Menu Management** - Browse curated menu items
- **Reservations** - Book tables with intuitive interface
- **Shopping Cart** - Add items and manage orders
- **Checkout** - Secure order processing
- **Server-Side Rendering** - Fast initial page loads
- **PWA Support** - Offline functionality via Service Worker
- **Responsive Design** - Works on all devices
- **Dark Theme** - Modern noir aesthetic with orange accents

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | Angular 19, TypeScript 5.7, RxJS 7.8 |
| **Styling** | Tailwind CSS v3, SCSS, PostCSS |
| **Backend** | Express.js 4.18, Node.js 18 |
| **Rendering** | Angular Universal (SSR) |
| **Deployment** | Vercel, Docker, Kubernetes |
| **Package Manager** | npm 9+ |

## 📁 Project Structure

```
restaurant-app/
├── frontend/                    # Angular application
│   ├── src/app/
│   │   ├── features/           # Page components
│   │   ├── shared/             # Reusable components
│   │   ├── core/               # Services & models
│   │   └── layout/             # Header, footer
│   ├── dist/                   # Build output
│   └── README.md               # Frontend guide
├── docs/                        # Documentation
│   ├── DEPLOYMENT.md           # Deploy guide
│   ├── ARCHITECTURE.md         # System design
│   ├── SETUP.md                # Setup instructions
│   └── CONTRIBUTING.md         # Contributing guide
├── vercel.json                 # Vercel configuration
├── docker-compose.yml          # Docker setup
└── README.md                   # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm 9+
- Git

### Install & Run
```bash
git clone https://github.com/Mostafa-SAID7/restaurant-app.git
cd restaurant-app/frontend
npm install
npm start
```
Open http://localhost:4200

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📄 Pages

| Route | Purpose |
|-------|---------|
| `/` | Home page |
| `/menu` | Menu browsing |
| `/reservations` | Table booking |
| `/checkout` | Order checkout |
| `/about` | About & contact |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |

## 🐳 Docker

```bash
# Build
docker build -t restaurant-app:latest .

# Run
docker run -p 4200:4200 restaurant-app:latest

# With Docker Compose
docker-compose up
```

## 📚 Documentation

All documentation is in the `docs/` folder:

- [Setup Guide](./docs/SETUP.md) - Development setup
- [Deployment Guide](./docs/DEPLOYMENT.md) - Deploy to Vercel, Docker, K8s
- [Architecture](./docs/ARCHITECTURE.md) - System design
- [Contributing](./docs/CONTRIBUTING.md) - How to contribute
- [API Reference](./docs/API.md) - API endpoints
- [SEO Guide](./docs/SEO.md) - SEO implementation
- [Changelog](./docs/CHANGELOG.md) - Version history
- [Security](./docs/SECURITY.md) - Security policy

**Full index:** [docs/README.md](./docs/README.md)

## 🧪 Testing

```bash
# Unit tests
npm test

# With coverage
npm test -- --code-coverage
```

## 🎨 Styling

- **Tailwind CSS v3** - Utility-first CSS framework
- **Dark Theme** - Custom color palette
- **Responsive** - Mobile-first approach
- **SCSS Support** - Advanced styling features

## 📊 Project Status

**Version**: 0.2.0  
**Status**: Active Development

## 🤝 Contributing

See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for guidelines.

1. Fork the repo
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📝 License

This project is licensed under the **MIT License** - see [LICENSE](./LICENSE) file.

## 🔗 Links

- [Repository](https://github.com/Mostafa-SAID7/restaurant-app)
- [Live Demo](https://restaurant-app.vercel.app)
- [Changelog](./CHANGELOG.md)

## 📧 Support

For questions or issues, open a [GitHub Issue](https://github.com/Mostafa-SAID7/restaurant-app/issues).
