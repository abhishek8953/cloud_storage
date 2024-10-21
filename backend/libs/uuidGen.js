import { v4 } from "uuid";



export  function genID() {
    let id = v4()
    let sortId=id.split("-")[4];
	return {sortId,longId:id}
}

export async function checkId(id){
    
}