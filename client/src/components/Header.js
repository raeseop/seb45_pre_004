import { Link } from "react-router-dom";

import logoImg from "../assets/images/logoImage.png";

import tokens from "../styles/tokens.json";
import { SmallButtonDesign as Button } from "../atoms/Button";
import { ColorGradBlue as Gradient } from "../atoms/Button";
import { Background, Wrapper, Title, Buttons } from "../styles/header";

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
