import axios from "axios";

const id=localStorage.getItem('Authorization')
const userId = JSON.parse(id);
const token=localStorage.getItem('Token')
class UserService {
    baseUrl ="http://localhost:8080/userdetails";

    addUser(data) {
        return axios.post(`${this.baseUrl}/register`, data);
      } 

      getAllBooks() {
        return axios.get(`${this.baseUrl}/retrieveAll`);
      }

      getUserById(userid) {
        return axios.get(`${this.baseUrl}/get/${userid}`,{params:{token: token}});
      }

      getUserEmailId(data) {
        return axios.get(`${this.baseUrl}/retrieveByEmail`, data);
      }

    userLogin(data) {
      return axios.post(`${this.baseUrl}/login`,data);
    }

}

export default new UserService();