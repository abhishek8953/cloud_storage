import mongoose from "mongoose";
import File from "../models/fileStructureModel.js"; // Assuming the schema is in fileModel.js
import User from "../models/userModel.js"; // Assuming the User schema is in userModel.js

export const addFille = (req, res) => {
  
	const userId = req.id; // Replace with actual user ID
    const {filename,filetype,parentId}=req.body;
	addFileForUser("newile.txt", "file", userId,parentId)
		.then((file) => {
            res.json({
                message:"success",
                file:file,
            })
        })
		.catch((err) => {
            res.json({
                message:"file not created",
                error:err
            })
        });
};

//function for handeling the upload

const addFileForUser = async (fileName, fileType, userId, parentId = null) => {
	try {
		// Validate that the user exists
		const user = await User.findById(userId);
		if (!user) {
			throw new Error("User not found");
		}

		// Create the new file/folder
		const newFile = new File({
			name: fileName,
			type: fileType,
			parent: parentId, // Set parent as the folder ID, or null for root
			user: userId, // Associate file with the user
		});

		// Save the new file/folder
		await newFile.save();
		console.log(
			`File '${fileName}' created successfully for user ${userId}`
		);
		return newFile;
	} catch (err) {
		console.error("Error adding file:", err);
		throw err;
	}
};

// Example usage
