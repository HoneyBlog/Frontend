// import axios from 'axios';

// const localURL = "http://localhost:5000";

// export const userLogin = async (userInfo) => {
//     return await axios.post(`${localURL}/api/users/login/`, userInfo);
// }

// export const getUser = async (userInfo) => {
//     return await axios.post(`${localURL}/api/users`, userInfo);
// }

import { common } from '@mui/material/colors';
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

export const createPost = async (post) => {
    try {
        const postReq = {
            content: post.content,
            comments_number: 0,
            likes_number: 0,
            author_id: localStorage.getItem('user_id')
        }

        const response = await axios.post(`${localURL}/api/posts/`, postReq);
        if (response.status === 201 || response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to create post: ${error}`);
        throw error;
    }
}