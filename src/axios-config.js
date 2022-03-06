import axios from 'axios'

export const HTTP = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://cross-up.herokuapp.com/' :'http://127.0.0.1:4000/',
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
    }
})