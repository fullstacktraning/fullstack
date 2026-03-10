import api from "../api/api"
import {createSlice} from "@reduxjs/toolkit"
const slice = createSlice({
    name:"demo",
    initialState:{
        data : {},
        loading : false,
        error:""
    },
    extraReducers:(builder)=>{
        builder.addCase(api.pending,(state,action)=>{
            state.data = {};
            state.loading = false;
            state.error = "";
        })
        builder.addCase(api.fulfilled,(state,action)=>{
            state.data = action.payload;
            state.loading = true;
            state.error = "";
        })
        builder.addCase(api.rejected,(state,action)=>{
            state.data = {};
            state.loading = true;
            state.error = "Network Error"
        })
    }
})
export default slice.reducer;