# Docker Guide

## Overview

This guide explains how to build, run, and deploy the Restaurant App using Docker.

## Prerequisites

- Docker 20.10 or higher
- Docker Compose 1.29 or higher

## Building Docker Image

### Build Image

```bash
docker build -t restaurant-app:latest .
```

### Build with Specific Tag

```bash
docker build -t restaurant-app:v1.0.0 .
```

### Build for Production

```bash
docker build -t restaurant-app:prod --target production .
```

## Running Docker Container

### Run Container

```bash
docker run -p 4200:4200 restaurant-app:latest
```

### Run with Environment Variables

```bash
docker run -p 4200:4200 \
  -e API_URL=http://localhost:3000 \
  -e ENVIRONMENT=development \
  restaurant-app:latest
```

### Run in Background

```bash
docker run -d -p 4200:4200 --name restaurant-app restaurant-app:latest
```

### View Container Logs

```bash
docker logs restaurant-app
```

### Stop Container

```bash
docker stop restaurant-app
```

### Remove Container

```bash
docker rm restaurant-app
```

## Docker Compose

### Start Services

```bash
docker-compose up
```

### Start in Background

```bash
docker-compose up -d
```

### Stop Services

```bash
docker-compose down
```

### View Logs

```bash
docker-compose logs -f
```

### Rebuild Images

```bash
docker-compose up --build
```

## Docker Compose Configuration

The `docker-compose.yml` file includes:

- **restaurant-app** - Angular frontend application
- **nginx** - Reverse proxy and static file server
- **postgres** - Database (optional)

### Services

#### Restaurant App Service

```yaml
restaurant-app:
  build: .
  ports:
    - "4200:4200"
  environment:
    - API_URL=http://localhost:3000
    - ENVIRONMENT=development
  volumes:
    - ./frontend/src:/app/src
```

#### Nginx Service

```yaml
nginx:
  image: nginx:latest
  ports:
    - "80:80"
  volumes:
    - ./nginx.conf:/etc/nginx/nginx.conf
```

## Dockerfile Explanation

### Multi-stage Build

The Dockerfile uses multi-stage builds for optimization:

1. **Build Stage** - Compiles Angular application
2. **Production Stage** - Serves compiled application

### Build Stage

```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
```

### Production Stage

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
EXPOSE 4200
CMD ["npm", "run", "serve:ssr:restaurant-app"]
```

## Environment Variables

### Available Variables

- `API_URL` - Backend API URL
- `ENVIRONMENT` - Environment (development/production)
- `DEBUG` - Enable debug mode
- `PORT` - Application port (default: 4200)

### Setting Environment Variables

#### In Docker Run

```bash
docker run -e API_URL=http://api.example.com restaurant-app:latest
```

#### In Docker Compose

```yaml
environment:
  - API_URL=http://api.example.com
  - ENVIRONMENT=production
```

#### In .env File

Create `.env` file:

```env
API_URL=http://localhost:3000
ENVIRONMENT=development
DEBUG=true
```

## Volume Mounting

### Mount Source Code

```bash
docker run -v $(pwd)/frontend/src:/app/src restaurant-app:latest
```

### Mount in Docker Compose

```yaml
volumes:
  - ./frontend/src:/app/src
```

## Networking

### Expose Ports

```bash
docker run -p 4200:4200 -p 3000:3000 restaurant-app:latest
```

### Connect to Network

```bash
docker network create restaurant-network
docker run --network restaurant-network --name app restaurant-app:latest
```

## Health Checks

### Add Health Check

```dockerfile
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:4200 || exit 1
```

### Check Container Health

```bash
docker ps --format "table {{.Names}}\t{{.Status}}"
```

## Optimization

### Reduce Image Size

1. Use Alpine Linux base image
2. Remove unnecessary dependencies
3. Use multi-stage builds
4. Clean up package manager cache

### Current Image Size

- Development: ~500MB
- Production: ~300MB

## Troubleshooting

### Container Won't Start

```bash
docker logs restaurant-app
```

### Port Already in Use

```bash
docker run -p 4300:4200 restaurant-app:latest
```

### Permission Denied

```bash
sudo docker run -p 4200:4200 restaurant-app:latest
```

### Out of Memory

```bash
docker run -m 2g restaurant-app:latest
```

## Production Deployment

### Push to Registry

```bash
docker tag restaurant-app:latest myregistry/restaurant-app:latest
docker push myregistry/restaurant-app:latest
```

### Deploy to Kubernetes

```bash
kubectl apply -f k8s/deployment.yaml
```

### Deploy to Docker Swarm

```bash
docker service create --name restaurant-app \
  -p 4200:4200 \
  restaurant-app:latest
```

## Security Best Practices

1. Use specific version tags (not `latest`)
2. Run as non-root user
3. Use secrets for sensitive data
4. Scan images for vulnerabilities
5. Keep base images updated

## Useful Commands

```bash
# List images
docker images

# List containers
docker ps -a

# Remove image
docker rmi restaurant-app:latest

# Remove unused resources
docker system prune

# Inspect container
docker inspect restaurant-app

# Execute command in container
docker exec -it restaurant-app sh
```

## References

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Best Practices](https://docs.docker.com/develop/dev-best-practices/)
