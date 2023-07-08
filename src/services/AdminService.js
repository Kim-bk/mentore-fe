import axios from 'axios'
import {refreshTokenIfNeeded} from "@/services/RefreshTokenService"
import router from "@/router";


export async function getPosts() {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.get('/api/admin/post',  {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
        return response;
    }
    catch (error) {
        if (error.response && error.response.status === 403) {
          // Redirect to the custom 403 error page
          router.push({ path: "/403" });
        }
    }
}

export async function acceptPost(payload) {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.post('/api/admin/post', payload, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
        return response;
    }catch (error) {
        if (error.response && error.response.status === 403) {
          // Redirect to the custom 403 error page
          router.push({ path: "/403" });
        }
    }

}
export async function getWorkshops() {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.get('/api/workshop/admin', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
        return response;
    }
    catch (error) {
        if (error.response && error.response.status === 403) {
          // Redirect to the custom 403 error page
          router.push({ path: "/403" });
        }
    }
}

export async function createWorkshop(payload) {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.post('/api/workshop' + payload, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
        return response;
    }
    catch (error) {
        if (error.response && error.response.status === 403) {
          // Redirect to the custom 403 error page
          router.push({ path: "/403" });
        }
    }
}

export async function updateWorkshop(payload) {
    try
    {
    // xoá user từ local storage để log out
    refreshTokenIfNeeded()
    const response = await axios.put('/api/workshop' + payload, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response.data;
    }
    catch (error) {
        if (error.response && error.response.status === 403) {
          // Redirect to the custom 403 error page
          router.push({ path: "/403" });
        }
    }
}

export async function deleteWorkshop(id) {
    try
    {
        refreshTokenIfNeeded()
        const response = await axios.delete('/api/workshop' + id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
        return response;
    }
    catch (error) {
        if (error.response && error.response.status === 403) {
          // Redirect to the custom 403 error page
          router.push({ path: "/403" });
        }
    }
}

export async function login(data) {
    const response = await axios.post(`/api/admin/login`, data);
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
  

