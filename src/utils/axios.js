import axios from 'axios';
import { baseUrl } from './constants';

const instance = axios.create({
    baseURL: baseUrl // Corrected to baseURL
});

export default instance