import React from "react";
import tokens from "../styles/tokens.json";
import { styled } from "styled-components";
import Form from "../components/Form";

const QuestionHead = styled.h1`
  font-size: ${tokens.global.bigHeading.value}px;
  margin: 10px;
`;

const QuestionP = styled.p`
  font-size: ${tokens.global.bodyText.value}px;
  margin: 10px;
`;

const TextP = styled(QuestionP)`
  background-color: ${tokens.global.mainColor.value};
  margin: 10px;
  padding: 10px;
`;

// &nbsp; => HTML에서 띄어쓰기를 구현하는 방법 => 문단 구분을 위해 사용함

const QnAWritePage = () => {
  return (
    <div>
      <QuestionHead>질문하세요!</QuestionHead>
      <div>
        <TextP>
          좋은 질문을 작성하는 방법
          <br /> &nbsp; 여러분은 프로그래밍과 관련된 질문을 할 준비가
          되셨습니다. 아래 폼을 작성해보세요 <br />
          <br />
          단계 <br />
          &nbsp;여러분의 문제를 제목 한 줄로 표현해보세요.
          <br /> &nbsp;더 구체적이게 여러분의 문제를 묘사해보세요. <br />
          &nbsp;무엇을 했고 무엇을 기대했는지 작성하세요.
          <br />
          &nbsp;여러분의 질문을 다시 한번 검토한 후에 제출해주세요!
        </TextP>
      </div>
      <Form />
    </div>
  );
};

export default QnAWritePage;
