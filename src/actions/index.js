import axios from 'axios';

export const client = axios.create({
    baseUrl: "http://",
    headers: {
        "Content-Type": "application/json"
    }
})