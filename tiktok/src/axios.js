import axios from 'axios';

const instance = axios.create({
    baseURL: "https://ukonuzoidx-mern-tiktok.herokuapp.com/",
});

export default instance;