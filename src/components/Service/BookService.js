import axios from "axios";

class BookService {
    baseUrl ="http://localhost:8080/bookdetails";

    addBook(data) {
      return axios.post(`${this.baseUrl}/insert`, data);
    }
    
    getAllBooks() {
      return axios.get(`${this.baseUrl}/retrieveAllBooks`);
    }

    getBookById(id) {
      return axios.get(`${this.baseUrl}/retrieve/${id}`);
    }

    updateEmployee(id,data) {
      return axios.put(`${this.baseUrl}/update/${id}`, data);
    }

    deleteEmployee(id) {
      return axios.delete(`${this.baseUrl}/delete/${id}`);
    }sortByHigher

    sortByHigher() {
      return axios.get(`${this.baseUrl}/sort/asce`);
    }

    sortByLower() {
      return axios.get(`${this.baseUrl}/sort/desc`);
    }

    getCount(){
      return axios.get(`${this.baseUrl}/getbookscount`);
    }
}

export default new BookService();