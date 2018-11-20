import axios from 'axios';

export function getTeachers() {
    return axios.post('/reqUser/getTeachers');
}

export function getTeacher(u_id) {
    return axios.post('/reqUser/getTeacher', {
        id:u_id
    });
}