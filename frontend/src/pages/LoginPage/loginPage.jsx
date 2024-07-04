import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await UserApi.checkLogin(username, password); 
            console.log('Response: ', response);
        } catch (error) {
            console.error('Failed to login:', error);
            setError('Invalid username or password.');
        } finally {
            setIsLoading(false);
        }
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
                    <ColorButton type="submit" variant="contained" color="primary" disabled={isLoading}>
                        {isLoading ? 'Logging in...' : 'Login'}
                    </ColorButton>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </LoginForm>
            </form>
        </Screen>
    );
}