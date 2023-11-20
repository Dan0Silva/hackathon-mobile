import axios from 'axios'

const apiBackend = axios.create({
  baseURL: 'http://10.50.0.147:3000',
})

export default apiBackend
