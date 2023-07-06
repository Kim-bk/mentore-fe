import axios from 'axios'
import {refreshTokenIfNeeded} from "@/services/RefreshTokenService"

export async function createAppointment(data) {
    refreshTokenIfNeeded()
    const response = await axios.post('/api/appointment', data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function getUserAppointments() {
    refreshTokenIfNeeded()
    const response = await axios.get('/api/appointment/user', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

export async function deleteAppointment(id) {
    refreshTokenIfNeeded()
    const response = await axios.delete('/api/appointment/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

export async function getAppointmentById(id) {
    refreshTokenIfNeeded()
    const response = await axios.get('/api/appointment/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function updateAppointment(payload, id) {
    refreshTokenIfNeeded()
    const response = await axios.put('/api/appointment/'+id, payload, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function getMentorAppointments(id) {
    const response = await axios.get('/api/appointment/mentor/'+id);
    return response;
}
