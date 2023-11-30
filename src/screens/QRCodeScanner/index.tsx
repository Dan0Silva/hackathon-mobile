import React, { useState, useEffect } from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner'
import { useNavigation } from '@react-navigation/native'
import { StackTypesAuth } from '../../routes/MainRoutes/Main.routes'

import * as S from './styles'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Toast from 'react-native-toast-message'
import { ActivityIndicator, Button } from 'react-native'

export default () => {
  const [hasPermission, setHasPermission] = useState(false)
  const [scanData, setScanData] = useState('')

  const navigator = useNavigation<StackTypesAuth>()

  const [loading, setLoading] = useState<boolean>(false)
  const handleBarCodeScanner = ({ type, data }: any) => {
    setLoading(true)
    setTimeout(() => {
      setScanData(data)
      setLoading(false)
    }, 5000)
    navigator.navigate('access_visiter') // alterar rota
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

      <S.ContainerScan>
        <BarCodeScanner
          style={{
            width: 400,
            height: 400,
          }}
          barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
          onBarCodeScanned={scanData ? undefined : handleBarCodeScanner}
        />
      </S.ContainerScan>

      <Button
        title="test"
        onPress={() => {
          navigator.navigate('access_staff')
        }}
      />

      {loading ? (
        <S.indicatorContainer>
          <ActivityIndicator color={'rgb(0,255,255)'} size={'large'} />
        </S.indicatorContainer>
      ) : null}
      <Footer />
    </S.Container>
  )
}
