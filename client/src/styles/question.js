import { styled } from "styled-components";
import tokens from "../styles/tokens.json";

const globalTokens = tokens.global;

export const Wrapper = styled.li`
	display: flex;
	width: 921px;
	height: 158px;
	padding: 20px 10px;
    margin: 15px;
	align-items: flex-start;
	gap: 22px;

	border-radius: 10px;
	background: #fff;
	box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);

	font-weight: 700;

	color: ${globalTokens.greyColor.value};
`;

export const Current = styled.aside`
	display: flex;
	padding: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	gap: 10px;
`;
export const Container = styled.article`
	display: flex;
	width: 764px;
	padding: 10px 0px;
	flex-direction: column;
	justify-content: space-around;
	align-items: flex-end;
	gap: 10px;
	flex-shrink: 0;

	h1 {
        font-size: 20px;
		color: ${globalTokens.blackColor.value};
	}
`;
export const Contents = styled.section`
	display: flex;
	width: 764px;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	gap: 7px;
`;

export const Info = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 5px;
	margin-top: 20px;
	color: ${globalTokens.lightGreyColor.value};

	section {
		display: "flex";
		gap: 5px;
	}

	span {
		color: ${globalTokens.blackColor.value};
	}
`;
