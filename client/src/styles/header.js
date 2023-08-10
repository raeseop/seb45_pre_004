import { styled } from "styled-components";

import backgroundImg from "../assets/images/headerImage.png";

export const Background = styled.header`
	background-image: url(${backgroundImg});
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 425px;
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

	border-radius: 20px;
	background: rgba(255, 255, 255, 0.5);
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
