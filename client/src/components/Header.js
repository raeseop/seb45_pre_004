import { Link } from "react-router-dom";
import { styled } from "styled-components";

import backgroundImg from "../assets/images/headerImage.png";
import logoImg from "../assets/images/logoImage.png";

import tokens from "../styles/tokens.json";
import { SmallButtonDesign as Button } from "../atoms/Button";
import { ColorGradBlue as Gradient } from "../atoms/Button";

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
	text-align: center;

	a,
	a:visited,
	a:active {
		outline: none;
		text-decoration: none;
	}
`;

const Wrapper = styled.div`
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

const Title = styled.h1`
	font-family: "Jolly Lodger";
	font-size: 32px;
	color: #0567c2;
`;

const Buttons = styled.section`
	position: absolute;
	right: 0;

	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 0px 40px;
`;

export default function Header() {
	return (
		<Background>
			<Wrapper>
				<Link to="/">
					<img src={logoImg} alt="logo" />
					<br />
					<Title>STACK UNDERFLOW</Title>
				</Link>
				<Buttons>
					<Link to="/login">
						<Button color={tokens.global.pointColor.value}>로그인</Button>
					</Link>
					<Link to="/signup">
						<Button color={tokens.global.whiteColor.value}>
							<Gradient>가입하기</Gradient>
						</Button>
					</Link>
				</Buttons>
			</Wrapper>
		</Background>
	);
}
