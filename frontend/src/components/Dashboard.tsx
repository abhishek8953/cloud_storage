/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFile } from "../store/reducer/fileReducer";
import FileExplorer from "./FileExplorer";

export const Dashboard = () => {
	const logout = (e: any) => {
		e.preventDefault();
		axios
			.get("/logout", { withCredentials: true })
			.then(() => {
				toast.success("logout succesful");
			})
			.catch(() => {
				toast.error("not logout");
			});
	};

	return (
		<div>
			{/* header section */}
			<header className="bg-white shadow-md">
				<nav className="container mx-auto p-4 flex justify-between items-center">
					<div className="text-2xl font-bold text-indigo-600">
						CloudStore
					</div>
					<ul className="flex space-x-6">
						<li>
							<Link
								className="text-gray-700 hover:text-indigo-600"
								to={"#features"}
							>
								Features
							</Link>
						</li>
						<li>
							<Link
								className="text-gray-700 hover:text-indigo-600"
								to={"#features"}
							>
								Pricing
							</Link>
						</li>
						<li>
							<button
								onClick={logout}
								className="text-gray-700 hover:text-indigo-600"
							>
								Logout
							</button>
						</li>
					</ul>
				</nav>
			</header>

			<div className="flex  h-[36.6rem]">
				<div className="w-80 bg-red-500 ">
					<h1>Folder and Directory</h1>
					<FileExplorer />
				</div>

				<div className="bg-green-500 w-full ">
					<h1>All contend filess</h1>
				</div>
			</div>
		</div>
	);
};

// const Folder = ({ data = 1 }) => {
// 	const [show, setShow] = useState(false);
// 	const dispatch = useDispatch();
// 	const nodes = useSelector((state: any) => state.file);
// 	console.log("nodes", nodes);

// 	const handleDelete = (da: number) => {
// 		const tempUser = { ...nodes };
// 		const parentId = tempUser[da].parentId;
// 		tempUser[parentId] = {
// 			...tempUser[parentId],
// 			children: tempUser[parentId].children.filter(
// 				(id: number) => id != data
// 			),
// 		};

// 		let queue = [da];

// 		while (queue.length > 0) {
// 			const currentId = queue.shift();
// 			if (tempUser[currentId].children) {
// 				queue.push(...tempUser[currentId].children);
// 			}
// 			delete tempUser[currentId];
// 		}
// 		dispatch(setFile(tempUser));
// 	};

	
// 	return (
// 		<div className="pl-4 border-l border-l-black ">
// 			<h4 className="">
// 				{nodes[data]?.type == "folder" ? "foler:" : "file:"}
// 				<span onClick={() => setShow((pre) => !pre)}>
// 					{nodes[data]?.name}
// 				</span>
// 				<span className="">
// 					<button
// 						className="border border-yellow-200"
// 						onClick={() => handleDelete(data)}
// 					>
// 						Delete
// 					</button>
// 				</span>
// 			</h4>
// 			{show &&
// 				nodes[data].children?.map((da: number, index: number) => (
// 					<Folder key={index} data={da} />
// 				))}
// 		</div>
// 	);
// };
