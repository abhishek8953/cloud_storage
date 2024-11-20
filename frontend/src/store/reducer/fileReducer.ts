import {createSlice} from "@reduxjs/toolkit"
import { fileExplorerData } from "../../assets/data.ts"


let data={...fileExplorerData}

const fileSlice=createSlice({
    name:"file",
    initialState:data,
    reducers:{
        setFile:(state,payload)=>{
           console.log("state",payload.payload);
           return state=payload.payload
        }
       

    }


})

export const {setFile}=fileSlice.actions
export default fileSlice.reducer