import { configureStore } from "@reduxjs/toolkit";
import reducer from "../slice/slice"
const store = configureStore({
    reducer:{
        "products":reducer
    }
})
export default store;