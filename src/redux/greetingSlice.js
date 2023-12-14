import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'http://localhost:3000/api/messages';

export const fetchGreetings = createAsyncThunk('message/fetchGreetings', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  message: '',
  isLoading: true,
};

const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGreetings.fulfilled, (state, action) => {
      state.message = action.payload.greetings;
      state.isLoading = false;
    });
  },
});

export default messageSlice.reducer;
