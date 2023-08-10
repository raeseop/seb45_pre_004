import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/MainPage";
import Login from "./pages/LoginPage";
import Signup from "./pages/SignupPage";
import QnAWritePage from "./pages/QnAWritePage";
import QnADetailPage from "./pages/QnADetailPage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigator from "./components/Navigator";
import { useSelector } from "react-redux";


function App() {
	const isLogin = useSelector((state)=>state.authReducer);

	return (
		<BrowserRouter>
			<Header />
			{
				isLogin?'isLogin: true':'isLogin : false'
			}
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/write" element={<QnAWritePage />} />
				<Route path="/detail" element={<QnADetailPage />} />
			</Routes>
			<Navigator />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
