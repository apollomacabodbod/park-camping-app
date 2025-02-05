import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

// Define the Post type
export type Post = {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
};

// Define the state type
type PostsState = {
  posts: Post[];
  loading: boolean;
  error: string | null;
};

// Initial state
const initialState: PostsState = {
  posts: [], // This will be hydrated by Redux Persist
  loading: false,
  error: null,
};




export const fetchPosts  = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}`);
    const json = await response.json();
    return json.result;
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
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload; // Save fetched data
        state.error = null;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        if (state.posts.length === 0) {
          state.error = action.payload as string; // Only store error if no cached data
        }
      });
      
  },
});

export default postsSlice.reducer;