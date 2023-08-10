import React, { useState } from "react";
import {
  InputBox,
  InputContent,
  ButtonAndContent,
  QuestionP,
  QuestionHead,
  TextArea,
  ButtonDesign,
  DisabledButton,
  Warning,
} from "../styles/form";

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
