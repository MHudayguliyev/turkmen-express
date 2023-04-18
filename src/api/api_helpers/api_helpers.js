import axiosInstance from "../axiosInstance";

export async function get(url, config = {}) {
    return axiosInstance.get(url, {...config}).then(response => response.data)
}
export async function post(url, data, config = {}) {
    return axiosInstance.post(url, {...data}, {...config}).then(response => response.data)
}
export async function put(url, data, config = {}) {
    return axiosInstance.put(url, {...data}, {...config}).then(response => response.data)
}
export async function del(url, config = {}) {
    return axiosInstance.delete(url, {...config}).then(response => response.data)
}