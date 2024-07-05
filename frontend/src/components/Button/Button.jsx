import React from 'react';
import { ButtonContainer } from './Button.styled';

const Button = ({ text, paddingUpDown, paddingRightLeft, fontSize, onClick }) => {
  return (
    <ButtonContainer 
      fontSize={fontSize} 
      paddingUpDown={paddingUpDown} 
      paddingRightLeft={paddingRightLeft}
      onClick={onClick}
    >
      {text}
    </ButtonContainer>
  );
};

export default Button;
