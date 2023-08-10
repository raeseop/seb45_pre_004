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

const QnAWritePage = () => {
  return (
    <div>
      <QuestionHead>질문하세요!</QuestionHead>
      <div>
        <TextP>
          좋은 질문을 작성하는 방법
          <br /> You’re ready to ask a programming-related question and this
          form will help guide you through the process. <br />
          Looking to ask a non-programming question? See the topics here to find
          a relevant site.
          <br />
          Steps <br />
          Summarize your problem in a one-line title.
          <br /> Describe your problem in more detail. <br />
          Describe what you tried and what you expected to happen.
          <br />
          Add “tags” which help surface your question to members of the
          community. <br />
          Review your question and post it to the site.
        </TextP>
      </div>
      <Form />
    </div>
  );
};

export default QnAWritePage;
