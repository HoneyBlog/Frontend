// src/components/Search/Search.styled.js
import styled from 'styled-components';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: #fff;
    }
    &:hover fieldset {
      border-color: #fff;
    }
    &.Mui-focused fieldset {
      border-color: #fff;
    }
  }
  & .MuiInputBase-input {
    color: #fff;
  }
`;
