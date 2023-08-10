import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions";
import { LoginInputBottomDesign, LoginInputTopDesign } from "../atoms/Input";
import tokens from '../styles/tokens.json'
import { TextButtonDesign } from "../atoms/Button";
import { LoginButton, LoginContainer, LoginPageContainer, LoginTitle } from "../styles/loginPageStyle";

const globalTokens = tokens.global;

const LoginPage = () => {
	const dispatch = useDispatch();

	const handleLogin = () => {
		// 로그인 API 호출 등 로직 작성 필요
		dispatch(login());
	};

	return (
		<LoginPageContainer>
			<LoginContainer>
				<LoginTitle>로그인</LoginTitle>
				<LoginInputTopDesign type='text'/>
				<LoginInputBottomDesign type='password'/>
				<LoginButton color={globalTokens.pointColor.value}>로그인</LoginButton>
				<TextButtonDesign>회원가입</TextButtonDesign>
			</LoginContainer>
		</LoginPageContainer>
	);
};

export default LoginPage;
