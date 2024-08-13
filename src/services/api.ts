import axios from 'axios';

const API_URL = 'http://localhost:5000/users';

export const loginUser = async (email: string, password: string) => {
    const response = await axios.get(API_URL, {
        params: { email, password }
    });

    if (response.data.length > 0) {
        return response.data[0];
    } else {
        throw new Error('Invalid credentials');
    }
};

export const createUser = async (email: string, password: string) => {

    const checkResponse = await axios.get(API_URL, {
        params: { email }
    });

    if (checkResponse.data.length > 0) {
        throw new Error('Email already exists');
    }

    const response = await axios.post(API_URL, {
        email,
        password
    });

    return response.data;
};
