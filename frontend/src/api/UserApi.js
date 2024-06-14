import axios from 'axios';

const getUser = async (id) => {
    try {
        const response = await axios.get(`http://127.0.0.1:8000/api/users/${id}`);
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

const checkLogin = async (username, password) => {
    try {
        const response = await axios.post(`http://127.0.0.1:8000/api/users/login/`, { username, password }); // Note the trailing slash
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
};

export default { checkLogin, getUser };
