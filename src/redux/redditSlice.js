import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReddit = createAsyncThunk("reddit/fetchData", async (/*category = 'react'*/) => {
    
    // const response = await fetch(`https://www.reddit.com/r/${category}.json`);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data; 
    }
);

const initialState = {
        isLoading: false,
        data: [],
        hasError: '',
}

const redditSlice = createSlice({
    name: 'reddit',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchReddit.pending, (state) => {
                    state.isLoading = true
                })
        builder.addCase(fetchReddit.fulfilled, (state, action) => {
                    state.isLoading = false
                    state.data = action.payload
                    state.hasError = ''
                })
        builder.addCase(fetchReddit.rejected, (state) => {
                    state.isLoading = false
                    state.hasError = 'You have an error!'
                    state.data = []
                })
        },
})

export default redditSlice.reducer;
