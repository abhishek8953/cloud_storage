

import {configureStore} from "@reduxjs/toolkit"
import authSlice from "./reducer/authreducer.ts"
import fileSlice from "./reducer/fileReducer.ts"


export const store=configureStore({
    reducer:{
        auth:authSlice,
        file:fileSlice,
    }
})


