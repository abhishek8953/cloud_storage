import fs from "fs";
import express from "express"
import { configDotenv } from "dotenv";
configDotenv();

const app=express();

app.listen(process.env.PORT,()=>{
    console.log(`server is running http://localhost:${process.env.PORT}`);
})