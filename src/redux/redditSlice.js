import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReddit = createAsyncThunk("reddit/fetchData", async (category = 'react') => {
       
    const data = await fetch(`https://www.reddit.com/r/${category}.json`); 
       
    const json = await data.json();
    // console.log(data);
    // console.log(data.data.children[5].data.subreddit) /* testing different data options available */
    // console.log(data.data.children[5].data.title) /* testing different data options available */
    // console.log(data.data.children[5].data.author) /* testing different data options available */
    // console.log(data.data.children[5].data.selftext) /* testing different data options available */
    // console.log(data.data.children[5].data.permalink) /* testing different data options available */
    return json; 
    }
);



const redditSlice = createSlice({
    name: 'reddit',
    initialState: {
        isLoading: false,
        data: [],
        haserror: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReddit.pending, (state) => {
                    state.isLoading = true;
                    state.haserror = false;
                })
            .addCase(fetchReddit.fulfilled, (state, action) => {
                    state.isLoading = false;
                    state.data = action.payload;
                    state.haserror = false;
                })
            .addCase(fetchReddit.rejected, (state) => {
                    state.isLoading = false;
                    state.haserror = true;
                    state.data = [];
                })
        },
})

export default redditSlice.reducer;

export const currentReddit = (state) => state.reddit.data;

export const isLoading = (state) => state.reddit.isLoading;

