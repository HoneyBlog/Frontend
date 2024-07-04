// src/components/Search/Search.jsx
import React from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { StyledTextField } from './Search.styled';

const Search = ({ placeholder, handleChange }) => {
  return (
    <StyledTextField
      variant="outlined"
      placeholder={placeholder}
      onChange={handleChange}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;
