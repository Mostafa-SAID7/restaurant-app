# Multi-stage build for Restaurant App

# Stage 1: Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY frontend/ .

# Build the application
RUN npm run build

# Stage 2: Production stage
FROM node:18-alpine

WORKDIR /app

# Install serve to run the application
RUN npm install -g serve

# Copy built application from builder stage
COPY --from=builder /app/dist ./dist

# Copy package.json for runtime dependencies
COPY frontend/package*.json ./

# Install production dependencies only
RUN npm ci --only=production

# Expose port
EXPOSE 4200

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:4200 || exit 1

# Start the application
CMD ["npm", "run", "serve:ssr:restaurant-app"]
