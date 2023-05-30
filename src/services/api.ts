import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 8000,
    params: {
        api_key: "4c9551e8bdc45cf7327e384cbcbdcb1f",
        language: "pt-BR",
        include_adult: false,
    },
});

export default api;