import axios from 'axios'


export async function getAllUsers() {

    const response = await axios.get('/api/users');
    return response.data;
}

export async function createUser(data) {
    const response = await axios.post(`/api/user/register`, data);
    return response;
}

export async function login(data) {
    const response = await axios.post(`/api/user/login`, data);
    if (response.status === 200){
        console.log(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        localStorage.setItem("accountId", response.data.userId)
    }
    if (response.status === 400){
        console.log("login failed");
        this.$alert(res.data);
    }
    return response;
}

export async function logOut() {
    // xoá user từ local storage để log out
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('accountId');
    await axios.post('/api/user/logout');
}

export async function getUser() {
    const response = await axios.get('/api/user', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

