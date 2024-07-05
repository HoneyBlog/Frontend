import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Screen, Logo, Title, LoginForm } from './LoginPage.styled';
import { userLogin } from '../../apis/users.api';
import Button from '../../components/Button/Button';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

const errFormMsg = "One of the requirements is not met.";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    if (localStorage.getItem('token')) {
        window.location.href = '/';
    }

    const verfiyForm = () => {  
        if (username === '' || password === '') {
            setError(errFormMsg);
            return false;
        }

        
    
    }

    async function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            const response = await userLogin(username, password);
            if(response) {
                window.location.href = '/';
            }
            console.log('Response: ', response);
            navigate('/');
        } catch (error) {
            console.error('Failed to login:', error);
            setError(errFormMsg);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <Screen>
            <Logo src="../../../assets/Logo.png" alt="honey logo" />
            <Title>Honey Blog</Title>
            {error && <Alert severity="error" variant="filled">{error}</Alert>}
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
                    <Button type="submit" variant="contained" text={isLoading ? 'Logging in...' : 'Login'} disabled={isLoading} />
                </LoginForm>
            </form>
        </Screen>
    );
}