import React, { useState } from "react";
import tokens from "../styles/tokens.json";
import { styled } from "styled-components";
import { RegularButtonDesign } from "../atoms/Button";

const InputBox = styled.div`
  background-color: ${tokens.global.pointColor.value};
  padding: 10px;
`;

const InputContent = styled.div`
  background-color: ${tokens.global.greyColor.value};
  height: 100px;
  padding: 10px;
  height: 150px;
`;

const ButtonAndContent = styled.div`
  width: 100%;
  text-align: right;
`;

const QuestionP = styled.p`
  font-size: ${tokens.global.bodyText.value}px;
  margin: 10px;
`;
const QuestionHead = styled.h1`
  font-size: ${tokens.global.bigHeading.value}px;
  margin: 10px;
  margin-top: 1rem;
`;
const TextArea = styled.textarea`
  width: 100%;
  resize: none;
  height: 125px;
`;

const ButtonDesign = styled(RegularButtonDesign)`
  margin-top: 1rem;
  background-color: black;
  &:hover {
    background-color: red;
  }
`;

const DisabledButton = styled(RegularButtonDesign)`
  margin-top: 1rem;
  background-color: ${tokens.global.greyColor.value};
  &:hover {
    background-color: ${tokens.global.greyColor.value};
    cursor: default;
  }
  opacity: 0.8; /* 80% 불투명도 */
`;

const Warning = styled.p`
  color: red;
  font-size: ${tokens.global.bigHeading.value};
  margin-top: 1rem;
  font-weight: ${tokens.global.bold.value};
`;

const submitHandler = (e) => {
  e.preventDefault();
  console.log("You need to Write Some Logics for this");
};

export default function Form() {
  const [textInput, setTextInput] = useState("");
  const [textInput2, setTextInput2] = useState("");

  const onChangeHandler = (e) => {
    setTextInput(e.target.value);
  };

  const onChangeHandler2 = (e) => {
    setTextInput2(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <QuestionHead>질문 제목</QuestionHead>
      <InputBox>
        <div>
          <QuestionP>가능한 구체적으로 작성하세요!</QuestionP>
        </div>
        <ButtonAndContent>
          <InputContent>
            <TextArea
              name="desc"
              placeholder="질문 제목을 작성하세요."
              value={textInput}
              onChange={onChangeHandler}
            ></TextArea>
          </InputContent>
        </ButtonAndContent>
      </InputBox>
      <QuestionHead>질문 내용</QuestionHead>
      <InputBox>
        <QuestionP>
          제목에 적힌 문제를 소개하고 더 구체적으로 작성해주세요. 최소 20글자는
          입력하셔야 합니다.
        </QuestionP>
        <ButtonAndContent>
          <InputContent>
            <TextArea
              name="desc"
              placeholder="질문 내용을 작성하세요"
              value={textInput2}
              onChange={onChangeHandler2}
            ></TextArea>
          </InputContent>
          {textInput2.length < 20 ? (
            <>
              <Warning>20글자 이상 입력해주세요</Warning>
              <DisabledButton disabled>제출 불가능</DisabledButton>
            </>
          ) : (
            <ButtonDesign>제출하기</ButtonDesign>
          )}
        </ButtonAndContent>
      </InputBox>
    </form>
  );
}
