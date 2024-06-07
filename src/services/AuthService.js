import axios from 'axios';

axios.defaults.headers.common['Origin'] = 'http://localhost:8080';


class AuthService {

    getCurrentUser() {
        return axios.get(
            'http://localhost:8080/api/v1/auth/getUser'
        )
    }

    login() {
        return axios.post(
            'http://localhost:8080/api/v1/auth/login',
            {
                "username": "alopez",
                "password": "Alex280404#"
            }
        )
    }

    register(data) {
        return axios.post(
            'http://localhost:8080/api/v1/auth/register',
            data
        )
    }

    logout(data) {
        return axios.post(
            'http://localhost:8080/api/v1/auth/logout',
            data
        )
    }



}

export default new AuthService();