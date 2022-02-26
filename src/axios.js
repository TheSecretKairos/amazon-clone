import axios from "axios";

const instance = axios.create ({
    baseURL: '...' //the API (cloud funciton) URL
});

export default instance;