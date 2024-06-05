import React from "react";

import "./inputBar.style.css";

export default function InputBar({ type, placeholder, value, onChange }) {
    return (
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    );
}