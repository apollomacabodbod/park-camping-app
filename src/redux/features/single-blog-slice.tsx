import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../store'; // Adjust based on your store setup

// Define the API response type
interface BlogUpdate {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

interface BlogState {
  data: BlogUpdate[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BlogState = {
  data: [],
  status: 'idle',
  error: null,
};

// Async thunk to fetch data based on an ID parameter
export const fetchBlogUpdates = createAsyncThunk(
  'blog/fetchUpdates',
  async (id: number) => {
    const response = await fetch(`https://faux-api.com/api/v1/blogupdates_8415773995269211/${id}`);
    const json = await response.json();
    return json.result;
  }
);

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogUpdates.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBlogUpdates.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchBlogUpdates.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export default blogSlice.reducer;
export const selectBlogUpdates = (state: RootState) => state.blog;
