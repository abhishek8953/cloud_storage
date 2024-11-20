import React from "react";
import SignupPage from "./SignupPage";

const LandingPage = () => {
	return (
		<div className="min-h-screen bg-gray-100">
			{/* Header */}
			<header className="bg-white shadow-md">
				<nav className="container mx-auto p-4 flex justify-between items-center">
					<div className="text-2xl font-bold text-indigo-600">
						CloudStore
					</div>
					<ul className="flex space-x-6">
						<li>
							<a
								href="#features"
								className="text-gray-700 hover:text-indigo-600"
							>
								Features
							</a>
						</li>
						<li>
							<a
								href="#pricing"
								className="text-gray-700 hover:text-indigo-600"
							>
								Pricing
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="text-gray-700 hover:text-indigo-600"
							>
								Contact
							</a>
						</li>
						<li>
							<a
								href="/login"
								className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
							>
								Login
							</a>
						</li>
					</ul>
				</nav>
			</header>

			{/* Hero Section */}
			<section className="bg-indigo-600 text-white py-20">
				<div className="container mx-auto text-center">
					<h1 className="text-5xl font-bold mb-6">
						Store and Access Your Files from Anywhere
					</h1>
					<p className="text-lg mb-6">
						Fast, secure, and reliable cloud storage solution for
						your personal and professional needs.
					</p>
					<a
						href="/signup"
						className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
					>
						Get Started
					</a>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold mb-12">
						Why Choose CloudStore?
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Feature 1 */}
						<div className="bg-white p-8 shadow-md rounded-lg">
							<h3 className="text-2xl font-bold mb-4">
								Secure Storage
							</h3>
							<p className="text-gray-600">
								All your data is encrypted and protected with
								the highest security standards.
							</p>
						</div>
						{/* Feature 2 */}
						<div className="bg-white p-8 shadow-md rounded-lg">
							<h3 className="text-2xl font-bold mb-4">
								Access Anywhere
							</h3>
							<p className="text-gray-600">
								Your files are available 24/7 from any device
								with an internet connection.
							</p>
						</div>
						{/* Feature 3 */}
						<div className="bg-white p-8 shadow-md rounded-lg">
							<h3 className="text-2xl font-bold mb-4">
								Unlimited Sharing
							</h3>
							<p className="text-gray-600">
								Share files with friends, family, and colleagues
								with ease.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Section */}
			<section id="pricing" className="bg-gray-50 py-20">
				<div className="container mx-auto text-center">
					<h2 className="text-3xl font-bold mb-12">
						Choose Your Plan
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Plan 1 */}
						<div className="bg-white p-8 shadow-md rounded-lg">
							<h3 className="text-2xl font-bold mb-4">
								Free Plan
							</h3>
							<p className="text-gray-600">
								5 GB of free storage with basic features.
							</p>
							<p className="text-4xl font-bold my-4">$0/month</p>
							<a
								href="/signup"
								className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700"
							>
								Get Started
							</a>
						</div>
						{/* Plan 2 */}
						<div className="bg-white p-8 shadow-md rounded-lg">
							<h3 className="text-2xl font-bold mb-4">
								Pro Plan
							</h3>
							<p className="text-gray-600">
								100 GB storage with premium features.
							</p>
							<p className="text-4xl font-bold my-4">
								$9.99/month
							</p>

							<button className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700">
								Get Started
							</button>
						</div>
						{/* Plan 3 */}
						<div className="bg-white p-8 shadow-md rounded-lg">
							<h3 className="text-2xl font-bold mb-4">
								Enterprise Plan
							</h3>
							<p className="text-gray-600">
								Unlimited storage with enterprise-level support.
							</p>
							<p className="text-4xl font-bold my-4">
								$29.99/month
							</p>
							<a
								href="/signup"
								className="bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700"
							>
								Get Started
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer id="contact" className="bg-gray-900 text-gray-400 py-8">
				<div className="container mx-auto text-center">
					<p>&copy; 2024 CloudStore. All Rights Reserved.</p>
					<ul className="flex justify-center space-x-6 mt-4">
						<li>
							<a href="#features" className="hover:text-white">
								Features
							</a>
						</li>
						<li>
							<a href="#pricing" className="hover:text-white">
								Pricing
							</a>
						</li>
						<li>
							<a href="#contact" className="hover:text-white">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</div>
	);
};

export default LandingPage;
