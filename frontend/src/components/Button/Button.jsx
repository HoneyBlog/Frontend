import React from 'react'
import {ButtonContainer} from './Button.styled';


const Button = ({text}) => {

    return (
        <ButtonContainer>{text}</ButtonContainer>
    )
}

export default Button;