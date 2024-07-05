// import axios from 'axios';

// const localURL = "http://localhost:5000";

// export const userLogin = async (userInfo) => {
//     return await axios.post(`${localURL}/api/users/login/`, userInfo);
// }

// export const getUser = async (userInfo) => {
//     return await axios.post(`${localURL}/api/users`, userInfo);
// }

import axios from 'axios';

const localURL = "http://localhost:8000";

export const getPosts = async () => {
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

        const response = await axios.get(`${localURL}/api/posts/`, config);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to get posts: ${error}`);
        throw error;
    }
}
