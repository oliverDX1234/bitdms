import axios from 'axios';

const instance = axios.create({
    timeout: 5000, // set a timeout for requests
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});

export default instance;
