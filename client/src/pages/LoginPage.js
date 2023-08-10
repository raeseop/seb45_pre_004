import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions";

import tokens from "../styles/tokens.json";
import Button from "../atoms/Button";

const LoginPage = () => {
	const dispatch = useDispatch();

	const handleLogin = () => {
		// 로그인 API 호출 등 로직 작성 필요
		dispatch(login());
	};

	return (
		<div>
			<h1>This is Login Page.</h1>
			<Button
				onClick={handleLogin}
				color={tokens.global.pointColor.value}
				text={"로그인"}
			/>
		</div>
	);
};

export default LoginPage;
