import { FontAwesome5 } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 14px;
`

export const Title = styled.Text`
  font-size: 15px;
  font-weight: 600;
  margin-left: 6px;
`

export const InputContainer = styled.View`
  width: 100%;
  height: 48px;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  margin-top: 6px;
  elevation: 5;
  padding-left: 20px;
  padding-right: 20px;
  background-color: rgb(255, 255, 255);
`

export const ButtonIcon = styled.TouchableOpacity``

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  font-size: 16px;
`

export const Icon = styled(FontAwesome5)``
