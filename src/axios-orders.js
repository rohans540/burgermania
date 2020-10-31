import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://burgermania-c9d80.firebaseio.com/'
});

export default axiosInstance;