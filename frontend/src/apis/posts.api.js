import axios from 'axios';

const honeypotURL = "http://localhost:9000";

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

        const response = await axios.get(`${honeypotURL}/api/posts/`, config);
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
        const response = await axios.post(`${honeypotURL}/api/posts/`, post);
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
