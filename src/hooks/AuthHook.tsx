import { AuthContext } from '../context/Auth'
import { useContext } from 'react'

export function UseAuth() {
  const context = useContext(AuthContext)

  return context
}
