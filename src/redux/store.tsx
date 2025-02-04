// import { useSelector, TypedUseSelectorHook } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from "./features/postsSlice";


// export const store = configureStore({

//   reducer: {
//     posts: postsReducer,
//   }, // Add your reducers here

// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// import { useSelector, type TypedUseSelectorHook } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // Uses localStorage
// import postsReducer from "./features/postsSlice";

// const persistConfig = {
//   key: "root", // Key for storage
//   storage, // Use localStorage to persist data
// };

// const persistedReducer = persistReducer(persistConfig, postsReducer);

// export const store = configureStore({
//   reducer: {
//     posts: persistedReducer,
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// // Persistor
// export const persistor = persistStore(store);


import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import postsReducer from "./features/postsSlice";

// Persist Config with Whitelist
const persistConfig = {
  key: "root",
  storage,
  whitelist: [], // Only persist these slices
};

// Combine Reducers
const rootReducer = combineReducers({
  posts: postsReducer,   // ✅ Persisted
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


