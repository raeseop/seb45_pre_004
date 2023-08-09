import logo from "../assets/images/githubLogo.png";
import { styled } from "styled-components";

const GithubLogo = styled.a`
  margin: 1rem;
  text-decoration: none;
  color: black;
  display: inline-block;
`;

const Wrapper = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Footer() {
  return (
    <Wrapper>
      <div>
        Site design / logo © 2023 Stack Exchange Inc; user contributions
        licensed under CC BY-SA.
      </div>
      <LogoWrapper>
        <GithubLogo href="https://github.com/raeseop">
          <img src={logo} alt="githubLogo" />
          홍래섭
        </GithubLogo>
        <GithubLogo href="https://github.com/IncheonLee">
          <img src={logo} alt="githubLogo" />
          이준석
        </GithubLogo>
        <GithubLogo href="https://github.com/kimsihyuong">
          <img src={logo} alt="githubLogo" />
          김시형
        </GithubLogo>
        <GithubLogo href="https://github.com/3kiein">
          <img src={logo} alt="githubLogo" />
          김세민
        </GithubLogo>
        <GithubLogo href="https://github.com/HyerimKimm">
          <img src={logo} alt="githubLogo" />
          김혜림
        </GithubLogo>
        <GithubLogo href="https://github.com/HelloWorldDogs223">
          <img src={logo} alt="githubLogo" />
          이용혁
        </GithubLogo>
      </LogoWrapper>
    </Wrapper>
  );
}
