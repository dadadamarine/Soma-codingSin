import axios from 'axios';

export function lectureRegister(u_title, u_description, u_schedule, u_price) {
    return axios.post('/reqLecture/register', {
        title:u_title,
        description:u_description,
        schedule:u_schedule,
        price:u_price
    });
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

export function contentsList(type) {
    return axios.post('/reqLecture/ContentsList', {
        category:type
    });
}