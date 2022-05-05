import axios from "axios";

export const api = axios.create ({
    baseURL: "http://172.16.40.74:3333"
})