import axios from 'axios'

const apiBackend = axios.create({
  baseURL: 'http://10.160.95.167:3000',
})

export default apiBackend
