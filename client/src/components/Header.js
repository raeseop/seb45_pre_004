import logoImg from "../assets/images/logoImage.png";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LogoLink = styled(Link)`
	padding: 20px;
    text-decoration-line : none;
    text-decoration : none;
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`
const TitleLogoImg = styled.img`
	width: 8vw;
	max-width: 100px;
`
const TitleLogoText = styled.h1`
	font-family: "Jolly Lodger";
	font-size: 1.3rem;
	color: #0567c2;
`;

export default function Header() {
	return (
			<LogoLink to="/">
				<TitleLogoImg src={logoImg} alt="logo" />
				<TitleLogoText>STACK UNDERFLOW</TitleLogoText>
			</LogoLink>
	);
}
