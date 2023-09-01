import { configureStore} from "@reduxjs/toolkit"
import userReducer from "./authSlice"
import movieReducer from "./movieSlice"

export default configureStore({
    reducer: {
        auth: userReducer,
        movie:movieReducer
    }
    // middleware: getDefaultMiddleware({
    //     serialzableCheck:false
    // })
})