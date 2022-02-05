import axios from 'axios'

const baseUrl = 'https://api.github.com'

// axios.defaults.baseURL = baseUrl

export const makeRequest=({
    url, method = 'get', data={}, headers = {}, baseURL = baseUrl
}) => axios({
    url,
    method,
    data,
    headers,
    baseURL
})