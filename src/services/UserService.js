import axios from 'axios';
axios.defaults.headers.common['Origin'] = 'https://20.224.64.191:8080';

class UserService {

    getAllUsers() {
        return axios.get(
            'https://20.224.64.191:8080/api/v1/users/getAllUsers'
        );
    }

    saveUser(data) {
        return axios.post(
            'https://20.224.64.191:8080/api/v1/users/saveUser',
            data
        )
    }

    deleteUser(data) {
        return axios.post(
            'https://20.224.64.191:8080/api/v1/users/deleteUser',
            data
        )
    }
}

export default new UserService();