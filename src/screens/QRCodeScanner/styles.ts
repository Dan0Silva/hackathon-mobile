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
  width: ${width - 30}px;
  height: ${width - 30}px;
  margin-top: 100px;
  background-color: #d0d0d0;
  overflow: hidden;
`
