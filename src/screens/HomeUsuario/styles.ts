import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 28px;
  padding: 8px;
  font-weight: bold;
  text-align: center;
  color: rgb(23, 72, 88);
  margin-top: 30px;
  margin-bottom: 30px;
`

export const OptionsContainer = styled.View`
  width: 360px;
  height: 360px;
  align-items: center;
  justify-content: center;
`

export const OptionsRows = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`

export const Description = styled.Text`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
`

export const NumberContainer = styled.View`
  width: 100%;
  height: 80px;
  padding-left: 7px;
  padding-right: 7px;
  flex-direction: row;
`

export const NumberCard = styled.View`
  flex: 1;
  height: 100%;
  border-radius: 16px;
  margin: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 12px;
`

export const IconNumber = styled(FontAwesome5)``

export const TextNumber = styled.Text`
  font-size: 40px;
  font-weight: 400;
  color: rgb(255, 255, 255);
`
