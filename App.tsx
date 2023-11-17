import React from 'react'
import { StatusBar } from 'expo-status-bar'
import Toast from 'react-native-toast-message'
import Routes from './src/routes'
import Auth from './src/context/Auth'

export default function App() {
  return (
    <Auth>
      <Routes />
      <Toast topOffset={56} />
      <StatusBar hidden={false} />
    </Auth>
  )
}
