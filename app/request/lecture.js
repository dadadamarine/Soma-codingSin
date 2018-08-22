import axios from 'axios';

export function lectureRegister(u_title, u_description, u_schedule, u_price) {
    return axios.post('/lecture/register', {
        title:u_title,
        description:u_description,
        schedule:u_schedule,
        price:u_price
    });
}

export function lectureList() {
    return axios.post('/lecture/list');
}

export function getType() {
    return axios.post('/lecture/type');
}