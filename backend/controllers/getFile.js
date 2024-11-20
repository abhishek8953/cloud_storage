import File from "../models/fileStructureModel.js"; // Assuming the schema is in fileModel.js
import User from "../models/userModel.js"; // Assuming the User schema is in userModel.js

export const getFileWithparent = (req, res) => {
	let parentId = null;
	if (req.params.parentId) {
		parentId = req.params.parentId;
	}

	console.log(parentId);
	const userId = req.id; // Replace with actual user ID
	getFilesForUser(userId, parentId)
		.then((files) => console.log("User files:", files))
		.catch((err) => console.error(err));
};

export const getFile = (req, res) => {
	const userId = req.id; // Replace with actual user ID
	getFilesForUser(userId)
		.then((files) => console.log("User files:", files))
		.catch((err) => console.error(err));
};
//function for getting files

const getFilesForUser = async (userId, parentId = null) => {
	try {
		// Find files for the user and optionally filter by parentId (if provided)
		const files = await File.find({ user: userId, parent: parentId });

		if (files.length === 0) {
			console.log(`No files found for user ${userId}`);
			return [];
		}

		console.log(`Found ${files.length} files for user ${userId}`);
		return files;
	} catch (err) {
		console.error("Error fetching files:", err);
		throw err;
	}
};

// Example usage
