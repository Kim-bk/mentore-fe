import axios from 'axios'

export async function getLocations() {
    const response = await axios.get('/api/location');
    return response;
}

