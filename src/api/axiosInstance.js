import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: '{{base_url}}/api/'
})

export default axiosInstance