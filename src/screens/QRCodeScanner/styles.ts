import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

const width = Math.floor(Dimensions.get('window').width)

export const Container = styled.View`
  flex: 1;
  align-items: center;
  height: 100%;
`

export const Title = styled.Text`
  font-size: 40px;
  margin-top: 20px;
`

export const ContainerScan = styled.View`
  width: 300px;
  height: 300px;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  border-radius: 22px;
  background-color: #d0d0d0;
  overflow: hidden;
`

export const indicatorContainer = styled.View`
  position: absolute;
  z-index: 2;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: rgba(22, 22, 22, 0.5);
`
