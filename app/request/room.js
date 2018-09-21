import axios from 'axios';

export function contentsList(u_type) {
    return axios.post('/contents/list', {
        typey:u_type
    });
}