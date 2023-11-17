import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import PreLogin from '../screens/PreLogin'

import LoginEfetivo from '../screens/LoginEfetivo'
import LoginUsuário from '../screens/LoginUsuario'
import LoginVisitante from '../screens/LoginVisitante'

import HomeUsuario from '../screens/HomeUsuario'
import HomeVisitante from '../screens/HomeVisitante'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  pre_login: undefined

  login_efetivo: undefined
  login_usuario: undefined
  login_visitante: undefined

  home_usuario: undefined
  home_visitante: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="pre_login">
      <Stack.Screen name={'pre_login'} component={PreLogin} />
      <Stack.Screen name={'login_efetivo'} component={LoginEfetivo} />
      <Stack.Screen name={'login_usuario'} component={LoginUsuário} />
      <Stack.Screen name={'login_visitante'} component={LoginVisitante} />
      <Stack.Screen name={'home_usuario'} component={HomeUsuario} />
      <Stack.Screen name={'home_visitante'} component={HomeVisitante} />
    </Stack.Navigator>
  )
}
