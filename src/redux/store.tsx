

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsReducer from "./features/postsSlice";
import blogReducer from "./features/single-blog";

// Persist Config with Whitelist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["posts","blog"], // Only persist these slices
  // whitelist: ["posts"], // Only persist these slices
};

const rootReducer = combineReducers({
  posts: postsReducer,   // ✅ Persists all posts
  blog: blogReducer,
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"], // Ignore non-serializable warnings for this action
      },
    }),
});

// Types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Persistor
export const persistor = persistStore(store);


