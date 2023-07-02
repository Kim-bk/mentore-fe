import axios from 'axios'
import {refreshTokenIfNeeded} from "@/services/RefreshTokenService"

export async function getWorkshops() {
    const response = await axios.get('/api/workshop');
    return response;
}

export async function getMenteeWorkshops() {
    refreshTokenIfNeeded();
    const response = await axios.get('/api/workshop/mentee', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function getMentorWorkshops() {
    refreshTokenIfNeeded();
    const response = await axios.get('/api/workshop/mentor', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function createWorkshop(data) {
    refreshTokenIfNeeded()
    const response = await axios.post('/api/workshop', data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function updateWorkshop(data, id) {
    refreshTokenIfNeeded()
    const response = await axios.put('/api/workshop/'+id, data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function getWorkshop(id) {
    refreshTokenIfNeeded()
    const response = await axios.get('/api/workshop/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function deleteWorkshop(id) {
    refreshTokenIfNeeded()
    const response = await axios.delete('/api/workshop/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}
