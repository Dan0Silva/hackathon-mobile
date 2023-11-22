import { PropsWithChildren, createContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import apiBackend from '../services/backend'

import Toast from 'react-native-toast-message'

interface IAuth {
  user: any
  visiter: any
  staff: any
  signInUsuario: (usuario: string, senha: string) => void
  signInVisitante: (email: string, senha: string) => void
  signInEfetivo: (email: string, senha: string) => void
  signOut: Function
  auth: boolean
  error: string
}

export const AuthContext = createContext<IAuth>({} as IAuth)

const showSuccessLoginToast = () => {
  Toast.show({
    type: 'success',
    text1: 'Sucesso!',
    text2: 'Login realizado com sucesso',
  })
}

export default ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState({})
  const [visiter, setVisiter] = useState({})
  const [staff, setStaff] = useState({})
  const [error, setError] = useState<string>('')
  const [auth, setAuth] = useState(false)

  async function saveJwt(token: string) {
    try {
      await AsyncStorage.setItem('jwt_token/sca-codafofo', token)
    } catch (e) {
      console.error(e)
    }
  }

  async function removeJwt(async_key: string) {
    try {
      await AsyncStorage.removeItem(async_key)
    } catch (e) {
      console.error(e)
    }
  }

  async function signInVisitante(email: string, senha: string) {
    try {
      const response = await apiBackend.post('/visitanteLogin', {
        email,
        senha,
      })

      if (response.status == 200) {
        setVisiter(response.data.entity)
        saveJwt(response.data.jwtToken)
        showSuccessLoginToast()
        setAuth(true)
      }
    } catch (e: any) {
      if (e.response) {
        setError(e.response.data.mensagem)
      }
    }
  }

  async function signInEfetivo(email: string, senha: string) {
    try {
      const response = await apiBackend.post('/efetivoLogin', {
        email,
        senha,
      })

      if (response.status == 200) {
        setStaff(response.data.entity)
        saveJwt(response.data.jwtToken)
        showSuccessLoginToast()
        setAuth(true)
      }
    } catch (e: any) {
      if (e.response) {
        setError(e.response.data.mensagem)
      }
    }
  }

  async function signInUsuario(usuario: string, senha: string) {
    try {
      const response = await apiBackend.post('/usuarioLogin', {
        usuario,
        senha,
      })
      if (response.status == 200) {
        setUser(response.data.entity)
        saveJwt(response.data.jwtToken)
        showSuccessLoginToast()
        setAuth(true)
      }
    } catch (e: any) {
      if (e.response) {
        setError(e.response.data.mensagem)
      }
    }
  }

  function signOut() {
    setUser({})
    setAuth(false)
    removeJwt('jwt_token/sca-codafofo')
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        visiter,
        staff,
        error,
        signInUsuario,
        signInVisitante,
        signInEfetivo,
        signOut,
        auth,
      }}>
      {children}
    </AuthContext.Provider>
  )
}
