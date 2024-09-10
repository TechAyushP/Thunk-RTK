
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk to fetch GitHub users
export const getAllData = createAsyncThunk(
    "gitUsers",
    async (args,{rejectWithValue}) => { 
        const response = await fetch("https://api.github.com/users");
        try{
            const result = await response.json(); // Await the response here
        return result;

        }
        catch(error){
            return rejectWithValue("opps found an error")

        }
        
    }
);

// Slice to manage the state of GitHub users
export const gitUser = createSlice({
    name: "gituser",
    initialState: {
        users: [],
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getAllData.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(getAllData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message; // Corrected to action.error.message
            });
    }
});

export default gitUser.reducer;
