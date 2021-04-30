import axios from "axios";

const BASE_URL = "http://localhost:8080/springfox/api/";

class UserService {
  registerUser(user) {
    return axios.post(BASE_URL + "user/register-user", user);
  }

  signIn(login) {
    return axios.post(BASE_URL + "process/login", login);
  }

  logout(logout) {
    return axios.post(BASE_URL + "process/logout", logout);
  }

  forgetPassword(user) {
    return axios.post(BASE_URL + "process/forget-password", user);
  }

  showUser() {
    return axios.get(BASE_URL + "user/show-users");
  }
  getUserById(userId) {
    return axios.get(BASE_URL + "user/" + userId);
  }
}

export default new UserService();
