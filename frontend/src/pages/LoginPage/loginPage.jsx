import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {userLogin} from '../../apis/users.api'
import './LoginPage.styled.css'

export default function LoginPage() {
    return (
        <div className='screen'>
            <img src='../../../assets/Logo.png' alt='honey logo' />
            <h1>Honey Blog</h1>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="outlined-required"
                        label="Username"
                        defaultValue="Username"
                        className='input'
                    />
                    <TextField
                        required
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className='input'
                    />
                </div>
            </Box>
        </div>
    )
}
