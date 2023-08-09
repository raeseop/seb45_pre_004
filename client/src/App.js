import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import QnAWritePage from "./pages/QnAWritePage";
import QnADetailPage from "./pages/QnADetailPage";

function App() {
	return (
		<BrowserRouter>
			<div>Stack Underflow!</div>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/write" element={<QnAWritePage />} />
				<Route path="/detail" element={<QnADetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
