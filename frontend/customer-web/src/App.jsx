import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

// Pages
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import BookingPage from './pages/BookingPage';
import TrackingPage from './pages/TrackingPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/tracking/:bookingId" element={<TrackingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
