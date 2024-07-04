import axios from 'axios';

const localURL = "http://localhost:8000";

export const userLogin = async (username, password) => {
    try {
        const response = await axios.post(`${localURL}/api/users/login/`, { username, password });
        if (response.status === 200) {
            const { token } = response.data;  // Assuming the API returns a 'token' field
            if (token) {
                localStorage.setItem('token', token);  // Store the token in localStorage
            }
            return true;  // Return the entire response data
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to login: ${error}`);
        throw error;
    }
}

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

        const response = await axios.get(`${localURL}/api/users/${id}`, config);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to get user: ${error}`);
        throw error;
    }
}