import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import { uploadFileWithRetry } from "./libs/fileUpload.js";
import { connectDb } from "./libs/connectDb.js";
import { loginSec, loginUser } from "./controllers/userLogin.js";
import { registerUser } from "./controllers/userRegestration.js";
import userModel from "./models/userModel.js";
import cookieparser from "cookie-parser";
import { auth } from "./controllers/auth.js";
import cors from "cors";
import {getFile, getFileWithparent} from "./controllers/getFile.js";
import {addFille} from "./controllers/addFile.js";


dotenv.config(); // Load environment variables

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

// Configure Cloudinary
cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(cors({ credentials: true, origin: process.env.FRONTENd_URL }));
app.use(express.json());
app.use(cookieparser());

app.post("/login", loginUser);
app.post("/loginsecret", loginSec);
app.post("/regester", registerUser);

app.post("/upload-folder", upload.array("files"), async (req, res) => {
	try {
		const files = req.files;

		if (!files || files.length === 0) {
			return res.status(400).json({ message: "No files uploaded" });
		}

		// Upload all files to Cloudinary concurrently with retries
		const uploadPromises = files.map((file) => {
			return uploadFileWithRetry(file); // Upload with retry
		});

		// Wait for all uploads to complete
		const results = await Promise.all(uploadPromises);

		// Send success response
		res.status(200).json({
			message: "Files uploaded successfully",
			results,
		});
	} catch (err) {
		console.error("Error uploading files:", err);
		res.status(500).json({ message: "Error uploading files", error: err });
	}
});

app.post("/del", auth, (req, res) => {
	userModel.deleteMany().then((data) => {
		console.log(data);
		res.send(data);
	});
});
app.get('/check',auth,(req,res)=>{
	if(req.id){
		return res.status(200).json({"success":true,"message":"logged",id:req.id})
	}
	return res.status(400).json({"success":false,"message":"not logged"})
})


app.post('/addFile',auth,addFille)
app.get('/getFile/:parentId',auth,getFileWithparent)
app.get('/getFile',auth,getFile)


app.get("/logout", (req, res) => {
	
	try {
	    res.clearCookie("token",{
			expires:0,
			secure:true,
			path:"/",
			sameSite:"none",
			httpOnly:true
			
		});
		res.json({ success: true, message: "logout successfully" });
	} catch (err) {
		console.log(err);
	}
});

app.listen(5000, () => {
	connectDb();
	console.log("Server started on port 5000");
});
