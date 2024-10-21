import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import { genID } from "../libs/uuidGen.js";

// Register a new user
export const registerUser = async (req, res) => {
	const { username, email, password } = req.body;
    

	try {
       
        const {sortId,longId}= genID();
		// Check if the user already exists
        
		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "User already exists" });
		}
        
		// Hash the password
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		// Create a new user
        
		
		const newUser = new User({
			username,
			email,
			password: hashedPassword,
			sec: sortId,
		});
		await newUser.save();

		// Generate a JWT token
		const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
			expiresIn: "3h",
		});
     
		// Send back the token and user data
		res.status(201).json({
			token,
            sec:sortId,
			user: { id: newUser._id, username, email },
		});
	} catch (error) {
        console.log(error);
		res.status(500).json({ message: "Server error" });
	}
};
