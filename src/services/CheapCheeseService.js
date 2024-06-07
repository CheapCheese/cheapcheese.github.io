import axios from 'axios';

const PRODUCTS_URL = "http://20.224.64.191:8080/api/v1/products";
const SUPERMARKETS_URL = "http://20.224.64.191:8080/api/v1/supermarkets";
const USERS_URL = "http://20.224.64.191:8080/api/v1/users";

class CheapCheeseService {

    getSupermarkets() {
        return axios.get(SUPERMARKETS_URL);
    }

    getProducts() {
        return axios.get(PRODUCTS_URL);
    }

    getAllUsers() {
        return axios.get(USERS_URL);
    }
}

export default new CheapCheeseService();