import axios from 'axios'

const apiBackend = axios.create({
  baseURL: 'http://10.150.132.124:3000',
})

export default apiBackend
