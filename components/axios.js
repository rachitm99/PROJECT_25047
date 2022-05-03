import axios from 'axios'

const instance = axios.create({
    // baseURL : 'http://127.0.0.1:7998',
    baseURL : 'http://62.171.143.248:7998',
    headers: {

        'Content-Type': 'application/json'
    }
})

export default instance