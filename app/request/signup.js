import axios from 'axios';
import CryptoJS from 'crypto-js';

export function signup(u_id, u_pw, u_name, u_email, u_phone) {
    const hash = CryptoJS.SHA256(u_pw); 
    return axios.post('/reqUser/signup', {
        id: u_id,
        pw: String(hash),
        name: u_name,
        email: u_email,
        phone: u_phone
    });
}