import axios from 'axios'

export async function createPost(data) {
    const response = await axios.post('/api/post', data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function updatePost(data) {
    const response = await axios.put(`/api/post`, data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function getUserPosts() {
    const response = await axios.get('/api/post/user', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

export async function deletePost(id) {
    const response = await axios.delete('/api/post/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

export async function getAllPost() {
    const response = await axios.get('/api/post');
    return response;
}

export async function getPostById(id) {
    const response = await axios.get('/api/post/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}
