import axios from 'axios'

const httpRequest = axios.create({
    baseURL:"https://mentore.azurewebsites.net",
});

export default httpRequest;
  

