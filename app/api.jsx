import axios from 'axios';

// TODO: Update this URL when your backend is available
const API_BASE_URL = 'http://YOUR_BACKEND_URL_HERE';

// Register a new user
export const registerUser = async (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};

// Login a user
export const loginUser = async (credentials) => {
  return axios.post(`${API_BASE_URL}/login`, credentials);
};

// Add more API functions as needed, e.g. fetchUser, updateProfile, etc. 