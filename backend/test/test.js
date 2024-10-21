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


import User from "../models/userModel.js";

function getCheck(){
    const user=User.find({},{sec:1})
    user.then((data)=>{
        console.log(data);
    })
}

getCheck();