import axios from "axios"
import {createAsyncThunk} from "@reduxjs/toolkit"
const api = createAsyncThunk("post-ex",async (payload)=>{
    const {data} = await axios.post("https://reqres.in/api/users",payload);
    return data;
})
export default api;