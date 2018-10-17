import axios from 'axios';

export function contentsList(u_type, u_chapter) {
    return axios.post('/contents/list', {
        type:u_type,
        chapter:u_chapter
    });
}

export function lectureAuth(u_id) {
    return axios.post('/reqLecture/auth', {
        id:u_id
    });
}