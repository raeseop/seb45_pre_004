import backgroundImg from "../assets/images/headerImage.png";
import logoImg from "../assets/images/logoImage.png";
import { styled } from "styled-components";

const Background = styled.header`
	background-image: url(${backgroundImg});
	background-size: cover;
	background-position: center;
	width: 100%;
	height: 425px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	color: white;
	text-align: center;
`;

const Title = styled.h1`
	font-family: "Jolly Lodger";
	font-size: 32px;
	color: #0567c2;
`;

export default function Header() {
	return (
		<Background>
			<div>header</div>
			<img src={logoImg} alt="logo" />
			<br />
			<Title>STACK UNDERFLOW</Title>
		</Background>
	);
}
