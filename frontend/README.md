# Frontend Setup

React-based web and mobile applications for the Truck Transport platform.

## 📂 Structure

```
web/
├── customer-web/    # Customer dashboard
├── driver-web/      # Driver dashboard  
└── admin-web/       # Admin dashboard

mobile/
├── customer-app/    # React Native customer app
└── driver-app/      # React Native driver app
```

## 🚀 Getting Started

### Web Applications

```bash
cd web/customer-web
npm install
npm start
```

### Mobile Applications

```bash
cd mobile/customer-app
npm install
npx react-native run-android
# or
npx react-native run-ios
```

## 📦 Dependencies

- React 18+
- React Native
- Redux/Context API
- Axios
- Socket.io Client
- Google Maps
- Stripe/Razorpay
