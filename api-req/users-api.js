import axios from "axios";


const instanceAxios = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
})


export const usersAPI = {
  getUsers() {
    return instanceAxios.get('users')
      .then(data => data.data)
  },

  getUser(id) {
    return instanceAxios.get(`users/${id}`)
      .then(data => data.data)
  }
}
