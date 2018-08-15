import axios from 'axios';
import CryptoJS from 'crypto-js';

export function login(u_id, u_pw) {
    const hash = CryptoJS.SHA256(u_pw); 
    return axios.post('/reqUser/login', {
        id: u_id,
        pw: String(hash)
    });
}