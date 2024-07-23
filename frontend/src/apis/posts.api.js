import axios from 'axios';
import io from 'socket.io-client';

const honeypotURL = "http://localhost:8000";
const socketURL = "http://localhost:8002";  // WebSocket server URL
const socket = io(socketURL);

let createPostCallback = null; // Callback function to handle create post response

// Default callback function in case one isn't provided
const defaultCallback = (response) => {
    console.log('Callback response:', response);
};

export const getPosts = async (callback = defaultCallback) => {
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
            // Call the callback function with success response
            callback({ success: true, data: response.data });
            return response.data;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to get posts: ${error}`);
        // Call the callback function with error response
        callback({ success: false, error: error.message });
        throw error;
    }
};

export const createPost = async (post, callback = defaultCallback) => {
    try {
        createPostCallback = callback; // Set the callback function
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error("Token not found");
        }

        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.post(`${honeypotURL}/api/posts/`, post, config);
        if (response.status === 201 || response.status === 200) {
            // Call the callback function with success response
            callback({ success: true, data: response.data });
            return response.data;
        } else {
            throw new Error(`Error: ${response.status}`);
        }
    } catch (error) {
        console.error(`Failed to create post: ${error}`);
        // Call the callback function with error response
        callback({ success: false, error: error.message });
        throw error;
    }
};

// Handle responses via WebSocket
socket.on('response', (data) => {
    console.log('Response from honeypot:', data);
    if (createPostCallback) {
        createPostCallback({ success: true, data: JSON.parse(data.data) }); // Parse the JSON payload
        createPostCallback = null; // Reset the callback after use
    }
});
