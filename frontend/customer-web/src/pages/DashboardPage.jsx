import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function DashboardPage() {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      navigate('/');
      return;
    }
    fetchBookings();
  }, [token, navigate]);

  const fetchBookings = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/bookings`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setBookings(response.data.data || []);
    } catch (error) {
      console.error('Failed to fetch bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="dashboard-container">
      <header className="header">
        <h1>Truck Transport Dashboard</h1>
        <button onClick={() => {
          localStorage.removeItem('token');
          navigate('/');
        }}>Logout</button>
      </header>

      <div className="dashboard-content">
        <div className="actions">
          <button onClick={() => navigate('/booking')} className="btn-primary">
            + New Booking
          </button>
        </div>

        <section className="bookings-section">
          <h2>Your Bookings</h2>
          {bookings.length === 0 ? (
            <p>No bookings yet</p>
          ) : (
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Booking ID</th>
                  <th>From</th>
                  <th>To</th>
                  <th>Status</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>#{booking.id}</td>
                    <td>{booking.pickup_location}</td>
                    <td>{booking.dropoff_location}</td>
                    <td><span className={`status ${booking.status}`}>{booking.status}</span></td>
                    <td>₹{booking.price}</td>
                    <td>
                      <button onClick={() => navigate(`/tracking/${booking.id}`)}>Track</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </div>
  );
}

export default DashboardPage;
