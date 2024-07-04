import React from 'react';
import { ButtonContainer } from './Button.styled';

const Button = ({ text, paddingUpDown, paddingRightLeft, fontSize }) => {
  return (
    <ButtonContainer 
      $fontSize={fontSize} 
      $paddingUpDown={paddingUpDown} 
      $paddingRightLeft={paddingRightLeft}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
