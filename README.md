# 🚚 Truck Transport App

A comprehensive full-stack application for managing truck transportation services, similar to Rapido but for commercial vehicles.

## 📋 Overview

This is an integrated platform that connects customers, drivers, and administrators for seamless truck transportation management. The application includes real-time tracking, booking management, payment processing, and driver management features.

## 🏗️ Architecture

### Frontend
- **Customer Web**: React-based web application for customers to book trucks and track deliveries
- **Driver Web**: Dashboard for drivers to manage bookings and track routes
- **Admin Web**: Administrative dashboard for system management and analytics

### Mobile
- **Customer App**: React Native app for customers (iOS/Android)
- **Driver App**: React Native app for drivers (iOS/Android)

### Backend
- **Node.js/Express API**: RESTful API with Socket.io for real-time updates
- **Database**: PostgreSQL for relational data
- **Cache**: Redis for sessions and caching
- **Message Queue**: Optional RabbitMQ for async operations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Docker & Docker Compose
- PostgreSQL 14+
- Redis 7+

### Setup Local Environment

1. **Clone the repository**
```bash
git clone https://github.com/Dipanshu-coder/truck-transport-app.git
cd truck-transport-app
```

2. **Setup with Docker (Recommended)**
```bash
docker-compose up -d
```

3. **Backend Setup**
```bash
cd backend
npm install
npm run dev
```

4. **Frontend Setup - Customer Web**
```bash
cd frontend/customer-web
npm install
cp .env.example .env.local
npm start
```

5. **Frontend Setup - Driver Web**
```bash
cd frontend/driver-web
npm install
cp .env.example .env.local
npm start
```

## 📁 Project Structure

```
truck-transport-app/
├── backend/                  # Express.js API server
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── controllers/         # Business logic
│   ├── middleware/          # Authentication & validation
│   └── tests/               # Test files
│
├── frontend/
│   ├── customer-web/        # Customer React app
│   │   ├── src/
│   │   │   ├── pages/       # Page components
│   │   │   ├── redux/       # State management
│   │   │   └── index.css    # Global styles
│   │   └── package.json
│   │
│   ├── driver-web/          # Driver React app
│   └── admin-web/           # Admin React app
│
├── mobile/
│   ├── customer-app/        # React Native customer app
│   └── driver-app/          # React Native driver app
│
└── docker-compose.yml       # Docker configuration
```

## 🔧 Configuration

### Environment Variables

Create `.env` files in respective directories:

**Backend (.env)**
```
DATABASE_URL=postgresql://postgres:password@localhost:5432/truck_transport_db
REDIS_URL=redis://localhost:6379
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

**Frontend (.env.local)**
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_key
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## 🎯 Key Features

### Customer Features
- Book trucks for cargo transportation
- Real-time shipment tracking
- Payment integration (Stripe/Razorpay)
- Order history and invoices
- Driver ratings and reviews
- Multiple vehicle options (mini, truck, container)

### Driver Features
- Accept/reject booking requests
- Real-time route navigation
- Earnings dashboard
- Documents management
- Customer communication
- Performance analytics

### Admin Features
- User management
- Booking analytics
- Payment tracking
- Driver verification
- Dispute resolution
- System configuration

## 🔐 Security Features

- JWT-based authentication
- Role-based access control (RBAC)
- Password hashing with bcrypt
- Rate limiting
- CORS protection
- Input validation & sanitization
- Secure payment processing

## 🧪 Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend/customer-web
npm test
```

## 📊 API Documentation

API documentation is available at `/api/docs` when the backend is running.

### Sample Endpoints

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/bookings` - Create new booking
- `GET /api/bookings/:id` - Get booking details
- `GET /api/tracking/:bookingId` - Real-time tracking
- `GET /api/drivers` - List available drivers

## 🌐 Deployment

### Docker Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Cloud Deployment
- AWS: EC2 + RDS + ElastiCache
- GCP: App Engine + Cloud SQL + Memorystore
- Azure: App Service + Azure Database + Azure Cache

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Dipanshu** - [GitHub](https://github.com/Dipanshu-coder)

## 📧 Support

For support, email support@trucktransport.com or open an issue on GitHub.

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Socket.io Guide](https://socket.io/docs/)

## 🗺️ Roadmap

- [ ] Mobile app v1.0 launch
- [ ] AI-based route optimization
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] SMS notifications
- [ ] Integration with logistics partners
- [ ] Carbon footprint tracking

---

**Status**: 🚧 In Development

**Last Updated**: June 2026
