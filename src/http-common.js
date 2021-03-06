import axios from "axios";
import {useContext} from "react";
import {LoginContext} from "./context/LoginContext";

export const http = axios.create({
    baseURL: "http://localhost:8080/api/",
    headers: {
        "Content-type": "application/json",
        // "Authorization": localStorage.getItem('token')
    }
});

http.interceptors.request.use((request) => {
    if (request.url.includes('employees')) {
        request.headers.Authorization = localStorage.getItem('token');
    }
    return request;
});

export default http;

