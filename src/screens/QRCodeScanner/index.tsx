import React, { useState, useEffect } from 'react'

import { StyleSheet } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Toast from 'react-native-toast-message'

export default () => {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanData, setScanData] = useState('')

  const handleBarCodeScanner = ({ type, data }: any) => {
    setScanData(data)
    console.log(`[Data: ${data}, Type: ${type}]\n`)
  }

  useEffect(() => {
    const getPermission = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getPermission()
  }, [])

  if (!hasPermission) {
    Toast.show({
      type: 'info',
      text1: 'Permissão para utilizar camera não concedida!',
    })
  }

  return (
    <S.Container>
      <Header />

      <S.Title>Escaneie o QRCode</S.Title>

      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanner}
      />

      <Footer />
    </S.Container>
  )
}
