import axios from 'axios';

export function active(code) {
    return axios.post('/reqUser/active', {
        code: code
    });
}