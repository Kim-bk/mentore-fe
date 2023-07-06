import axios from 'axios'
import {refreshTokenIfNeeded} from "@/services/RefreshTokenService"

export async function getMentors() {
    const response = await axios.get('/api/mentor');
    return response;
}

export async function getMentorById(mentorId) {
    const response = await axios.get('/api/mentor/profile/' + mentorId);
    return response;
}

export async function getMentorsByFilter(filter) {
    // xoá user từ local storage để log out
    const response = await axios.get('/api/mentor/filter/' + filter);
    return response.data;
}

export async function createMentor(data) {
    const response = await axios.post('/api/mentor/register', data);
    return response;
}

export async function deleteExp(id) {
    refreshTokenIfNeeded()
    const response = await axios.delete('/api/mentor/experience/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function createExp(payload) {
    refreshTokenIfNeeded()
    const response = await axios.post('/api/mentor/experience', payload, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

