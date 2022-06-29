import React, { useState, useEffect, useRef } from 'react';
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
  const emailInput = useRef();
  const passwordInput = useRef();
  const [emailValidity, setEmailValidity] = useState(null);
  const [passwordValidity, setPasswordValidity] = useState(null);
  const [formValidity, setFormValidity] = useState(false);

  // 유효성 검사에 활용할 정규식
  const regPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  // 이메일, 패스워드 유효성이 바뀔 때 폼 전체 유효성을 확인
  useEffect(() => {
    if (emailValidity && passwordValidity) {
      setFormValidity(true);
    } else {
      setFormValidity(false);
    }
  }, [emailValidity, passwordValidity]);

  const emailValidityHandler = () => {
    const target = emailInput.current.value.trim();
    setEmailValidity(target.includes('@') && target.includes('.'));
  };

  const passwordValidityHandler = () => {
    setPasswordValidity(regPassword.test(passwordInput.current.value.trim()));
  };

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
          inputRef={emailInput}
          validation={emailValidityHandler}
        />
        <LoginInput
          labelName="패스워드"
          placeholder=""
          type="password"
          id="password"
          errorMessage="패스워드 형식이 올바르지 않습니다"
          valid={passwordValidity}
          inputRef={passwordInput}
          validation={passwordValidityHandler}
        />
        <LoginButton
          type="submit"
          disabled={!formValidity}
          isActive={formValidity}
        >
          로그인
        </LoginButton>
      </FormGroup>
    </Wrapper>
  );
};

export default LoginPage;
