import "./App.css";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./components/Dashboard";
import Auth from "./components/Auth";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLoading, setLogged } from "./store/reducer/authreducer";

function App() {
	const dispatch = useDispatch();
    dispatch(setLoading(true))
    useEffect(()=>{
      
        async function check(){
            const {data}=await axios.get("/check",{withCredentials:true});
            if(data.success){
                dispatch(setLogged(data))
            }
            dispatch(setLoading(false))
        }
        check().catch((err)=>{
            console.log("error",err);
        })
    },[dispatch])

	return (
		<BrowserRouter>
			<Routes>
				<Route index path="/" element={<LandingPage />} />
				<Route path="/signup" element={<SignupPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route
					path="/dashboard"
					element={
						<Auth>
							<Dashboard />
						</Auth>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />{" "}
				{/* Redirect to home for unknown routes */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
