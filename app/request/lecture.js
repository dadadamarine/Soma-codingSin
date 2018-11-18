import axios from 'axios';

export function lectureRegister(u_img, u_title, u_description, u_schedule, u_price, u_type) {
    const formData = new FormData()
    formData.append('imgFile', u_img, u_img.name)
    formData.append('title', u_title)
    formData.append('description', u_description)
    formData.append('schedule', u_schedule)
    formData.append('price', u_price)
    formData.append('type', u_type)
    return axios.post('/reqLecture/register', formData);
}

export function lectureList() {
    return axios.post('/reqLecture/list');
}
export function myLectureList() {
    return axios.post('/reqLecture/myList');
}

export function lecture(id) {
    return axios.post('/reqLecture/lecture', {
        _id:id
    });
}

export function getType() {
    return axios.post('/reqLecture/type');
}

export function lectureRequest(id) {
    return axios.post('/reqLecture/lectureRequest', {
        _id:id
    });
}
