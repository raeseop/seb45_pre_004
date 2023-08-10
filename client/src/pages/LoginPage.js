import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions";
import { styled } from "styled-components";
import { LoginInputBottomDesign, LoginInputTopDesign } from "../atoms/Input";
import tokens from '../styles/tokens.json'
import { RegularButtonDesign } from "../atoms/Button";

const globalTokens = tokens.global;

export const LoginPageContainer = styled.div`
	width: 100%;
	height: 75vh;
	min-height: 400px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
export const LoginContainer = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	box-shadow: 0px 2px 10px 4px rgba(0, 0, 0, 0.10);
	border-radius: 20px;
	padding: 25px 45px;

`
export const LoginTitle = styled.h1`
	font-size: ${globalTokens.bigHeading.value}px;
	font-weight: ${globalTokens.bold.value};
	margin-bottom: 10px;
`
export const LoginButton = styled(RegularButtonDesign)`
`

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
			</LoginContainer>
		</LoginPageContainer>
	);
};

export default LoginPage;
