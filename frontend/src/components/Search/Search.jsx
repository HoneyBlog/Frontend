// src/components/Search/Search.js
import React from 'react';
import { StyledTextField } from './Search.styled';

const Search = ({ placeholder, handleChange }) => {
    return (
        <StyledTextField
            variant="outlined"
            placeholder={placeholder}
            onChange={handleChange}
            fullWidth
        />
    );
};

export default Search;
