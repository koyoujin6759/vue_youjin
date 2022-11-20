import axios from 'axios';

//1. http request & response 와 관련된 기본설정
const config = {
    baseUrl: "https://api.hnpwa.com/v0/"
}

//2. api 함수 정리(구조화)

function basePost() {
    return axios.post(`${config.baseUrl}news.json`)
}
function getDataApi() {
    return axios.get(`${config.baseUrl}news.json`)
}

function deleteApi(id) {
    return axios.delete(`${config.baseUrl}news.json/${id}`)
}

export {
    getDataApi,
    basePost,
    deleteApi
}