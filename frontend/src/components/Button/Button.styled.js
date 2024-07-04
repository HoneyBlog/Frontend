import styled from "styled-components";


export const ButtonContainer = styled.button`
    background-color: #bea6d8;
    color: #FFFFFF;
    border-radius: 30px;
    font-weight: 600;
    border: none;
    cursor: pointer;
    transition: 0.2s;
    font-size: ${(props) => props.fontSize || '1.3rem'};
    padding: ${(props) => props.paddingUpDown || '15px'} ${(props) => props.paddingRightLeft || '40px'}; 

    &:hover {
        background-color: #FFFFFF;
        color: #bea6d8;
    }
`;
