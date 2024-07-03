import axios from 'axios';

const localURL = "http://localhost:5000";

export const userLogin = async (userInfo) => {
    return await axios.post(`${localURL}/api/users/login/`, userInfo);
}

export const getUser = async (userInfo) => {
    return await axios.post(`${localURL}/api/users`, userInfo);
}