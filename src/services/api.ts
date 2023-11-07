import axios from 'axios'
import { ToastShowParams } from 'react-native-toast-message'

const my_ip = '192.168.1.110'

const api = axios.create({
  baseURL: `http://${my_ip}:3000`,
})

const LoginEfetivo = async () => {
  try {
  } catch (error) {}
}

const LoginUsuario = async () => {
  try {
  } catch (error) {}
}

const LoginVisitante = async () => {
  try {
  } catch (error) {}
}

export { LoginEfetivo, LoginVisitante, LoginUsuario }
