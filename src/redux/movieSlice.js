import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movie",
    initialState: {
        recommended: null,
        trending: null,
        original: null,
        newDisney:null,
    },
    reducers: {
        setMovies: (state, action)=>{
            state.recommended = action.payload.recommended
            state.newDisney = action.payload.newDisney
            state.trending = action.payload.trending
            state.original=action.payload.original
        }

    }
})
export const {setMovies } = movieSlice.actions;
export default movieSlice.reducer;