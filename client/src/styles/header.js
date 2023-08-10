import { styled } from "styled-components";

export const Background = styled.header`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	a,
	a:visited,
	a:active {
		outline: none;
		text-decoration: none;
	}
`;

export const Wrapper = styled.div`
	background-color: rgba(255, 255, 255, 0.5);
	width: 90%;
	height: 50%;
	display: flex;
	flex-direction: column;
	justify-content: center;

	background-color: ${(props) =>
		props.isLoginPage
			? "transparent"
			: "	background: rgba(255, 255, 255, 0.5);"};
	border-radius: 20px;

	position: relative;
`;

export const Title = styled.h1`
	font-family: "Jolly Lodger";
	font-size: 32px;
	color: #0567c2;
`;

export const Buttons = styled.section`
	position: absolute;
	right: 0;

	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 0px 40px;
`;
