import { NavigationContainer } from '@react-navigation/native'
import { Authentication } from '../context/Authentication'

export default () => {
  return (
    <NavigationContainer>
      <Authentication />
    </NavigationContainer>
  )
}
