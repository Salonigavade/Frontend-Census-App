import {axios} from 'axios';

const BASE_URL = "http://localhost:8080/springfox/api/";

class UserService {
    registerUser(user){
        return axios.post(BASE_URL + "user/register-user", user);
    }



}

export default new UserService();