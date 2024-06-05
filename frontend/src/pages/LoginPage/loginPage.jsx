//jsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import { LoginForm, ColorButton, Screen, Title ,Logo} from './LoginPage.styled';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function onSubmit(event) {
        event.preventDefault();
        
        console.log('username:', username);
        console.log('password:', password);
    }

    return (
        <Screen>
            <Logo src="../../../assets/Logo.png" alt="honey logo" />
            <Title>Honey Blog</Title>
            <form onSubmit={onSubmit}>
                <LoginForm>
                    <TextField
                        required
                        id="outlined-username-input"
                        label="Username"
                        name="username"
                        type="text"
                        autoComplete="current-username"
                        className="custom-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        className="custom-input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <ColorButton type="submit" variant="contained" color="primary">
                        Login
                    </ColorButton>
                </LoginForm>
            </form>
        </Screen>
    );
}
