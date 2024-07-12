import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Rootreducer";

const store = configureStore({
    reducer:rootReducer,
    reducerWishlist:rootReducer
});

export default store;
