// src/components/Search/Search.styled.js
import styled from 'styled-components';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 50px;
    background-color: #3D3347; 
    padding-left: 15px;

    & fieldset {
      border: none; 
    }
    &:hover fieldset {
      border: none; 
    }
    &.Mui-focused fieldset {
      border: none; 
    }
  }
  & .MuiInputBase-input {
    color: #E0E0E0; 
  }

  & .MuiInputBase-root {
    display: flex;
    align-items: center;
  }

  & .MuiSvgIcon-root {
    color: #E0E0E0; 
    margin-right: 10px;
  }
`;
