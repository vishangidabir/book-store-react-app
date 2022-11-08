import axios from "axios";

const UserId = localStorage.getItem('Authorization');
const id = JSON.parse(JSON.stringify(UserId));
console.log(UserId);
const token = localStorage.getItem('Token')

class CartService {
  baseUrl = "http://localhost:8080/cartdetails";

  addBookToCart(data) {
    return axios.post(`${this.baseUrl}/add`, data, { params: { token: token } });
  }

  getCartDetails() {
    return axios.get(`${this.baseUrl}/get/${id} `);
  }

  deleteCartItem(id) {
    return axios.delete(`${this.baseUrl}/remove/${id}`, { params: { token: token } });
  }

  emptyCart() {
    return axios.delete(`${this.baseUrl}/empty`, { params: { token: token } });
  }

  updateQuantity(cartId,data) {
    return axios.put(`${this.baseUrl}/updateQuantity/${cartId}`, data, { params: { token: token } });
  }



}

export default new CartService();