import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://turkmenexpress.com.tm/api/'
})

export default axiosInstance