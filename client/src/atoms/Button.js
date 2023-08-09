import React from "react";
import styled from "styled-components";
import tokens from "../styles/tokens.json";

export const RegularButtonDesign = styled.button`
  border-radius: ${tokens.global.regularRadius.value}px;
  border: 0;
  font-size: ${tokens.global.smallHeading.value}px;
  color: ${tokens.global.whiteColor.value};
  box-shadow: ${tokens.global.regularShadow.value.x}px
    ${tokens.global.regularShadow.value.y}px
    ${tokens.global.regularShadow.value.blur}px
    ${tokens.global.regularShadow.value.spread}px
    ${tokens.global.regularShadow.value.color};

  background: ${(props) => props.color || `${tokens.global.mainColor.value}`};
  width: 350px;
  height: 70px;
`;

const Button = ({ color, text }) => (
  <RegularButtonDesign color={color}>{text}</RegularButtonDesign>
);

export default Button;
