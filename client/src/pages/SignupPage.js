import React, { useState } from "react";
import styled from "styled-components";
import { RegularButtonDesign } from "../atoms/Button";
import tokens from "../styles/tokens.json";
import { SignupInputDesign } from "../atoms/Input";

const Input = styled(SignupInputDesign)`
  padding: 1rem;
`;

const InputAndSpanBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ModalDiv = styled.div`
  border: 1px solid gray;
  width: 452px;
  height: 819px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const InputSPan = styled.span`
  margin: 10px;
`;

const Button = styled(RegularButtonDesign)`
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

const WarningSpan = styled.span`
  color: ${tokens.global.negativeColor.value};
  font-weight: ${tokens.global.bold.value};
  margin: 1rem;
  text-align: right;
`;

const SignupPage = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState("");

  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onChangeIdHandler = (e) => {
    setId(e.target.value);
    // 이미 사용중인 아이디 감지 로직
  };

  const onChangePwdHandler = (e) => {
    setPwd(e.target.value);
  };

  const onChangePwdCheckHandler = (e) => {
    setPwdCheck(e.target.value);
  };

  return (
    <Section>
      <ModalDiv>
        <InputAndSpanBox>
          <InputSPan>이름</InputSPan>
          <Input
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={onChangeNameHandler}
          />
        </InputAndSpanBox>
        <InputAndSpanBox>
          <InputSPan>아이디</InputSPan>
          <Input
            placeholder="아이디를 입력해 주세요."
            value={id}
            onChange={onChangeIdHandler}
          />
          {/*<WarningSpan>이미 사용중인 아이디입니다.</WarningSpan> */}
        </InputAndSpanBox>
        <InputAndSpanBox>
          <InputSPan>비밀번호</InputSPan>
          <Input
            placeholder="비밀번호를 입력해 주세요."
            value={pwd}
            onChange={onChangePwdHandler}
            type="password"
          />
          {pwd.length < 6 ? (
            <WarningSpan>비밀번호는 6자 이상이어야 합니다.</WarningSpan>
          ) : (
            <></>
          )}
        </InputAndSpanBox>
        <InputAndSpanBox>
          <InputSPan>비밀번호 확인</InputSPan>
          <Input
            placeholder="비밀번호를 다시 입력해주세요."
            value={pwdCheck}
            onChange={onChangePwdCheckHandler}
            type="password"
          />
          {pwd !== pwdCheck ? (
            <WarningSpan>
              비밀번호와 비밀번호 확인이 일치하지 않습니다.
            </WarningSpan>
          ) : (
            <></>
          )}
        </InputAndSpanBox>
        <Button>가입하기</Button>
      </ModalDiv>
    </Section>
  );
};

export default SignupPage;
