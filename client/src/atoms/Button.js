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

export const SmallCircleButtonDesign = styled(RegularButtonDesign)`
  border-radius: 50%;
  width: 80px;
  height: 80px;
`;

export const SmallButtonDesign = styled(RegularButtonDesign)`
  border-radius: ${tokens.global.regularRadius.value}px;
  width: 146px;
  height: 58px;
`;

const Button = ({ color, text }) => {
  return (
    <div>
      <RegularButtonDesign color={color}>{text}</RegularButtonDesign>
      <SmallCircleButtonDesign>{text}</SmallCircleButtonDesign>
      <SmallButtonDesign>{text}</SmallButtonDesign>
    </div>
  );
};

export default Button;
