import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
  background-color: #d9d9d9;
`

export const IconContainer = styled.View`
  height: 160px;
  width: 160px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 60px;
  margin-bottom: 30px;
  elevation: 5;
`

export const Icon = styled(FontAwesome5)``

export const CardContainer = styled.View`
  width: 310px;
  height: max-content;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;
`

export const IntContainer = styled.View`
  background-color: rgb(255, 255, 255);
  padding-left: 20px;
  padding-right: 20px;
`

export const OptionsTitleContainer = styled.View`
  width: 100%;
  height: 38px;
  align-items: center;
  justify-content: center;
  background-color: rgb(9, 127, 226);
`

export const OptionsTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: rgb(255, 255, 255);
`

export const Name = styled.Text`
  font-size: 22px;
  font-weight: 800;
  margin-top: 20px;
  margin-bottom: 20px;
`

export const OptionsContainer = styled.View`
  margin-bottom: 20px;
`

export const Option = styled.View`
  flex-direction: row;
  margin-left: 4px;
  margin-bottom: 20px;
`

export const OptionName = styled.Text`
  font-size: 18px;
  font-weight: 700;
  margin-left: 12px;
`

export const ContainerQRCode = styled.View`
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`

export const Data = styled.Text`
  flex: 1;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 20px;
`
