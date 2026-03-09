import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
const api = createAsyncThunk("products",async ()=>{
    const {data} = await axios.get("https://dummyjson.com/products");
    return data;
});

export default api;