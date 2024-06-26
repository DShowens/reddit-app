import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const accessToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IlNIQTI1NjpzS3dsMnlsV0VtMjVmcXhwTU40cWY4MXE2OWFFdWFyMnpLMUdhVGxjdWNZIiwidHlwIjoiSldUIn0.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNzE5NTI3NzA3LjQ1MTkwMywiaWF0IjoxNzE5NDQxMzA3LjQ1MTkwMywianRpIjoiaWl2QkxYakcyWHlOVjJaTGd4OERPUW5lTGlORmd3IiwiY2lkIjoia3d0cExWUlM2cTE2NXRzZy02MDZCQSIsImxpZCI6InQyXzEyaTNwbmc0YWEiLCJhaWQiOiJ0Ml8xMmkzcG5nNGFhIiwibGNhIjoxNzE4NDEwMTI0MDg2LCJzY3AiOiJlSnlLVnRKU2lnVUVBQURfX3dOekFTYyIsImZsbyI6OX0.fBYurX_FAGLxgekC-KYMNPwY2cdmf8GIQ9d-Dx9wXB6f4IhLLEGdWLrJH2xUFSV0hhbcq4c5aec9lMBtdL_K82Ie7eIUDmIfO-RTDyT07UlZwHoPzu-EavGzBlRuR1WJhNUtoVG88oqbJoofJG9gNFnEImv36iI3RM1zNpGrZRi_16-PgNHMX--FD_YcQUDLWJ2n5cKzjXZq84tvjrZGC2p8u-S5hA_1JQUViXG-SF8YfF5TltjOpMGiBmNWTQ3pBmj-G0_rddYp4KvIctFGyLA6uo_JeZWIAArFVRwsVnC_5rEuNblKVWmdqmFhE17HewOlyGGHk3Rp9h_uYlNWqA";

const header = { 
    'method': "GET",
    'headers': {
        'Authorization': `Bearer ${accessToken}`,
        'User-Agent': 'kwtpLVRS6q165tsg-606BA'
    }  
}

export const fetchReddit = createAsyncThunk("reddit/fetchData", async () => {
    try {
    const response = await fetch('https://reddit.com/r/popular.json', header);
    if (!response.ok) {
        throw new Error('Network resonse was not ok');
    }
    const data = await response.json();
    console.log(data);
    return data;

    } catch (error) {
        console.error('Request failed', error);
        throw error;
    }
});

const redditSlice = createSlice({
    name: 'reddit/fetchData',
    initialState: {
        isLoading: false,
        data: null,
        error: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchReddit.pending, (state, action) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(fetchReddit.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = false;
        })
        builder.addCase(fetchReddit.rejected, (state, action) => {
            state.isLoading = false;
            state.error = true;
        })
    }
})

export default redditSlice.reducer;