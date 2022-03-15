import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://62.171.143.248:7998'
})

export default instance