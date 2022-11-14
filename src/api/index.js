import axios from 'axios';

//api 구조화
function getDataApi() {
    const baseUrl = 'https://jsonplaceholder.typicode.com/users';
    return axios.get(baseUrl)
}

// function postDataApi2() {
//     const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
//     return axios.post(baseUrl)
// }

function getDataApi2() {
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    return axios.get(baseUrl)
}

export {
    getDataApi,
    // postDataApi2,
    getDataApi2
}