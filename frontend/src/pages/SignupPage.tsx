import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const navigate = useNavigate();
	

	
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (password !== confirmPassword) {
			toast.error("password not match")
			return;
		}
		// Handle signup logic here (e.g., send data to the backend)
		const { data } = await axios.post("/regester", {
			username,
			email,
			password,
		});

		
		if (data.user) {
			toast.success("id created sucess");
			navigate("/login");
		} else {
			toast.error("Id not created Please recreate");
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
				<h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
					Create an Account
				</h2>
				<form onSubmit={handleSubmit}>
					{/* Username Field */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Username
						</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
							placeholder="Enter your username"
							required
						/>
					</div>
					{/* Email Field */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Email
						</label>
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
							placeholder="Enter your email"
							required
						/>
					</div>
					{/* Password Field */}
					<div className="mb-4">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Password
						</label>
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
							placeholder="Enter your password"
							required
						/>
					</div>
					{/* Confirm Password Field */}
					<div className="mb-6">
						<label className="block text-gray-700 text-sm font-bold mb-2">
							Confirm Password
						</label>
						<input
							type="password"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
							placeholder="Confirm your password"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700"
					>
						Sign Up
					</button>
				</form>
				<p className="text-sm text-center text-gray-600 mt-4">
					Already have an account?{" "}
					<a
						href="/login"
						className="text-indigo-600 hover:underline"
					>
						Login here
					</a>
				</p>
			</div>
		</div>
	);
};

export default SignupPage;
