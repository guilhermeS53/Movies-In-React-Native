import axios from 'axios'

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "a045d25ff1232597014a170c0a94b109",
        language: "pt-BR",
        include_adult: false,
    },
})