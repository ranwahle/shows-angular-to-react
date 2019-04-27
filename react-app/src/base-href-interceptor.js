import axios from 'axios';


const BASE_URL = 'http://api.tvmaze.com';


axios.interceptors.request.use(config => {
    config.url = `${BASE_URL}${config.url}`;
    return config;
})

