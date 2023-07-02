import axios from 'axios'

export async function getFields() {
    const response = await axios.get('/api/field');
    return response;
}

