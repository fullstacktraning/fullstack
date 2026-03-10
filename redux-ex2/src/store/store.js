import {configureStore} from "@reduxjs/toolkit"
import reducer from "../slice/slice"

const store = configureStore({
    reducer:{
        "demo":reducer
    }
})

export default store;