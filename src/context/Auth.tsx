import { PropsWithChildren, createContext, useState } from 'react'
import apiBackend from '../services/backend'

interface IAuth {
  user: any
  signIn: (usuario: string, senha: string) => void
  auth: boolean
  error: string
}

export const AuthContext = createContext<IAuth>({} as IAuth)

export default ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState({})
  const [error, setError] = useState<string>('')
  const [auth, setAuth] = useState(false)

  async function signIn(usuario: string, senha: string) {
    try {
      const response = await apiBackend.post('/usuarioLogin', {
        usuario,
        senha,
      })
      console.log(response.data.entity)
      if (response.status == 200) {
        setUser(response.data.entity)
        setAuth(true)
      }
    } catch (e: any) {
      if (e.response) {
        setError(e.response.data.mensagem)
      }
    }
  }

  return (
    <AuthContext.Provider value={{ user, error, signIn, auth }}>
      {children}
    </AuthContext.Provider>
  )
}
