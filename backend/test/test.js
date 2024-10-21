// import { v4 } from "uuid";
// const arr = [];

// function genID() {
//     let id = v4()
//     let sortId=id.split("-")[4];
// 	return {sortId,longId:id}
// }

// for (let i = 1; i <= 100; i++) {
// 	const {sortId,longId}=genID();
//     console.log(sortId," ",longId);
    
// }

// const uniquearray=[...new Set(arr)]
// console.log(uniquearray.length);


import User from "../models/userModel";

function getCheck(){
    User.find().then((data)=>{
        console.log(data);
    })
}