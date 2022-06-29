import React, { useState } from 'react';
import styled from 'styled-components';
import { Image } from '../components';
import { LoginInput } from '../components/login/LoginInput';

const Wrapper = styled.div`
  display: flex;
  width: 400px;
  flex-direction: column;
  row-gap: 4rem;
  margin: 30px auto;
`;

const Header = styled.div`
  align-self: center;
  width: 50%;
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`;

const LoginButton = styled.button`
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  background-color: ${(p) => (p.isActive ? 'black' : '#efefef')};
  padding: 1rem;
`;

const LoginPage = () => {
  const [emailValidity, setEmailValidity] = useState(false);
  const [passwordValidity, setPasswordValidity] = useState(false);

  return (
    <Wrapper>
      <Header>
        <Image src="/images/logo.png" />
      </Header>
      <FormGroup>
        <LoginInput
          labelName="이메일"
          placeholder="예) pcg0527@naver.com"
          type="text"
          id="email"
          errorMessage="이메일 형식이 올바르지 않습니다"
          valid={emailValidity}
        />
        <LoginInput
          labelName="패스워드"
          placeholder=""
          type="password"
          id="password"
          errorMessage="패스워드 형식이 올바르지 않습니다"
          valid={passwordValidity}
        />
        <LoginButton>로그인</LoginButton>
      </FormGroup>
    </Wrapper>
  );
};

export default LoginPage;
