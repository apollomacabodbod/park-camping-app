import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

export type Post = {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
};

type PostsState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

// Async thunk for fetching posts
export const fetchPosts = createAsyncThunk<Post[], void>(
  "posts/fetchPosts",
  async () => {
    const response = await fetch(
      "https://faux-api.com/api/v1/blogupdates_8415773995269211"
    );
    const data = await response.json();
    return data.result; // Ensure this matches the API response structure
  }
);

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch posts" || null;
      });
      

  },
});

export default postsSlice.reducer;
