import React from 'react';
import { ButtonContainer } from './Button.styled';

const Button = ({ text, paddingUp, paddingRight, fontSize }) => {
  return (
    <ButtonContainer fontSize={fontSize} paddingUp={paddingUp} paddingRight={paddingRight} >
      {text}
    </ButtonContainer>
  );
};

export default Button;
