import axios from 'axios';
import CryptoJS from 'crypto-js';

export function editProfile(u_img, u_pw, u_phone) {
    const hash = CryptoJS.SHA256(u_pw);
    const formData = new FormData();
    formData.append('imgFile', u_img, u_img.name);
    formData.append('pw', hash);
    formData.append('phone', u_phone);
    return axios.post('/reqUser/editProfile', formData);
}
export function editProfileTeacher(u_img, u_oneline, u_project, u_history, u_stack) {
    const formData = new FormData();
    formData.append('imgFile', u_img, u_img.name);
    formData.append('oneline', u_oneline);
    formData.append('project', u_project);
    formData.append('history', u_history);
    formData.append('stack', u_stack);
    return axios.post('/reqUser/editProfileTeacher', formData);
}

export function getUser() {
    return axios.post('/reqUser/getUser');
}