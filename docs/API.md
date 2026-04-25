# API Documentation

## Overview

This document describes the API endpoints and data models used in the Restaurant App.

## Base URL

```
Development: http://localhost:3000/api
Production: https://api.restaurant-app.com/api
```

## Authentication

Currently, the application uses session-based authentication. Future versions will implement JWT tokens.

## Data Models

### Restaurant

```typescript
interface Restaurant {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  hours: {
    monday: { open: string; close: string };
    tuesday: { open: string; close: string };
    // ... other days
  };
  cuisine: string[];
  rating: number;
  image: string;
}
```

### Menu Item

```typescript
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  allergens: string[];
  vegetarian: boolean;
  vegan: boolean;
}
```

### Reservation

```typescript
interface Reservation {
  id: string;
  restaurantId: string;
  guestName: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  partySize: number;
  specialRequests: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: Date;
}
```

### Order

```typescript
interface Order {
  id: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
}

interface OrderItem {
  menuItemId: string;
  name: string;
  price: number;
  quantity: number;
  specialInstructions: string;
}
```

## Endpoints

### Menu Endpoints

#### Get All Menu Items

```
GET /api/menu
```

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": "1",
      "name": "Grilled Salmon",
      "description": "Fresh salmon with seasonal vegetables",
      "price": 24.99,
      "category": "Main Course",
      "image": "url",
      "available": true,
      "allergens": ["fish"],
      "vegetarian": false,
      "vegan": false
    }
  ]
}
```

#### Get Menu Item by ID

```
GET /api/menu/:id
```

**Response:**
```json
{
  "success": true,
  "data": { /* MenuItem object */ }
}
```

#### Get Menu Items by Category

```
GET /api/menu/category/:category
```

**Query Parameters:**
- `category` (string) - Menu category

**Response:**
```json
{
  "success": true,
  "data": [ /* Array of MenuItems */ ]
}
```

### Reservation Endpoints

#### Create Reservation

```
POST /api/reservations
```

**Request Body:**
```json
{
  "guestName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "date": "2026-05-15",
  "time": "19:00",
  "partySize": 4,
  "specialRequests": "Window seat preferred"
}
```

**Response:**
```json
{
  "success": true,
  "data": { /* Reservation object */ }
}
```

#### Get All Reservations

```
GET /api/reservations
```

**Query Parameters:**
- `status` (string, optional) - Filter by status
- `date` (string, optional) - Filter by date

**Response:**
```json
{
  "success": true,
  "data": [ /* Array of Reservations */ ]
}
```

#### Get Reservation by ID

```
GET /api/reservations/:id
```

**Response:**
```json
{
  "success": true,
  "data": { /* Reservation object */ }
}
```

#### Update Reservation

```
PUT /api/reservations/:id
```

**Request Body:**
```json
{
  "date": "2026-05-16",
  "time": "20:00",
  "partySize": 5,
  "specialRequests": "Updated request"
}
```

**Response:**
```json
{
  "success": true,
  "data": { /* Updated Reservation object */ }
}
```

#### Cancel Reservation

```
DELETE /api/reservations/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Reservation cancelled successfully"
}
```

### Order Endpoints

#### Create Order

```
POST /api/orders
```

**Request Body:**
```json
{
  "items": [
    {
      "menuItemId": "1",
      "quantity": 2,
      "specialInstructions": "No onions"
    }
  ]
}
```

**Response:**
```json
{
  "success": true,
  "data": { /* Order object */ }
}
```

#### Get Order by ID

```
GET /api/orders/:id
```

**Response:**
```json
{
  "success": true,
  "data": { /* Order object */ }
}
```

#### Update Order Status

```
PUT /api/orders/:id/status
```

**Request Body:**
```json
{
  "status": "processing"
}
```

**Response:**
```json
{
  "success": true,
  "data": { /* Updated Order object */ }
}
```

### Restaurant Endpoints

#### Get Restaurant Info

```
GET /api/restaurant
```

**Response:**
```json
{
  "success": true,
  "data": { /* Restaurant object */ }
}
```

#### Get Restaurant Hours

```
GET /api/restaurant/hours
```

**Response:**
```json
{
  "success": true,
  "data": {
    "monday": { "open": "11:00", "close": "22:00" },
    "tuesday": { "open": "11:00", "close": "22:00" }
  }
}
```

## Error Responses

All error responses follow this format:

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message"
  }
}
```

### Common Error Codes

- `VALIDATION_ERROR` - Request validation failed
- `NOT_FOUND` - Resource not found
- `UNAUTHORIZED` - Authentication required
- `FORBIDDEN` - Access denied
- `INTERNAL_ERROR` - Server error

## Rate Limiting

API requests are limited to:
- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users

## Pagination

List endpoints support pagination:

**Query Parameters:**
- `page` (number, default: 1) - Page number
- `limit` (number, default: 20) - Items per page

**Response:**
```json
{
  "success": true,
  "data": [ /* Array of items */ ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "pages": 5
  }
}
```

## Filtering and Sorting

List endpoints support filtering and sorting:

**Query Parameters:**
- `sort` (string) - Sort field and direction (e.g., `price:asc`, `name:desc`)
- `filter` (object) - Filter criteria

## Future Enhancements

- [ ] GraphQL API
- [ ] WebSocket support for real-time updates
- [ ] OAuth 2.0 authentication
- [ ] API versioning
- [ ] Webhook support
