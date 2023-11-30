import styled from 'styled-components/native'
import { FontAwesome5 } from '@expo/vector-icons'

export const Container = styled.View`
  flex: 1;
  height: 100%;

  background-color: #d9d9d9;
`

export const ContainerScrollView = styled.ScrollView`
  margin-bottom: 60px;
`

export const ContainerMenu = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
`

export const IconContainer = styled.View`
  height: 120px;
  width: 120px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  margin-top: 30px;
  margin-bottom: 30px;
  elevation: 5;
`

export const Icon = styled(FontAwesome5)``

export const CardContainer = styled.View`
  width: 310px;
  height: max-content;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
`

export const IntContainer = styled.View`
  background-color: rgb(255, 255, 255);
  padding-left: 20px;
  padding-right: 20px;
`

export const Line = styled.View`
  background-color: #d2d2d2;
  width: 100%;
  height: 2px;
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
  font-size: 20px;
  font-weight: 800;
  margin-top: 14px;
  margin-bottom: 2px;
`

export const CodeUser = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 14px;
`

export const TitleItem = styled.Text`
  font-size: 18px;
  font-weight: 800;
  margin-top: 14px;
  margin-bottom: 2px;
`

export const ValueItem = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 14px;
`

export const ContainerButton = styled.View`
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 100px;
`
