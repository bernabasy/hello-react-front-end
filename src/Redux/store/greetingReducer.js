import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchGreeting = createAsyncThunk('greeting', async () => {
  const response = await axios.get('/api/v1/greetings');
  console.log(response);
  console.log('response');
  const { greeting } = response.data;
  return greeting;
});

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGreeting.pending, (state) => {
        const newstate = { ...state, loading: true };
        return newstate;
      })
      .addCase(fetchGreeting.fulfilled, (state, action) => {
        const newstate = { ...state, loading: false, greeting: action.payload };
        return newstate;
      })
      .addCase(fetchGreeting.rejected, (state) => {
        const newState = { ...state, error: 'Error 404. Failed to fetch', loading: false };
        return newState;
      });
  },
});

export default greetingSlice.reducer;
