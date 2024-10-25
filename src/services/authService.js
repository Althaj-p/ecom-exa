import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/auth';  // Change this to match your backend URL

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register/`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login/`, userData);
        localStorage.setItem('accessToken', response.data.access);  // Store token
        localStorage.setItem('refreshToken', response.data.refresh);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
