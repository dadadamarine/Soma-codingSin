import axios from 'axios';

export function contentWrite(u_type, u_title, u_content, u_chapter) {
    const hash = CryptoJS.SHA256(u_pw); 
    return axios.post('/admin/contentWrite', {
        id: u_type,
        pw: u_title,
        name: u_content,
        email: u_chapter
    });
}