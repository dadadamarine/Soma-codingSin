import axios from 'axios';

export function contentWrite(u_type, u_title, u_content, u_chapter, u_quiz) {
    return axios.post('/admin/contentWrite', {
        type: u_type,
        title: u_title,
        content: u_content,
        chapter: u_chapter,
        quiz: u_quiz
    });
}