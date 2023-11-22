import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Home from '../../screens/Home'

import HomeEfetivo from '../../screens/HomeEfetivo'
import HomeUsuario from '../../screens/HomeUsuario'
import HomeVisitante from '../../screens/HomeVisitante'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  home: undefined
  home_usuario: undefined
  home_efetivo: undefined
  home_visitante: undefined
}

export type StackTypesAuth = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'home'} component={Home} />
      <Stack.Screen name={'home_usuario'} component={HomeUsuario} />
      <Stack.Screen name={'home_efetivo'} component={HomeEfetivo} />
      <Stack.Screen name={'home_visitante'} component={HomeVisitante} />
    </Stack.Navigator>
  )
}
