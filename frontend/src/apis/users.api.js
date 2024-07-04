import axios from 'axios';

const localURL = "http://localhost:5000";

export const userLogin = async (username, password) => {
    try {
        const response = await axios.post(`${localURL}/api/users/login/`, { username, password });
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

export const getUser = async (id) => {
    try {
        const response = await axios.post(`${localURL}/api/users`, id);
        if (response.status === 200) {
            console.log(response.data);
            return response.data;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to login: ${error}`);
        throw error;
    }
}
