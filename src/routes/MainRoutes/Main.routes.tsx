import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Home from '../../screens/Home'

import QRCodeScanner from '../../screens/QRCodeScanner'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  home: undefined
  qrcode_scanner: undefined
}

export type StackTypesAuth = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'home'} component={Home} />
      <Stack.Screen name={'qrcode_scanner'} component={QRCodeScanner} />
    </Stack.Navigator>
  )
}
