import axios from "axios";

const instance = axios.create ({
    baseURL: "http://localhost:5001/clone-4dbed/us-central1/api" //the API (cloud funciton) URL
});

export default instance;