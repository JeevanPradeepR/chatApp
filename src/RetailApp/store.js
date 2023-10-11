import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Reducer/productReducer";
const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store;