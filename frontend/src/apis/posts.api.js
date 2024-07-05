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