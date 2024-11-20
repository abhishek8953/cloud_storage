import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLogged } from "../store/reducer/authreducer";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [secretKey, setSecretKey] = useState("");
	const [isSecretKeyLogin, setIsSecretKeyLogin] = useState(false); // Toggle for login mode
	const navigate = useNavigate();
	const dispatch=useDispatch()

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isSecretKeyLogin) {
			const { data } = await axios.post("/loginsecret", {
				sec: secretKey,
			},{withCredentials:true});
			console.log(data);
			if (data.success) {
				toast.success(data.message);
				dispatch(setLogged({success: true,id: data.tt._id,}))
				
				navigate("/dashboard");
			} else {
				toast.error("wront secreat key");
			}
		} else {
			// Handle login with email and password
			try {
				const { data } = await axios.post(
					"/login",
					{
						email,
						password,
					},
					{ withCredentials: true }
				);
				if (data.tt) {
					console.log("daat",data.tt._id);
					dispatch(setLogged({success: true,id: data.tt._id,}))
				    navigate("/dashboard");
					
					toast.success("login successful");
				}
			} catch (err) {
				const u = err?.response?.data.message;
				toast.error(u);
			}
		}
	};

	const toggleLoginMode = () => {
		setIsSecretKeyLogin(!isSecretKeyLogin);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
				<h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">
					Login to CloudStore
				</h2>

				{/* Toggle between email/password and secret key */}
				<div className="mb-4 text-center">
					<button
						type="button"
						onClick={toggleLoginMode}
						className="text-indigo-600 hover:underline"
					>
						{isSecretKeyLogin
							? "Login with Email and Password"
							: "Login with Secret Key"}
					</button>
				</div>

				<form onSubmit={handleSubmit}>
					{isSecretKeyLogin ? (
						// Secret Key login
						<div className="mb-4">
							<label className="block text-gray-700 text-sm font-bold mb-2">
								Secret Key
							</label>
							<input
								type="text"
								value={secretKey}
								onChange={(e) => setSecretKey(e.target.value)}
								className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
								placeholder="Enter your secret key"
								required
							/>
						</div>
					) : (
						// Email and Password login
						<>
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
							<div className="mb-6">
								<label className="block text-gray-700 text-sm font-bold mb-2">
									Password
								</label>
								<input
									type="password"
									value={password}
									onChange={(e) =>
										setPassword(e.target.value)
									}
									className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
									placeholder="Enter your password"
									required
								/>
							</div>
						</>
					)}

					<button
						type="submit"
						className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-indigo-700"
					>
						{isSecretKeyLogin ? "Login " : "Login "}
					</button>
				</form>

				<p className="text-sm text-center text-gray-600 mt-4">
					Don't have an account?{" "}
					<a
						href="/signup"
						className="text-indigo-600 hover:underline"
					>
						Sign up here
					</a>
				</p>
			</div>
		</div>
	);
};

export { LoginPage };
