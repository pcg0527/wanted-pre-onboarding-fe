import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1.5px solid #efefef;
  outline: none;
  padding: 0.8rem 0rem;
  &:focus {
    border-bottom: 1.5px solid black;
  }
`;

const Label = styled.label`
  font-size: 1.5rem;
`;

const ErrorMessage = styled.p`
  font-size: 1.2rem;
  color: red;
  visibility: ${(props) => (props.valid === false ? 'visible' : 'hidden')};
`;

const LoginInput = ({
  labelName,
  placeholder,
  type,
  id,
  errorMessage,
  valid,
  inputRef,
  validation,
}) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{labelName}</Label>
      <Input
        onBlur={validation}
        ref={inputRef}
        id={id}
        type={type}
        placeholder={placeholder}
      />
      <ErrorMessage valid={valid}>{errorMessage}</ErrorMessage>
    </Wrapper>
  );
};

export { LoginInput };
