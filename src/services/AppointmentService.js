import axios from 'axios'

export async function createAppointment(data) {
    const response = await axios.Appointment('/api/appointment', data, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }});
    return response;
}

export async function getUserAppointments() {
    const response = await axios.get('/api/appointment/user', {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

export async function deleteAppointment(id) {
    const response = await axios.delete('/api/appointment/'+id, {headers: { 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') }} );
    return response;
}

export async function getMentorAppointments(id) {
    const response = await axios.get('/api/appointment/mentor/'+id);
    return response;
}
