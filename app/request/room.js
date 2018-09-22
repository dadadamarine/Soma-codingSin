import axios from 'axios';

export function contentsList(u_type, u_chapter) {
    return axios.post('/contents/list', {
        type:u_type,
        chapter:u_chapter
    });
}