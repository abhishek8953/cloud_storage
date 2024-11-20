import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import { store } from "./store/store.ts";
import { Provider } from "react-redux";

axios.defaults.baseURL = "http://localhost:5000";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
		<Toaster />
	</StrictMode>
);
