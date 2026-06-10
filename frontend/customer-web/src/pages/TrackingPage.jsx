import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function TrackingPage() {
  const { bookingId } = useParams();
  const [tracking, setTracking] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTracking();
    const interval = setInterval(fetchTracking, 5000);
    return () => clearInterval(interval);
  }, [bookingId]);

  const fetchTracking = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/tracking/${bookingId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setTracking(response.data.data);
    } catch (error) {
      console.error('Failed to fetch tracking:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading tracking info...</div>;
  if (!tracking) return <div>No tracking data available</div>;

  return (
    <div className="tracking-container">
      <h1>Track Booking #{bookingId}</h1>
      <div className="tracking-info">
        <div className="map-container">
          <p>Map would be displayed here with location: {tracking.latitude}, {tracking.longitude}</p>
        </div>
        <div className="tracking-details">
          <h3>Current Location</h3>
          <p>Latitude: {tracking.latitude}</p>
          <p>Longitude: {tracking.longitude}</p>
          <p>Last Updated: {new Date(tracking.updated_at).toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default TrackingPage;
