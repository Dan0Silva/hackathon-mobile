import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Home from '../../screens/Home'

import QRCodeScanner from '../../screens/QRCodeScanner'
import RegisterStaffAccess from '../../screens/RegisterStaffAccess'
import RegisterVisiterAccess from '../../screens/RegisterVisiterAccess'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  home: undefined
  qrcode_scanner: undefined
  access_staff: undefined
  access_visiter: undefined
}

export type StackTypesAuth = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'home'} component={Home} />
      <Stack.Screen name={'qrcode_scanner'} component={QRCodeScanner} />
      <Stack.Screen name={'access_staff'} component={RegisterStaffAccess} />
      <Stack.Screen name={'access_visiter'} component={RegisterVisiterAccess} />
    </Stack.Navigator>
  )
}
