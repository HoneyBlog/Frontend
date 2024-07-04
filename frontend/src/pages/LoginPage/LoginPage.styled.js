import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: #2E2E2E;
`;

export const Logo = styled.img`
    width: 125px;
    margin-bottom: 1rem;
`;

export const Title = styled.h1`
    margin-bottom: 1rem;
    color: #ffffff;
`;

export const LoginForm = styled(Box)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .MuiTextField-root {
        margin: 0.8rem;
        width: 35vw;
    }

    .custom-input .MuiInputLabel-root {
        color: #fff;
    }

    .custom-input .MuiInputLabel-root.Mui-focused {
        color: #fff;
    }

    .custom-input .MuiOutlinedInput-root {
        fieldset {
            border-color: #A594B6;
            border-width: 1.5px;
        }
    }

    .custom-input .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: #856a91;
    }

    .custom-input .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #856a91;
    }

    .custom-input .MuiInputBase-input {
        color: #fff;
    }
`;

export const ColorButton = styled(Button)`
    background-color: #A594B6 !important;

    &:hover {
        background-color: #856a91 !important;
    }
`;

