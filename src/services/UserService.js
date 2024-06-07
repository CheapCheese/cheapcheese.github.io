import axios from 'axios';

class UserService {

    getAllUsers() {
        return axios.get(
            'http://20.224.64.191:8080/api/v1/users/getAllUsers'
        );
    }

    saveUser(data) {
        return axios.post(
            'http://20.224.64.191:8080/api/v1/users/saveUser',
            data
        )
    }

    deleteUser(data) {
        return axios.post(
            'http://20.224.64.191:8080/api/v1/users/deleteUser',
            data
        )
    }
}

export default new UserService();