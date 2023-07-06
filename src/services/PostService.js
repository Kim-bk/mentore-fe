import axios from 'axios'
import {refreshTokenIfNeeded} from "@/services/RefreshTokenService"

export async function createPost(data) {
    refreshTokenIfNeeded()
    const response = await axios.post('/api/post', data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function updatePost(data, id) {
    refreshTokenIfNeeded()
    const response = await axios.put(`/api/post/`+id, data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function getUserPosts() {
    refreshTokenIfNeeded()
    const response = await axios.get('/api/post/user', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

export async function deletePost(id) {
    refreshTokenIfNeeded()
    const response = await axios.delete('/api/post/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

export async function getAllPost() {
    const response = await axios.get('/api/post');
    return response;
}

export async function getPostById(id) {
    refreshTokenIfNeeded()
    const response = await axios.get('/api/post/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}
