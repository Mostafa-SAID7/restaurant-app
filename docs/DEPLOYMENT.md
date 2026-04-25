# Deployment Guide

## Overview

This guide covers deploying the Restaurant App to various platforms.

## Deployment Platforms

### Netlify (Recommended)

Netlify is pre-configured for this project.

#### Prerequisites

- Netlify account
- GitHub repository connected to Netlify

#### Deployment Steps

1. **Connect Repository**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize
   - Choose the repository

2. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist/restaurant-app/browser`
   - Node version: 18.x

3. **Deploy**
   - Netlify automatically deploys on push to main branch

#### Environment Variables

Set in Netlify dashboard:

```
API_URL=https://api.restaurant-app.com
ENVIRONMENT=production
```

### Docker Deployment

#### Build Image

```bash
docker build -t restaurant-app:latest .
```

#### Push to Registry

```bash
docker tag restaurant-app:latest myregistry/restaurant-app:latest
docker push myregistry/restaurant-app:latest
```

#### Deploy to Server

```bash
docker run -d -p 80:4200 \
  -e API_URL=https://api.restaurant-app.com \
  -e ENVIRONMENT=production \
  myregistry/restaurant-app:latest
```

### Kubernetes Deployment

#### Prerequisites

- Kubernetes cluster
- kubectl configured
- Docker image in registry

#### Create Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: restaurant-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: restaurant-app
  template:
    metadata:
      labels:
        app: restaurant-app
    spec:
      containers:
      - name: restaurant-app
        image: myregistry/restaurant-app:latest
        ports:
        - containerPort: 4200
        env:
        - name: API_URL
          value: "https://api.restaurant-app.com"
        - name: ENVIRONMENT
          value: "production"
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
```

#### Deploy

```bash
kubectl apply -f deployment.yaml
```

#### Expose Service

```bash
kubectl expose deployment restaurant-app --type=LoadBalancer --port=80 --target-port=4200
```

### AWS Deployment

#### Using Elastic Beanstalk

1. **Install EB CLI**
   ```bash
   pip install awsebcli
   ```

2. **Initialize Application**
   ```bash
   eb init -p "Node.js 18 running on 64bit Amazon Linux 2" restaurant-app
   ```

3. **Create Environment**
   ```bash
   eb create production
   ```

4. **Deploy**
   ```bash
   eb deploy
   ```

#### Using S3 + CloudFront

1. **Build Application**
   ```bash
   npm run build
   ```

2. **Upload to S3**
   ```bash
   aws s3 sync dist/restaurant-app/browser s3://my-bucket/
   ```

3. **Create CloudFront Distribution**
   - Point to S3 bucket
   - Set default root object to `index.html`

### Heroku Deployment

#### Prerequisites

- Heroku account
- Heroku CLI installed

#### Deploy

1. **Create Heroku App**
   ```bash
   heroku create restaurant-app
   ```

2. **Set Buildpack**
   ```bash
   heroku buildpacks:set heroku/nodejs
   ```

3. **Deploy**
   ```bash
   git push heroku main
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set API_URL=https://api.restaurant-app.com
   ```

## CI/CD Pipeline

### GitHub Actions

The project includes GitHub Actions workflows for automated deployment.

#### Workflow File

`.github/workflows/deploy.yml`

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: './dist/restaurant-app/browser'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: 'Deploy from GitHub Actions'
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Pre-Deployment Checklist

- [ ] All tests passing
- [ ] Code reviewed
- [ ] Environment variables configured
- [ ] Database migrations completed
- [ ] SSL certificate installed
- [ ] Backup created
- [ ] Monitoring configured
- [ ] Error tracking enabled

## Post-Deployment

### Verify Deployment

```bash
curl https://restaurant-app.com
```

### Monitor Application

- Check error logs
- Monitor performance metrics
- Verify API connectivity
- Test critical features

### Rollback Plan

If issues occur:

1. **Netlify Rollback**
   ```bash
   netlify deploy --prod --dir=dist/restaurant-app/browser
   ```

2. **Docker Rollback**
   ```bash
   docker run -d -p 80:4200 myregistry/restaurant-app:previous-tag
   ```

3. **Kubernetes Rollback**
   ```bash
   kubectl rollout undo deployment/restaurant-app
   ```

## Performance Optimization

### Build Optimization

```bash
npm run build -- --configuration production --optimization
```

### Caching Strategy

- Static assets: 1 year cache
- HTML files: No cache
- API responses: Based on endpoint

### CDN Configuration

- Serve static assets from CDN
- Cache images and fonts
- Compress responses

## Security Considerations

1. **HTTPS Only**
   - Redirect HTTP to HTTPS
   - Use HSTS headers

2. **Security Headers**
   ```
   X-Content-Type-Options: nosniff
   X-Frame-Options: DENY
   X-XSS-Protection: 1; mode=block
   ```

3. **Environment Variables**
   - Never commit secrets
   - Use secure secret management
   - Rotate credentials regularly

4. **Dependencies**
   - Keep dependencies updated
   - Scan for vulnerabilities
   - Use lock files

## Monitoring and Logging

### Application Monitoring

- Use services like New Relic, DataDog
- Monitor response times
- Track error rates
- Monitor resource usage

### Logging

- Centralize logs (ELK, Splunk)
- Log important events
- Monitor log levels
- Set up alerts

## Scaling

### Horizontal Scaling

- Use load balancer
- Deploy multiple instances
- Use container orchestration

### Vertical Scaling

- Increase server resources
- Optimize code
- Cache frequently accessed data

## Disaster Recovery

### Backup Strategy

- Daily database backups
- Code repository backups
- Configuration backups

### Recovery Plan

- Document recovery procedures
- Test recovery regularly
- Maintain runbooks

## Support and Troubleshooting

For deployment issues:

1. Check logs
2. Verify environment variables
3. Test API connectivity
4. Review recent changes
5. Contact support

## References

- [Netlify Documentation](https://docs.netlify.com/)
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [AWS Documentation](https://docs.aws.amazon.com/)
