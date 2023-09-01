import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "", email: "", photo: ""
    },
    reducers: {
        loggedInUsers: (state, action) => {
            state.name = action.payload.name
            state.email = action.payload.email
            state.photo=action.payload.photo
        },
        logOut: (state) => {
            state.name = ""
            state.email = ""
            state.photo=""
        }
    }
})
export const { loggedInUsers,logOut } = userSlice.actions
export default userSlice.reducer