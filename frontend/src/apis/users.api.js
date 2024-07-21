import axios from 'axios';
import io from 'socket.io-client';

const honeypotURL = "http://localhost:8000";
const socketURL = "http://localhost:8002";  // WebSocket server URL
const socket = io(socketURL);

export const userLogin = async (username, password) => {
    try {
        const response = await axios.post(`${honeypotURL}/api/users/login/`, { username, password });
        if (response.status === 200) {
            const { token, user_id } = response.data;
            if (token) {
                localStorage.setItem('token', token);
                localStorage.setItem('user_id', user_id);
            }
            return true;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to login: ${error}`);
        throw error;
    }
};

export const getUser = async (id) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error("Token not found");
        }
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.get(`${honeypotURL}/api/users/${id}`, config);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to get user: ${error}`);
        throw error;
    }
};

export const checkJWTtoken = async () => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error("Token not found");
        }
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.get(`${honeypotURL}/api/users/check-token/`, config);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to check JWT token: ${error}`);
        throw error;
    }
};

// New function to handle responses via WebSocket
socket.on('response', (data) => {
    console.log('Response from honeypot:', data);
});
