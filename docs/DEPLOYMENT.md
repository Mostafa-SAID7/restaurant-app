# Deployment Guide

## Vercel (Recommended)

### Prerequisites
- Vercel account
- GitHub repository

### Deploy
1. Connect to [Vercel Dashboard](https://vercel.com)
2. Imports `vercel.json` config automatically
3. Push to main → auto deploys

### Environment Variables
```
API_URL=https://api.restaurant-app.com
ENVIRONMENT=production
```

---

## Docker

### Build
```bash
docker build -t restaurant-app:latest .
```

### Run
```bash
docker run -p 4200:4200 restaurant-app:latest
```

### Docker Compose
```bash
docker-compose up
```

---

## Kubernetes

### Prerequisites
- Kubernetes cluster
- kubectl configured
- Docker image in registry

### Deploy
```bash
kubectl apply -f k8s-deployment.yaml
kubectl expose deployment restaurant-app --type=LoadBalancer --port=80 --target-port=4200
```

---

## Local Development

### Install
```bash
cd frontend && npm install
```

### Develop
```bash
npm start
```

### Build
```bash
npm run build
```

### SSR Test
```bash
npm run serve:ssr:restaurant-app
```

---

## Performance

- **SSR**: Server-side rendering for fast initial load
- **Caching**: Static assets cached for 1 year
- **Code splitting**: Lazy-loaded routes
- **PWA**: Offline support via Service Worker

