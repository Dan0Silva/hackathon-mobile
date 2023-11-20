import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'

import Home from '../../screens/Home'

const Stack = createNativeStackNavigator()

type StackNavigation = {
  home: undefined
}

export type StackTypes = NativeStackNavigationProp<StackNavigation>

export default () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={'home'} component={Home} />
    </Stack.Navigator>
  )
}
