import axios from 'axios';

export function getTeachers() {
    return axios.post('/reqUser/getTeacher');
}