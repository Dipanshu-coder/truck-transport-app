import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    bookings: [],
    currentBooking: null,
    loading: false,
    error: null
  },
  reducers: {
    setBookings: (state, action) => {
      state.bookings = action.payload;
    },
    setCurrentBooking: (state, action) => {
      state.currentBooking = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setBookings, setCurrentBooking, setLoading, setError } = bookingSlice.actions;
export default bookingSlice.reducer;
