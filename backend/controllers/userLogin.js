// controllers/authController.js
import { AxiosError } from "axios";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// Login function
export const loginUser = async (req, res) => {
	const { email, password } = req.body;
	const JWT_SECRET = process.env.JWT_SECRET;

	try {
		// Find the user by email
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		// Check the password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		// Create JWT token
		const token = jwt.sign({ id: user._id }, JWT_SECRET, {
			expiresIn: "1h",
		});

		// Set the cookie
		res.cookie("token", token, {
			httpOnly: true, // Helps mitigate the risk of client side script accessing the token
			secure: true, // Use secure cookies in production
			maxAge: 3600000, // 1 hour
		});
		// const modifiedUser={...user.toObject,"password":""}
		const tt = user.toObject();
		delete tt.password;
		return res.status(200).json({ message: "Login successful", tt });
	} catch (error) {
		console.error("Login error:", error);
		return res.status(500).json({ message: "Internal server error" });
	}
};

//login secret

export const loginSec = async (req, res) => {
	const { sec } = req.body;
	try {
		const user = await User.findOne({ sec }).select("-password -sec");
		if (!user)
			return res.json({ success: false, message: "user not find" });
		return res.json({
			success: true,
			message: "login sucessfull",
			user: user,
		});
	} catch (err) {
		res.send(err);
	}
};
