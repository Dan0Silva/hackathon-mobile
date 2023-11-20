import { UseAuth } from '../hooks/AuthHook'
import MainRoutes from '../routes/MainRoutes/Main.routes'
import UAuthRoutes from '../routes/UAuth/UAuth.routes'

export const Authentication = () => {
  const { auth } = UseAuth()
  return auth ? <MainRoutes /> : <UAuthRoutes />
}
