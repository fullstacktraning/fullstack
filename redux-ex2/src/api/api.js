import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit"
const api = createAsyncThunk("demo",async ()=>{
    const {data} = await axios.get("https://httpbin.org/get",{headers:{
        "Authorization":"Bearer test123",
        "Custom-Header":"ReactAxiosTest"
    }});
    return data;
})
export default api;