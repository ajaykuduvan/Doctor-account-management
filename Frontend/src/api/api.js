import axios from 'axios';

export const register = async (userData) => {
    return await axios.post('/api/auth/register', userData);
};

export const login = async (userData) => {
    return await axios.post('/api/auth/login', userData);
};

export const uploadPDF = async (formData) => {
    return await axios.post('/api/pdf/upload', formData);
};

export const linkDoctorPatient = async (data) => {
    return await axios.post('/api/link', data);
};
