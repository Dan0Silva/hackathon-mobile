import axios from 'axios'

const apiBackend = axios.create({
  baseURL: 'http://192.168.1.110:3000',
})

export default apiBackend
