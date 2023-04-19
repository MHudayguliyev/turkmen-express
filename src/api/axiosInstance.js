import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://turkmenexpress.com.tm/api/'
})

export default axiosInstance