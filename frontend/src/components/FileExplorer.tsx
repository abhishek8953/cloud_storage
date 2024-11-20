import axios from "axios"
import { useEffect, useState } from "react"

const FileExplorer = () => {
    const [filename,setFilename]=useState("name.txt");
    const [type,setType]=useState("file");
    const [file,setFile]=useState([]);
    //provide parentId TODO:
    useEffect(()=>{
        async function addFile(){
            const res=await axios.post("/addFile",{filename,type,parentId:"673cccb14bbb8206e364880e"},{withCredentials:true})
            console.log("data",res.data);
        };

        async function getFile(){
          const res=await axios.get(`/getFile`,{withCredentials:true})
          console.log("data",res.data);
      };
      
        getFile()
   
    },[])
  return (
    <div>hello</div>
  )
}

export default FileExplorer