import axios from 'axios'
import {refreshTokenIfNeeded} from "@/services/RefreshTokenService"

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
        localStorage.setItem("accountId", response.data.userId);
        localStorage.setItem("userGroup", response.data.userGroup)
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
    localStorage.removeItem('userGroup');
    await axios.post('/api/user/logout');
}

export async function getUser() {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.get('/api/user', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
        return response;
    }
    catch (error) {
        if (error.response && error.response.status === 401) {
        router.push({ path: "/" });
        }
    }
}

export async function getMenteeData() {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.get('/api/user/mentee', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
        return response;
    }
    catch (error) {
        if (error.response && error.response.status === 401) {
        router.push({ path: "/" });
        }
    }
}

export async function getMentorData() {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.get('/api/user/mentor', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
        return response;
    }
    catch (error) {
        if (error.response && error.response.status === 401) {
        router.push({ path: "/" });
        }
    }
}

export async function updateUser(payload) {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.put('/api/user', payload, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
        return response;
    }
    catch (error) {
        if (error.response && error.response.status === 401) {
        router.push({ path: "/" });
        }
    }
}

