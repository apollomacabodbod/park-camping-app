import { useSelector, TypedUseSelectorHook } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
// import globalReducer from "@/redux/features/globalSlice";
// import coinMarketReducer from "@/redux/features/coinMarketSlice";
import postsReducer from "./features/postsSlice";


export const store = configureStore({
//   reducer: {
//     globalData: globalReducer,
//     coinMarketData: coinMarketReducer,
//   },

  reducer: {

    posts: postsReducer,
  }, // Add your reducers here

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;