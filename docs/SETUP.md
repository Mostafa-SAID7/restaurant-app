# Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher - [Download](https://nodejs.org/)
- **npm** 9.x or higher (comes with Node.js)
- **Git** - [Download](https://git-scm.com/)
- **Docker** (optional) - [Download](https://www.docker.com/)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Mostafa-SAID7/restaurant-app.git
cd restaurant-app
```

### 2. Navigate to Frontend Directory

```bash
cd frontend
```

### 3. Install Dependencies

```bash
npm install
```

This will install all required packages listed in `package.json`.

### 4. Verify Installation

Check that Angular CLI is installed:

```bash
npm run ng -- version
```

You should see Angular version 19.2.0 or higher.

## Development Setup

### Start Development Server

```bash
npm start
```

The application will be available at `http://localhost:4200`

The development server will automatically reload when you make changes to the code.

### Tailwind CSS Setup

The project uses **Tailwind CSS v3** for styling. The configuration is already set up:

- **Configuration file**: `tailwind.config.ts` - Contains custom theme colors, spacing, and utilities
- **PostCSS config**: `postcss.config.js` - Processes Tailwind directives
- **Global styles**: `src/styles.scss` - Imports Tailwind CSS directives

**Key Tailwind Features:**
- Custom color palette (dark theme with orange accents)
- Custom spacing scale (0.25rem to 6rem)
- Custom border radius and shadows
- Smooth transitions and animations
- Responsive breakpoints (sm, md, lg, xl)

**Tailwind IntelliSense:**
Install the VS Code extension for autocomplete:
- Search for "Tailwind CSS IntelliSense" in VS Code extensions
- Provides class name suggestions and documentation

### Configure IDE

#### Visual Studio Code

1. Install recommended extensions:
   - Angular Language Service
   - TypeScript Vue Plugin
   - Prettier - Code formatter
   - ESLint

2. Open the project in VS Code:
   ```bash
   code .
   ```

#### WebStorm / IntelliJ IDEA

1. Open the project folder
2. WebStorm will automatically detect Angular configuration
3. Configure TypeScript compiler settings if needed

## Environment Configuration

### Development Environment

Create `.env.development` file in the `frontend` directory:

```env
API_URL=http://localhost:3000
ENVIRONMENT=development
DEBUG=true
```

### Production Environment

Create `.env.production` file:

```env
API_URL=https://api.restaurant-app.com
ENVIRONMENT=production
DEBUG=false
```

## Building the Application

### Development Build

```bash
npm run build
```

Output will be in `dist/restaurant-app/browser/`

### Production Build

```bash
npm run build -- --configuration production
```

### Watch Mode (Auto-rebuild)

```bash
npm run watch
```

## Running Tests

### Unit Tests

```bash
npm test
```

### Tests with Coverage

```bash
npm test -- --code-coverage
```

Coverage report will be generated in `coverage/` directory.

## Troubleshooting

### Issue: Port 4200 Already in Use

**Solution:** Use a different port:
```bash
npm start -- --port 4300
```

### Issue: Module Not Found Errors

**Solution:** Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript Compilation Errors

**Solution:** Check TypeScript version:
```bash
npm run ng -- version
```

Update if necessary:
```bash
npm install --save-dev typescript@latest
```

### Issue: Angular CLI Not Found

**Solution:** Install Angular CLI globally:
```bash
npm install -g @angular/cli@19
```

## Project Structure Quick Reference

```
frontend/
├── src/
│   ├── app/              # Application code
│   ├── assets/           # Static assets
│   ├── styles.scss       # Global styles
│   └── main.ts           # Entry point
├── public/               # Public assets
├── angular.json          # Angular configuration
├── tsconfig.json         # TypeScript configuration
├── package.json          # Dependencies
└── README.md             # Project README
```

## Next Steps

1. Read the [Architecture Guide](ARCHITECTURE.md)
2. Check the [API Documentation](API.md)
3. Review [Contributing Guidelines](CONTRIBUTING.md)
4. Explore the [Deployment Guide](DEPLOYMENT.md)

## Getting Help

- Check the [Angular Documentation](https://angular.io/docs)
- Review [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- Open an issue on [GitHub](https://github.com/Mostafa-SAID7/restaurant-app/issues)
