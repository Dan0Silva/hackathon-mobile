import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled.TouchableOpacity`
  width: 170px;
  height: 170px;
  border-radius: 20px;
  justify-content: center;
  padding: 15px;
  elevation: 5;
`

export const Icon = styled(FontAwesome5)``

export const Title = styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: rgb(255, 255, 255);
`
